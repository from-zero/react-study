import React, {Component} from 'react';
import {connect} from '../../store/kreact-redux';
import {add, plus, asyncAdd} from '../../store/counter';

@connect(
    state => ({num:state.counter}),
    {
        add,
        plus,
        asyncAdd
    }
)
class MyReactReduxTest extends Component{
    componentDidMount(){
        console.log(this.props)
    }
    render(){
        return <div>
            {this.props.num}
            <button onClick={()=>this.props.add()}>add</button>
            <button onClick={()=>this.props.plus(2)}>plus</button>
            <button onClick={this.props.asyncAdd}>asyncAdd</button>
        </div>
    }
}
export default MyReactReduxTest;