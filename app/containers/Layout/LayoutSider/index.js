"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @Author: zhangb
 * @Date: 2019-11-14 11:05:59
 * @Email: lovewinders@163.com
 * @Last Modified by: zhangb
 * @Last Modified time: 2019-11-14 11:31:22
 * @Description:
 */
const React = require("react");
// import Fetch from "@hysight/fetch";
const SiderTabs_1 = require("./SiderTabs");
// SiderBody
const Source_1 = require("./SiderBody/Source");
const Operator_1 = require("./SiderBody/Operator");
require("./style.scss");
// async function handleFetch() {
//     const fn = await Fetch("/hymodel/data/dataset/usertree")
//     .then((res) => res.data)
//     .catch((err) => {
//         console.log(err);
//     });
//     const params = await Fetch("/hymodel/analysis/operators")
//     .then((res) => res.data)
//     .catch((err) => {
//         console.log(err);
//     });
//     return {
//         fn,
//         params,
//     };
// }
function default_1() {
    const [tabList] = React.useState([
        { name: "数据源", key: "source", comp: Source_1.default },
        { name: "组件", key: "operator", comp: Operator_1.default },
    ]);
    const [tabSelKey, setTabSelKey] = React.useState("source");
    const [{ comp: Comp }] = tabList.filter((v) => v.key === tabSelKey);
    React.useEffect(() => {
        // (async () => {
        //     const data = await handleFetch();
        //     setTabBody(data);
        // })();
    }, []);
    return (React.createElement("div", { className: "hm-layout-sider" },
        React.createElement(SiderTabs_1.default, { tabList: tabList, tabSelKey: tabSelKey, setTabSelKey: setTabSelKey }),
        React.createElement(Comp, null)));
}
exports.default = default_1;
//# sourceMappingURL=index.js.map