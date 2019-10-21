/**
 * @Author: zhangb
 * @Date: 2019-07-09 10:45:57
 * @Email: lovewinders@163.com
 * @Last Modified by: zhangb
 * @Last Modified time: 2019-07-26 15:30:28
 * @Description: 
 */
import {all} from 'redux-saga/effects';

// Toplolgy
import {watchFetchExperiment} from './Experiment';

// rootSaga
export default function * () {

    yield all([
        watchFetchExperiment()
    ]);
    console.log('run saga');

}
