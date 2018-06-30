import Webpack from "webpack";

const isDevelopment = process.env.NODE_ENV !== "production";

let ExportConfig: Webpack.Configuration[];

if (isDevelopment) {
    ExportConfig = require("./webpack.config.dev")["default"];
} else {
    ExportConfig = require("./webpack.config.prod")["default"];
}

export default ExportConfig;
