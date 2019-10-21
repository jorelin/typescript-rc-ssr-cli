/**
 * @Author: zhangb
 * @Date: 2019-10-18 16:45:11
 * @Email: lovewinders@163.com
 * @Last Modified by: zhangb
 * @Last Modified time: 2019-10-21 09:56:49
 * @Description: 
 */
const path = require("path");
const webpack = require("webpack");

const configs = require("./product.config");

// ----------------------------------
// get dev || pro Configuration
// ----------------------------------
const {
    env,
    DIR_BASE_PATH,
    COMPILER_DEVTOOL,
    COMPILER_PUBLIC_PATH,
    paths: { assignPath, client, dist },
    DIR_DIST_JS,
    COMPILER_HASH_TYPE,
    // DIR_DIST,
    globals: { __DEV__ },
} = configs;

const webpackAssignConfigs = __DEV__
    ? require("./webpack.config.dev.js") : require("./webpack.config.pro.js");

// ----------------------------------
// entry Configuration
// ----------------------------------
const entry = {
    ...webpackAssignConfigs.entry,
};

// ----------------------------------
// output Configuration
// ----------------------------------
const output = {
    // 打包产出后文件存放位置
    path: dist,
    // entry chunk产出时的文件名称
    filename: `${DIR_DIST_JS}/[name].${COMPILER_HASH_TYPE}.js`,
    // async chunk产出时的文件名称
    chunkFilename: `${DIR_DIST_JS}/[name].${COMPILER_HASH_TYPE}.chunk.js`,
    publicPath: COMPILER_PUBLIC_PATH,
};

// ----------------------------------
// output Configuration
// ----------------------------------
const devtool = COMPILER_DEVTOOL;

// ----------------------------------
// resolve Configuration
// ----------------------------------
const resolve = {
    extensions: [".ts", ".tsx", ".js", ".json", ".scss", ".css", ".styl", ".sass", ".less"],
    alias: {
        "app": client,
        "react": path.join(process.cwd(), "node_modules/react"),
        "react-dom": path.join(process.cwd(), "node_modules/react-dom"),
        "prop-types": path.join(process.cwd(), "node_modules/prop-types"),
        "lodash": path.join(process.cwd(), "node_modules/lodash"),
    },
};

// ----------------------------------
// module Configuration
// ----------------------------------
const modules = {
    rules: [
        {
            test: /\.tsx?$/,
            include: [
                client,
                dist,
            ],
            exclude: [
                dist,
                assignPath(DIR_BASE_PATH, "node_modules"),
            ],
            use: [
                {
                    loader: "babel-loader",
                },
                {
                    loader: "awesome-typescript-loader",
                },
            ],
        },
        // rules Configuration
        ...webpackAssignConfigs.module.rules,
    ],
};

// ----------------------------------
// optimization Configuration
// ----------------------------------
const optimization = webpackAssignConfigs.optimization;

// ----------------------------------
// plugins Configuration
// ----------------------------------
const plugins = [
    new webpack.DllReferencePlugin({
        context: DIR_BASE_PATH,
        manifest: require("./vendors-manifest.json"),
    }),
    new webpack.DefinePlugin(configs.globals),
    // plugins Configuration
    ...webpackAssignConfigs.plugins,
];

// ----------------------------------
// webpack Config Configuration
// ----------------------------------
const webpackConfig = {
    cache: true,
    mode: env,
    entry,
    output,
    devtool,
    resolve,
    optimization,
    plugins,
    module: modules,
};

module.exports = webpackConfig;
