import React, { Component } from 'react'

export default class LifecycleNew extends Component {
    constructor(props){
        super(props)
        this.state = {
            my:'my'
        }
    }
    componentDidMount(){
        console.log('didMount')
        setTimeout(()=>{
            this.setState({my:'your'})
        },1000)
    }
    static getDerivedStateFromProps(nextProps, nextState){
        // 16.3 new props
        // 16.4 new props setState forceUpdate
        // componentDidWillReceiveProps
        console.log(nextProps, nextState)
        console.log('getDerivedState')
        return null
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log(nextProps, nextState)
        console.log('shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(){
        //dom操作
        console.log('getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate(){
        console.log('didUpdate')
    }
    render() {
        return (
            <div>
                {this.state.my} &nbsp;
                {this.props.content}
            </div>
        )
    }
}
