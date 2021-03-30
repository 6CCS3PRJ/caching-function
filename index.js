const fetch = require('node-fetch');
const DEFAULT_API_ENDPOINT_FEATURES = 'http://localhost:4683/api/v1/wifis/get/reloadFeatureCache';
const DEFAULT_API_ENDPOINT_HEAT_MAP = 'http://localhost:4683/api/v1/wifis/get/realoadHeatmapData';

const startRequest = async () => {
  fetch(process.env.API_ENDPOINT ?? DEFAULT_API_ENDPOINT_FEATURES);
  fetch(process.env.API_ENDPOINT ?? DEFAULT_API_ENDPOINT_HEAT_MAP);
  const response = {
    statusCode: 200,
    body: JSON.stringify('Request started.'),
  };
  return response;
};

exports.handler = startRequest;
