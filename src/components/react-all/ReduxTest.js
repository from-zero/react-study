import React, { Component } from 'react'
// import store from '../../store/index'
import {connect} from 'react-redux'
import {add, plus, asyncAdd} from '../../store/counter'

//把值自动映射到属性并自动刷新组件
//参数1, mapStateToProps = (state) => {return {num:state}}
//参数2, mapDispatchToProps = dispatch => {return {type:'add'}}
@connect( 
    state=>({num:state.counter}),
    { 
        //提取到对应的reducer中
        add,
        plus,
        asyncAdd,
        //vuex中的action
        // add:(val)=>({type:'add', value:val}), //action creator
        // plus:(val)=>({type:'plus', value:val}),
        // //异步 返回函数
        // asyncAdd:()=>dispatch=>{
        //     //异步调用
        //     setTimeout(()=>{
        //         dispatch({type:'add'})
        //     }, 1000)
        // }
    }
    /****
     * dispatch => ({
     *  add:()=>dispatch({type:'add'})
     *  plus:()=>dispatch({type:'plus'})
     * })
     */
)

class ReduxTest extends Component {
    // componentDidMount(){
    //     store.subscribe(()=>{
    //         this.forceUpdate()
    //     })
    // }
    render() {
        return (
            <div>
                {/* {store.getState()}<br/> */}
                {this.props.num}<br/>
                <button onClick={()=>this.props.add()}>add</button>
                <button onClick={()=>this.props.plus(2)}>plus</button>
                <button onClick={this.props.asyncAdd}>asyncAdd</button>
            </div>
        )
    }
}
export default ReduxTest;