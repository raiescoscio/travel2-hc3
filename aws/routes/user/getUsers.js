const dynamo = require("../config");
const tableName = "users";

const getUsers = async () => {
    return await dynamo.scan({ TableName: tableName }).promise();
};

module.exports = getUsers;
        
