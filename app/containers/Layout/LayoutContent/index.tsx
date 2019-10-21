/**
 * @Author: zhangb
 * @Date: 2019-09-10 14:38:58
 * @Email: lovewinders@163.com
 * @Last Modified by: zhangb
 * @Last Modified time: 2019-09-12 16:58:10
 * @Description:
 */
import * as React from "react";

// containers
import DrawLineCache from "./DrawLineCache";
import SurfaceCache from "./SurfaceCache";
import Surface from "./Surface";

import "./style.scss";

export default function() {
    const dragover = (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
    };
    const dropHandler = (e) => {
        const data = JSON.parse(e.dataTransfer.getData("data"));
        debugger;
    };
    return (
        <div
            className="hm-layout-content"
            onDragOver={dragover}
            onDrop={dropHandler}
        >
            <div className="layout-surface">
                <DrawLineCache />
                <SurfaceCache />
                <Surface />
            </div>
        </div>
    );
}