import Path from "path";
import Webpack from "webpack";

import MainProdConfig from "./webpack.config.main.prod";
import RendererProdConfig from "./webpack.config.renderer.prod";

export const Indexes = { ElectronMain: 0, ElectronRenderer: 1 };

const OverallConfig = [];
OverallConfig[Indexes.ElectronMain] = MainProdConfig;
OverallConfig[Indexes.ElectronRenderer] = RendererProdConfig;

export default OverallConfig;

