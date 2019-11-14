"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
// import Tree from "@hysight/tree";
const tools_1 = require("app/utils/tools");
require("./style.scss");
// const {TreeNode, TreeMore} = Tree;
function default_1() {
    const dragOperatorHandler = ({ event: e, node }) => {
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("data", JSON.stringify({
            cate: "operator",
            info: {
                id: tools_1._UUID(),
                name: "node.props.operatorname",
            },
        }));
    };
    const treeNodeData = [
        {
            id: 1,
            name: "文件夹",
            type: "dir",
            children: [
                {
                    id: 12,
                    name: "数据源1",
                    type: "source",
                },
            ],
        },
    ];
    // const toRenderTreeNodes = (treeNodeData) => {
    //     const loop = (data) => data.map((item) => {
    //         const {children, id, name, type, pid, dataSourceId} = item;
    //         if (item.children && item.children.length) {
    //             return (
    //                 <TreeNode
    //                     key={id}
    //                     title={name}
    //                     draggable={false}
    //                     isLeaf={type !== "dir"}
    //                     isMore={type === "dir"}
    //                     // icon={type}
    //                     id={id}
    //                     pid={pid}
    //                 >
    //                     {loop(children)}
    //                 </TreeNode>
    //             );
    //         }
    //         return (
    //             <TreeNode
    //                 key={id}
    //                 title={name}
    //                 isLeaf={type !== "dir"}
    //                 draggable={true}
    //                 // icon={type}
    //                 id={id}
    //                 pid={pid}
    //                 dbId={dataSourceId}
    //             />
    //         );
    //     });
    //     return (
    //         <Tree
    //             className="draggable-tree"
    //             // defaultExpandedKeys={this.state.expandedKeys}
    //             // draggable={false}
    //             autoExpandParent={true}
    //             disabledProviderEvents={true}
    //             // onDrop={this.onDrop}
    //             // onRightClick={() => console.log("onRightClick")}
    //             // onExpand={() => console.log("onExpand")}
    //             // // onSelect={this.onSelect}
    //             onDragStart={dragOperatorHandler}
    //             // onDragEnter={this.onDragEnter}
    //             // onDragOver={() => console.log("onDragOver")}
    //             // onDragLeave={() => console.log("onDragLeave")}
    //             // onDragEnd={() => console.log("onDragEnd")}
    //             // onMoreClick={() => console.log("onMoreClick")}
    //         >
    //             {loop(treeNodeData)}
    //         </Tree>
    //     );
    // };
    return (React.createElement("div", null, "\u5DF2\u79FB\u9664\u539F\u6709\u5185\u7F51npm\u79C1\u6709\u6E90\u7684\u4E00\u4E9B\u5305\uFF0C\u4EE5\u4FBF\u4E8E\u5176\u4ED6\u4EBA\u7814\u7A76demo\u8DD1\u901A"));
}
exports.default = default_1;
//# sourceMappingURL=index.js.map