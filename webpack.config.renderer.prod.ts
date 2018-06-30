import Path from "path";
import { Configuration } from "webpack";

import WebpackMerge from "webpack-merge";

import CommonProdConfig from "./webpack.config.common.prod";
import RendererConfig from "./webpack.config.renderer";


let RendererProdConfig: Configuration = {
    entry: {
        main: "./src/renderer.tsx",
    },
};

RendererProdConfig = WebpackMerge(CommonProdConfig, RendererConfig, RendererProdConfig);

export default RendererProdConfig;
