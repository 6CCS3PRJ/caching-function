const DEFAULT_API_ENDPOINT = "http://localhost:4683/api/v1/wifis/get/reloadFeatureCache"

const startRequest = async (event) => {
  fetch(process.env.API_ENDPOINT ?? DEFAULT_API_ENDPOINT);
  const response = {
    statusCode: 200,
    body: JSON.stringify('Request started.'),
  };
  return response;
};

exports.handler = startRequest;
