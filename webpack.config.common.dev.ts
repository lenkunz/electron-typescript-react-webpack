import { Configuration } from "webpack";

import { CheckerPlugin } from "awesome-typescript-loader";
import WebpackMerge from "webpack-merge";

import CommonConfig from "./webpack.config.common";

let CommonDevConfig: Configuration = {
    mode: "development",
    module: {
        rules: [
            {
                loaders: [
                    {
                        loader: "babel-loader",
                        options: {
                            babelrc: false,
                            plugins: [
                                "react-hot-loader/babel",
                            ],
                        },
                    },
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
    plugins: [
        new CheckerPlugin(),
    ],
};

CommonDevConfig = WebpackMerge(CommonConfig, CommonDevConfig);

export default CommonDevConfig;
