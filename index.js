const fetch = require('node-fetch');
const DEFAULT_API_ENDPOINT_FEATURES = 'http://localhost:4683/api/v1/wifis/patch/reloadFeatureCache';
const DEFAULT_API_ENDPOINT_HEAT_MAP = 'http://localhost:4683/api/v1/wifis/patch/reloadHeatmapData';

const startRequest = async () => {
  fetch(
      process.env.API_ENDPOINT ?? DEFAULT_API_ENDPOINT_FEATURES,
      {method: 'PATCH'},
      (err) => {
        if (err) {
          console.log(err);
        }
      },
  );
  fetch(
      process.env.API_ENDPOINT ?? DEFAULT_API_ENDPOINT_HEAT_MAP,
      {method: 'PATCH'},
      (err) => {
        if (err) {
          console.log(err);
        }
      },
  );
  const response = {
    statusCode: 200,
    body: JSON.stringify('Request started.'),
  };
  return response;
};

startRequest()

exports.handler = startRequest;
