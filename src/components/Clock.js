import React, { Component } from 'react'

export default class Clock extends Component {
    constructor(props){
        super(props)
        this.state = {
            date: new Date(),
            counter: 0
        }
    }
    componentDidMount(){
        this.timer = setInterval(()=>{
            this.setState({ date: new Date() },()=>{
                this.props.change(this.state.date.toLocaleTimeString())
            })
        },1000)
        // this.setState({ counter: this.state.counter + 1 },()=>{
        //     console.log('-----------1')
        //     console.log(this.state.counter)
        // })
        // console.log(this.state.counter)
        // this.setState({ counter: this.state.counter + 1 },()=>{
        //     console.log('-----------2')
        //     console.log(this.state.counter)
        // })
        // console.log(this.state.counter)
        // this.setState({ counter: this.state.counter + 1 },()=>{
        //     console.log('-----------3')
        //     console.log(this.state.counter)
        // })
        // console.log(this.state.counter)
        this.setState((state, props)=>{ 
            console.log(state.counter)
            return {counter:state.counter +1 } 
        },()=>{
            console.log('-----------1')
            console.log(this.state.counter)
        })
        console.log(this.state.counter)
        this.setState((state, props)=>{
            console.log(state.counter)
            return { counter:state.counter +1 }
        },()=>{
            console.log('-----------2')
            console.log(this.state.counter)
        })
        console.log(this.state.counter)
        this.setState((state, props)=>{
            console.log(state.counter)
            return { counter:state.counter +1 }
        },()=>{
            console.log('-----------3')
            console.log(this.state.counter)
        })
        console.log(this.state.counter)

    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    render() {
        return (
            <div>
                {this.state.date.toLocaleTimeString()}
                <br/>
                { this.state.counter.toString() }
            </div>
        )
    }
}
