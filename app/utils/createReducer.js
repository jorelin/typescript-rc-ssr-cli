/**
 * @Author: zhangb
 * @Date: 2019-07-09 10:45:57
 * @Email: lovewinders@163.com
 * @Last Modified by: zhangb
 * @Last Modified time: 2019-07-26 16:06:29
 * @Description: 
 */
export  default function (initialState, reducerMap) {

    return (state = initialState, action) => {

        const reducer = reducerMap[action.type];
        return reducer ? reducer(state, action) : state;
    
    };

}