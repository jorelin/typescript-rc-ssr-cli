/**
 * @Author: zhangb
 * @Date: 2019-11-14 11:05:59
 * @Email: lovewinders@163.com
 * @Last Modified by: zhangb
 * @Last Modified time: 2019-12-05 17:32:18
 * @Description:
 */
import React from 'react';
import { connect } from 'react-redux';
// import Fetch from "@hysight/fetch";

import SiderTabs from './SiderTabs';

// SiderBody
import Source from './SiderBody/Source';
import Operator from './SiderBody/Operator';

import {FET_SOURCE_LIST_DATA, FET_OPERATORS_LIST_DATA} from 'app/constant/Experiment';

import './style.scss';

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
function LayoutSider(props) {

    const {dispatch} = props;
    const [tabList] = React.useState([
        {name: '数据源', key: 'source', comp: Source},
        {name: '组件', key: 'operator', comp: Operator},
    ]);
    const [tabSelKey, setTabSelKey] = React.useState('source');

    const [{comp: Comp}] = tabList.filter((v) => v.key === tabSelKey);

    React.useEffect(() => {

        // (async () => {
        //     const data = await handleFetch();
        //     setTabBody(data);
        // })();
        dispatch({
            type: FET_SOURCE_LIST_DATA,
        });
        dispatch({
            type: FET_OPERATORS_LIST_DATA,
        });
    
    }, []);

    return (
        <div className="hm-layout-sider">
            <SiderTabs
                tabList={tabList}
                tabSelKey={tabSelKey}
                setTabSelKey={setTabSelKey}
            />
            <Comp />
        </div>
    );

}
export default connect()(LayoutSider);