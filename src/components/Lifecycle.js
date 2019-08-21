import React, { Component } from 'react'

export default class Lifecycle extends Component {
    constructor(props){
        super(props)
        this.state = {
            my:'my'
        }
        //常用于初始化状态
        console.log('1.组件构造函数执行')
    }
    componentWillMount(){
        //此时可以访问状态和属性，可以进行api调用等
        console.log('2.组件将要挂载')
    }
    componentDidMount(){
        //可以进行状态更新操作,建议在此调用api
        console.log('3.组件已挂载')
        setTimeout(()=>{
            this.setState( {my:'your'})
        },1000)
    }
    componentWillReceiveProps(){
        //父组件传递的属性有变化，要做相应响应
        console.log('4.将要接受属性传递')
    }
    shouldComponentUpdate(nextProps, nextState){
        //优化点
        console.log(nextProps, nextState)
        console.log('5.组件是否需要更新')
        return true;
    }
    componentWillUpdate(){
        console.log('6.组件将要更新')
    }
    componentDidUpdate(){
        console.log('7.组件已更新')
    }
    componentWillUnmount(){
        console.log('8.组件将要卸载')
    }
    render() {
        return (
            <div>
                {this.state.my}&nbsp;
                {this.props.content}
            </div>
        )
    }
}
