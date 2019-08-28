import React from 'react'

const Context = React.createContext();
const Provider = Context.Provider;
const Consumer = Context.Consumer;
function SimpleChild(props){
    return (
        <div onClick={props.add}>{props.name}-{props.counter}</div>
    )
}
const withConsumer = Consumer=>Comp=>props=> (<Consumer>{val=><Comp {...val} {...props}></Comp>}</Consumer>)


const Child = withConsumer(Consumer)(SimpleChild)
export default class CounterHoc extends React.Component{
    state = {
        counter:0
    };
    add = ()=>{
        // this.setState({ counter: this.state.counter + 1})
        this.setState(nextState=>({counter:nextState.counter + 1}))
    };
    render(){
        return(
            <Provider value={{counter:this.state.counter, add:this.add}}>
                <Child name='foo'/>
                <Child name='abc' />
            </Provider>
        )  
    };
}