import React, {Component} from 'react';
import {connect} from '../../store/kreact-redux';
import {add, plus} from '../../store/counter';

@connect(
    state => ({num:state}),
    {
        add,
        plus
    }
)
class MyReactReduxTest extends Component{
    render(){
        return <div>
            {this.props.num}
        </div>
    }
}
export default MyReactReduxTest;