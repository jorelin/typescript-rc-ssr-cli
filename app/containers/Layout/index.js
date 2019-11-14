"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
// containers
const LayoutHeader_1 = require("./LayoutHeader");
const LayoutSider_1 = require("./LayoutSider");
const LayoutContent_1 = require("./LayoutContent");
require("./style.scss");
function default_1() {
    return (React.createElement("div", { className: "hm-layout" },
        React.createElement(LayoutHeader_1.default, null),
        React.createElement("div", { className: "layout-body" },
            React.createElement(LayoutSider_1.default, null),
            React.createElement(LayoutContent_1.default, null))));
}
exports.default = default_1;
//# sourceMappingURL=index.js.map