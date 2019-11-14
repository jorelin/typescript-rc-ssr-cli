"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
require("./style.scss");
function default_1(props) {
    const { tabList, tabSelKey, setTabSelKey } = props;
    return (React.createElement("div", { className: "hm-sider-tabs" }, tabList.map((v) => React.createElement("span", { key: v.key, onClick: () => setTabSelKey(v.key) }, v.name))));
}
exports.default = default_1;
//# sourceMappingURL=index.js.map