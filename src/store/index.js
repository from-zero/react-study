import {createStore, applyMiddleware, combineReducers} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {counterReducer} from './counter'

//提取到对应的reducer
// const counterReducer = function(state = 0, action){
//     let val = action.value || 1;
//     switch(action.type){
//         case 'add':
//             return state + val;
//         case 'plus':
//             return state - val;
//         default:
//             return state;
//     }
// }
//中间件是有顺序的，一般有依赖的放在后面，被依赖的在前面
const store = createStore(
    combineReducers({
        counter:counterReducer
    }),
    applyMiddleware(logger, thunk)
);
export default store;