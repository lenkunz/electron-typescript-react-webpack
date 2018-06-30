import Path from "path";
import Webpack from "webpack";

import HardSourceWebpackPlugin from "hard-source-webpack-plugin";

const Config: Webpack.Configuration = {
    devtool: "source-map",
    module: {
        rules: [{
                enforce: "pre",
                test: /\.ts$/,
                use: {
                    loader: "tslint-loader",
                    options: {
                        configFile: "tslint.json",
                        tsConfigFile: "tsconfig.json",
                    },
                },
            },
        ],
    },
    node: {
        // __dirname: false,
    },
    output: {
        filename: "[name].js",
        path: Path.resolve(__dirname, "./dist"),
    },
    plugins: [
        new HardSourceWebpackPlugin({
            cacheDirectory: Path.resolve(__dirname, "./.hscache"),
        }),
    ],
    resolve: {
        extensions: [".js", ".ts", ".tsx", ".jsx", ".json"],
    },
};

export default Config;
