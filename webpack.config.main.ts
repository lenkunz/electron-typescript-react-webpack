import Path from "path";
import { Configuration } from "webpack";

import CleanWebpackPlugin from "clean-webpack-plugin";
import WebpackNodeExternals from "webpack-node-externals";

const MainConfig: Configuration = {
    entry: {
        main: "./src/main.ts",
    },
    output: {
        filename: "[name].js",
        path: Path.resolve(__dirname, "./dist/main"),
    },
    plugins: [
        new CleanWebpackPlugin(Path.resolve(__dirname, "./dist/main")),
    ],
    target: "electron-main",
};

export default MainConfig;
