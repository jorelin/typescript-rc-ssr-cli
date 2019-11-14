"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @Author: zhangb
 * @Date: 2019-09-10 14:38:58
 * @Email: lovewinders@163.com
 * @Last Modified by: zhangb
 * @Last Modified time: 2019-09-12 16:58:10
 * @Description:
 */
const React = require("react");
// containers
const DrawLineCache_1 = require("./DrawLineCache");
const SurfaceCache_1 = require("./SurfaceCache");
const Surface_1 = require("./Surface");
require("./style.scss");
function default_1() {
    const dragover = (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
    };
    const dropHandler = (e) => {
        const data = JSON.parse(e.dataTransfer.getData("data"));
        debugger;
    };
    return (React.createElement("div", { className: "hm-layout-content", onDragOver: dragover, onDrop: dropHandler },
        React.createElement("div", { className: "layout-surface" },
            React.createElement(DrawLineCache_1.default, null),
            React.createElement(SurfaceCache_1.default, null),
            React.createElement(Surface_1.default, null))));
}
exports.default = default_1;
//# sourceMappingURL=index.js.map