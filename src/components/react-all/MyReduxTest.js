import React, {Component} from 'react';
import {createStore, applyMiddlewares} from '../../store/kredux';
import {counterReducer} from '../../store/counter';

//中间件
const logger = ({dispatch, getState})=>{
    return dispatch => action =>{
        console.log(action.type+'执行了');
        console.log(action);
        return dispatch(action)
    }
} 
const thunk = () =>{
    return dispatch => action =>{
        if(typeof action == 'function') {
            /** 
            *不return也不会报错，只是会继续进入到logger打印一个有action为function的log,然后等待setTimeout执行后又再次触发 logger
            **/
            action()
            //return action()
        }
        //action()
        return dispatch(action)
    }
}
export const store = createStore(counterReducer, applyMiddlewares(logger, thunk));

export default class MyReduxTest extends Component{
    componentDidMount(){
        store.subscribe(()=>{
            this.forceUpdate()
        })
    }
    render(){
        return <div>
            {store.getState()}<br/>
            <button onClick={()=>store.dispatch({type:'add'})}>add</button><br/>
            <button onClick={()=>store.dispatch({type:'plus'})}>plus</button><br/>
            <button onClick={()=>store.dispatch(()=>{
                setTimeout(()=>{
                    store.dispatch({type:'add'})
                },2000)
            })}>aysncAdd</button><br/>
        </div>
    }
}