
const success = function (body) {
  return buildResponse(200, body);
}

const created = function (body) {
  return buildResponse(201, body);
}

const noContent = function (body) {
  return buildResponse(204, body);
}

const unauthorized = function (body) {
  return buildResponse(401, body);
}

const forbidden = function (body) {
  return buildResponse(403, body);
}

const notfound = function (body) {
  return buildResponse(404, body);
}

const failure = function (body) {
  return buildResponse(500, body);
}

function buildResponse(statusCode, body) {
  return {
    statusCode: statusCode,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true
    },
    body: JSON.stringify(body)
  };
}

module.exports = {
  'success': success,
  'created': created,
  'noContent': noContent,
  'unauthorized': unauthorized,
  'forbidden': forbidden,
  'notfound': notfound,
  'failure': failure
};
