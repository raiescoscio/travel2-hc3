const AWS = require("aws-sdk");
const dynamo = new AWS.DynamoDB.DocumentClient();

const TableName = "store";

exports.handler = async (event, context) => {
  let body;
  let statusCode = 200;
  const headers = { "Content-Type": "application/json" };

  try {
    switch (event.routeKey) {
      
      case "DELETE /v1/{id}":
        await dynamo
          .delete({
            TableName: TableName,
            Key: {
              id: event.pathParameters.id
            },
          })
          .promise();
        body = `Deleted item ${event.pathParameters.id}`;
        break;
        
      case "GET /v1":
        body = await dynamo.scan({ TableName: TableName }).promise();
        break;
        
        
      case "GET /v1/{id}":
        body = await dynamo
          .get({
            TableName: TableName,
            Key: {
              id: event.pathParameters.id
            }
          })
          .promise();
        break;
        
      case "PUT /v1":
        console.log("Processing...");
        let requestJSON = JSON.parse(event.body);
        await dynamo
          .put({
            TableName: TableName,
            Item: {
              id: requestJSON.id,
              name: requestJSON.name
            }
          })
          .promise();
        body = `Item ${requestJSON.message} added`;
        break;
        
        
      //=================================
      case "POST /calcpoints":
        console.log("Processing...");
        const req = JSON.parse(event.body);
        const points = Math.trunc(req.value);
          
        if (points !== 0) {
          await dynamo
            .update({
              TableName: TableName,
              Key: { id: req.id },
              UpdateExpression: "SET points = points + :points",
              ExpressionAttributeValues: {
                  ":points": Math.trunc(points)
              },
              ReturnValues: "UPDATED_NEW"
            }).promise();
            
          body = `${points} point${points === 1 ? "" : "s"} updated`;
        } else {
          body = `no point updated`;
        };

        break;
      //=================================
      
        
      case "POST /v1/{id}":
        await dynamo
          .update({
            TableName: TableName,
            Key: { id: event.pathParameters.id },
            UpdateExpression: "set #n = :name",
            ExpressionAttributeValues: {
              ":name": JSON.parse(event.body).name
            },
            ExpressionAttributeNames: {
              "#n": "name"
            },
            ReturnValues: "UPDATED_NEW"
          }).promise();
        body = `Item ${event.pathParameters.id} updated`;
        break;
        
      default:
        throw new Error(`Unsupported route: "${event.routeKey}"`);
    }
  } catch (err) {
    statusCode = 400;
    body = err.message;
  } finally {
    body = JSON.stringify(body);
  }

  return {
    statusCode,
    body,
    headers
  };
};
