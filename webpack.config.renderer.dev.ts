import { spawn } from "child_process";
import Path from "path";
import { Configuration, HotModuleReplacementPlugin, NamedModulesPlugin, SourceMapDevToolPlugin } from "webpack";

import WebpackMerge from "webpack-merge";

import AppConfig from "./src/Config";
import CommonDevConfig from "./webpack.config.common.dev";
import RendererConfig from "./webpack.config.renderer";

const HMRPlugins = () => [
    new HotModuleReplacementPlugin(),
    new NamedModulesPlugin(),
];

let RendererDevConfig: Configuration = {
    context: __dirname,
    devServer: {
        compress: true,
        contentBase: Path.join(__dirname, "dist"),
        headers: { "Access-Control-Allow-Origin": "*" },
        historyApiFallback: {
            disableDotRule: false,
            verbose: true,
        },
        hot: true,
        inline: true,
        lazy: false,
        noInfo: true,
        port: AppConfig.DevelopmentPort,
        publicPath: "/dist/renderer",
        stats: "errors-only",
        watchOptions: {
          aggregateTimeout: 300,
          ignored: /node_modules/,
          poll: 100,
        },
        before() {
          if (process.env.HMR) {
            // tslint:disable-next-line:no-console
            console.log("Starting Main Process...");

            const packageConfig = require("./package.json");

            spawn("npm", ["run", "dev:start:main"], {
                env: process.env,
                shell: true,
                stdio: "inherit",
            })
            .on("close", code => process.exit(code))
            // tslint:disable-next-line:no-console
            .on("error", spawnError => console.error(spawnError));
          }
        },
    },
    entry: {
        main: [
            "react-hot-loader/patch",
            `webpack-dev-server/client?http://localhost:${AppConfig.DevelopmentPort}/`,
            "webpack/hot/only-dev-server",
            "./src/renderer.dev.tsx",
        ],
    },
    output: {
        publicPath: `/dist/renderer`,
    },
    plugins: [
        ...HMRPlugins(),
    ],
};

RendererDevConfig = WebpackMerge(CommonDevConfig, RendererConfig, RendererDevConfig);

export default RendererDevConfig;
