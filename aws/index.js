const getUsers = require("./routes/user/getUsers");
const getUserId = require("./routes/user/getUserId");
const putUser = require("./routes/user/putUser");
const deleteUser = require("./routes/user/deleteUser");

const getOrders = require("./routes/order/getOrders");
const getOrderId = require("./routes/order/getOrderId");
const putOrder = require("./routes/order/putOrder");
const deleteOrder = require("./routes/order/deleteOrder");

const postCalcPoints = require("./routes/points/postCalcPoints");

exports.handler = async (event, context) => {
  let body;
  let statusCode = 200;
  const headers = { "Content-Type": "application/json" };

  try {
    switch (event.routeKey) {
      
      case "GET /users":
        body = await getUsers();
        break;
        
      case "GET /user/{id}":
        body = await getUserId(event.pathParameters.id);
        break;
        
      case "PUT /user":
        body = await putUser(JSON.parse(event.body));
        break;
        
      case "DELETE /user/{id}":
        body = await deleteUser(event.pathParameters.id);
        break;
        
      //====================================================
        
      case "GET /orders":
        body = await getOrders();
        break;
        
      case "GET /order/{id}":
        body = await getOrderId(event.pathParameters.id);
        break;
        
      case "PUT /order":
        body = await putOrder(JSON.parse(event.body));
        break;
        
      case "DELETE /order/{id}":
        body = await deleteOrder(event.pathParameters.id);
        break;
        
      //====================================================
        
      case "POST /calcpoints":
        body = await postCalcPoints(JSON.parse(event.body));
        break;
        
      default:
        throw new Error(`Unsupported route: "${event.routeKey}"`);
    }
  } catch (err) {
    statusCode = 400;
    body = err.message;
  } finally {
    body = JSON.stringify(body);
  }

  return {
    statusCode,
    body,
    headers
  };
};
