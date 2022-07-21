const dynamo = require("../config");
const tableName = "orders";

const getOrders = async () => {
    return await dynamo.scan({ TableName: tableName }).promise();
};

module.exports = getOrders;
