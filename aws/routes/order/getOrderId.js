const dynamo = require("../config");
const tableName = "orders";

const getOrderId = async (id) => {    
    return await dynamo
              .get({
                TableName: tableName,
                Key: {
                  id: id
                }
              })
              .promise();
};

module.exports = getOrderId;
