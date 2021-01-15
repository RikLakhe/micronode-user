"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

const app = (0, _express.default)();
const port = process.env.PORT || "3001";
app.use((0, _morgan.default)('dev'), (0, _cors.default)({
  exposedHeaders: 'XSRF-TOKEN'
}), _bodyParser.default.json({
  limit: '50mb'
}), _bodyParser.default.urlencoded({
  extended: true
}));
app.get('/', (request, response) => {
  response.json({
    info: 'Node.js, Express, and Postgres API'
  });
});
app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
//# sourceMappingURL=startServer.js.map