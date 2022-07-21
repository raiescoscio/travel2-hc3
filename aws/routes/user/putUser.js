const dynamo = require("../config");
const tableName = "users";

const putUser = async (req) => {
    console.log("Processing...");
    
    await dynamo
          .put({
            TableName: tableName,
            Item: {
              id: req.id,
              name: req.name,
              email: req.email,
              points: req.points
            }
          })
          .promise();
          
      return `User ${req.name} added`;
};

module.exports = putUser;
