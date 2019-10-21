import Fetch from "@hysight/fetch";
import { string } from "prop-types";

interface ApiProps {
    fetchSourceListData: () => Promise<boolean>;
    fetchOperatorsListData: () => Promise<boolean>;
}

const Api: ApiProps = {
    /* -----------------------左边侧边栏部分---------------------- */
    // 获取数据源列表
    fetchSourceListData() {

        return Fetch("/hymodel/data/dataset/usertree")
        .then((res) => res)
        .catch((err) => {

            console.log(err);

        });

    },
    // 获取组件列表
    fetchOperatorsListData() {

        return Fetch("/hymodel/analysis/operators")
        .then((res) => res)
        .catch((err) => {

            console.log(err);

        });

    },
};

export default Api;