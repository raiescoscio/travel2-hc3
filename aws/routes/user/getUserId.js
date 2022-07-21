const dynamo = require("../config");
const tableName = "users";

const getUserId = async (id) => {
    return await dynamo
              .get({
                TableName: tableName,
                Key: {
                  id: id
                }
              })
              .promise();
};

module.exports = getUserId;
