const dynamo = require("../config");
const tableName = "orders";

const getOrders = async () => {
    return await dynamo.scan({ TableName: tableName }).promise();
};

module.exports = getOrders;
        
        
    //   case "GET /v1/{id}":
    //     body = await dynamo
    //       .get({
    //         TableName: TableName,
    //         Key: {
    //           id: event.pathParameters.id
    //         }
    //       })
    //       .promise();
    //     break;
        
    //   case "PUT /v1":
    //     console.log("Processing...");
    //     let requestJSON = JSON.parse(event.body);
    //     await dynamo
    //       .put({
    //         TableName: TableName,
    //         Item: {
    //           id: requestJSON.id,
    //           name: requestJSON.name
    //         }
    //       })
    //       .promise();
    //     body = `Item ${requestJSON.message} added`;
    //     break;
        
        
    //   //=================================
    //   case "POST /calcpoints":
    //     console.log("Processing...");
    //     const req = JSON.parse(event.body);
    //     const points = Math.trunc(req.value);
          
    //     if (points !== 0) {
    //       await dynamo
    //         .update({
    //           TableName: TableName,
    //           Key: { id: req.id },
    //           UpdateExpression: "SET points = points + :points",
    //           ExpressionAttributeValues: {
    //               ":points": Math.trunc(points)
    //           },
    //           ReturnValues: "UPDATED_NEW"
    //         }).promise();
            
    //       body = `${points} point${points === 1 ? "" : "s"} updated`;
    //     } else {
    //       body = `no point updated`;
    //     };

    //     break;
    //   //=================================
      
        
    //   case "POST /v1/{id}":
    //     await dynamo
    //       .update({
    //         TableName: TableName,
    //         Key: { id: event.pathParameters.id },
    //         UpdateExpression: "set #n = :name",
    //         ExpressionAttributeValues: {
    //           ":name": JSON.parse(event.body).name
    //         },
    //         ExpressionAttributeNames: {
    //           "#n": "name"
    //         },
    //         ReturnValues: "UPDATED_NEW"
    //       }).promise();
    //     body = `Item ${event.pathParameters.id} updated`;
    //     break;
  
  