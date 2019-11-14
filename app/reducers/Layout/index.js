"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Author: zhangb
 * @Date: 2019-09-12 15:25:19
 * @Email: lovewinders@163.com
 * @Last Modified by: zhangb
 * @Last Modified time: 2019-09-12 16:32:50
 * @Description:
 */
const redux_1 = require("redux");
const DrawlineCache_1 = require("./DrawlineCache");
const SurfaceCache_1 = require("./SurfaceCache");
// import nodes from "./Nodes";
exports.default = redux_1.combineReducers({
    drawlineCache: DrawlineCache_1.default,
    surfaceCache: SurfaceCache_1.default,
});
//# sourceMappingURL=index.js.map