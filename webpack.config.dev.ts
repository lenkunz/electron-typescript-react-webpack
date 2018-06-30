import Path from "path";
import Webpack from "webpack";

import DevelopmentCommonConfig from "./webpack.config.common.dev";
import MainDevConfig from "./webpack.config.main.dev";
import RendererDevConfig from "./webpack.config.renderer.dev";

export const Indexes = { ElectronMain: 0, ElectronRenderer: 1 };

const OverallConfig = [];
OverallConfig[Indexes.ElectronMain] = MainDevConfig;
OverallConfig[Indexes.ElectronRenderer] = RendererDevConfig;

// tslint:disable-next-line:no-console
console.log("\n=== Dev Config ===\n%o\n\n", OverallConfig);

export default OverallConfig;

