import * as React from "react";

// containers
import LayoutHeader from "./LayoutHeader";
import LayoutSider from "./LayoutSider";
import LayoutContent from "./LayoutContent";

import "./style.scss";

export default function() {
    return (
        <div className="hm-layout">
            <LayoutHeader />
            <div className="layout-body">
                <LayoutSider />
                <LayoutContent />
            </div>
        </div>
    );
}