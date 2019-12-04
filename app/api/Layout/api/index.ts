/*
 * @Author: zhangb
 * @Date: 2019-12-03 14:04:03
 * @Email: lovewinders@163.com
 * @Last Modified by: zhangb
 * @Last Modified time: 2019-12-04 17:17:58
 * @Description:
 */
import Fetch from "@hysight/fetch";

interface ApiProps {
    fetchSourceListData: () => void;
    fetchOperatorsListData: () => void;
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