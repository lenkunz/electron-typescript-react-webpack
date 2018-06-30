import Path from "path";
import { Configuration } from "webpack";
import WebpackMerge from "webpack-merge";

import AppConfig from "./src/Config";
import CommonProdConfig from "./webpack.config.common.prod";
import MainConfig from "./webpack.config.main";

let MainProdConfig: Configuration = {
};

MainProdConfig = WebpackMerge(CommonProdConfig, MainConfig, MainProdConfig);

export default MainProdConfig;
