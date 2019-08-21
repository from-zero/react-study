import React, {Component} from 'react'
import Clock from './Clock';
import FnClock from './FnClock';

export default class StateMgr extends Component {
    state = {time:0}
    onChange=(time)=>{
        this.setState({time})
    }
    render(){
        return (
            <div>
                <span>父组件</span>{this.state.time}
                <Clock change={this.onChange} />
                <FnClock />
            </div>
        )
    }
}
