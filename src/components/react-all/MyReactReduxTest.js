import React, {Component} from 'react';
import {connect} from '../../store/kreact-redux';
import {add, plus, asyncAdd, asyncAddPromise} from '../../store/counter';

@connect(
    state => ({num:state.counter}),
    {
        add,
        plus,
        asyncAdd,
        asyncAddPromise
    }
)
class MyReactReduxTest extends Component{
    render(){
        return <div>
            {this.props.num}
            <button onClick={()=>this.props.add()}>add</button>
            <button onClick={()=>this.props.plus(2)}>plus</button>
            <button onClick={this.props.asyncAdd}>asyncAdd</button>
            <button onClick={()=>{
                //这个promise对象是thunk返回的 （return action）
                return this.props.asyncAddPromise().then(()=>{
                    console.log('aaaa')
                    console.log(arguments)
                })
            }}>asyncAddPromise</button>
        </div>
    }
}
export default MyReactReduxTest;