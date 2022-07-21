const dynamo = require("../config");
const tableName = "orders";

const putOrder = async (req) => {
    console.log("Processing...");
    
    await dynamo
          .put({
            TableName: tableName,
            Item: {
              id: req.id,
              user_id: req.user_id,
              date: req.date,
              value: req.value
            }
          })
          .promise();
          
      return `Order ${req.id} added`;
};

module.exports = putOrder;
