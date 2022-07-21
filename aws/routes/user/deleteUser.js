const dynamo = require("../config");
const tableName = "users";

const deleteUser = async (id) => {
    await dynamo
            .delete({
              TableName: tableName,
              Key: {
                id: id
              }
            })
          .promise();
              
    return `User deleted`;

};

module.exports = deleteUser;
