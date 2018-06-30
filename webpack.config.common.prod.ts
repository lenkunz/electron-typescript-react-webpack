import { Configuration } from "webpack";

import WebpackMerge from "webpack-merge";

import CommonConfig from "./webpack.config.common";

let CommonDevConfig: Configuration = {
    mode: "production",
    module: {
        rules: [
            {
                loaders: [
                    {
                        loader: "awesome-typescript-loader",
                        options: {
                            useCache: true,
                        },
                    },
                ],
                test: /\.tsx?$/,
            },
        ],
    },
};

CommonDevConfig = WebpackMerge(CommonConfig, CommonDevConfig);

export default CommonDevConfig;
