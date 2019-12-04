import * as React from "react";
// import Tree from "@hysight/tree";

import _UUID from "app/utils/uuid";

import "./style.scss";

// const {TreeNode, TreeMore} = Tree;

export default function() {

    const dragOperatorHandler = ({ event: e, node }) => {
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData(
            "data",
            JSON.stringify({
                cate: "operator",
                info: {
                    id: _UUID(),
                    name: "node.props.operatorname",
                },
            }),
        );
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
    return (
        <div>
            已移除原有内网npm私有源的一些包，以便于其他人研究demo跑通
            {/* {toRenderTreeNodes(treeNodeData)} */}
        </div>
    );
}