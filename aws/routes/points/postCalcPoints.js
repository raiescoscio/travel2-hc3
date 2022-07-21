const dynamo = require("../config");
const tableName = "users";

const postCalcPoints = async (req) => {
    console.log("Processing...");
    const points = Math.trunc(req.value);
      
    if (points !== 0) {
      await dynamo
        .update({
          TableName: tableName,
          Key: { id: req.id },
          UpdateExpression: "SET points = points + :points",
          ExpressionAttributeValues: {
              ":points": points
          },
          ReturnValues: "UPDATED_NEW"
        }).promise();
        
      return `${points} point${points === 1 ? "" : "s"} updated`;
    } else {
      return `no point updated`;
    }
};

module.exports = postCalcPoints;
