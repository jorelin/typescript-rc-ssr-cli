import * as React from "react";

import {TabItemProps} from "../types";

import "./style.scss";

interface Props {
    tabList: Array<object>;
    tabSelKey: string;
    setTabSelKey: (key: string) => void;
}

export default function(props: Props) {
    const {tabList, tabSelKey, setTabSelKey} = props;
    return (
        <div className="hm-sider-tabs">
            {tabList.map((v: TabItemProps) => <span key={v.key} onClick={() => setTabSelKey(v.key)}>{v.name}</span>)}
        </div>
    );
}