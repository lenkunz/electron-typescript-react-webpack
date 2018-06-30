import Path from "path";
import { Configuration, HotModuleReplacementPlugin, NamedModulesPlugin } from "webpack";
import WebpackMerge from "webpack-merge";

import AppConfig from "./src/Config";
import CommonDevConfig from "./webpack.config.common.dev";
import MainConfig from "./webpack.config.main";

// const HMRPlugins = () => [
//     new HotModuleReplacementPlugin(),
//     new NamedModulesPlugin(),
// ];

let MainDevConfig: Configuration = {
    devtool: "source-map",
    externals: [
        {
            "7zip": "require(\"7zip\");",
        },
    ],
    // plugins: HMRPlugins(),
};

MainDevConfig = WebpackMerge(CommonDevConfig, MainConfig, MainDevConfig);

export default MainDevConfig;
