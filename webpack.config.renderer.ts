import Path from "path";
import { Configuration } from "webpack";

import CleanWebpackPlugin from "clean-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";

import AppConfig from "./src/Config";

const RendererConfig: Configuration = {
    output: {
        path: Path.resolve(__dirname, "./dist/renderer"),
    },
    plugins: [
        new CleanWebpackPlugin(Path.resolve(__dirname, "./dist/renderer")),
        new HtmlWebpackPlugin({
            template: "./html/index.html",
            title: AppConfig.Title,
        }),
    ],
    target: "electron-renderer",
};

export default RendererConfig;
