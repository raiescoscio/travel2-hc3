const dynamo = require("../config");
const tableName = "orders";

const deleteOrder = async (id) => {
    await dynamo
            .delete({
              TableName: tableName,
              Key: {
                id: id
              }
            })
          .promise();
              
    return `Order deleted`;
};

module.exports = deleteOrder;
