import React from 'react'

const Context = React.createContext();
const Provider = Context.Provider;
const Consumer = Context.Consumer;
function Child(props){
    return (
        <div onClick={props.add}>{props.counter}</div>
    )
}
export default class Counter extends React.Component{
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
                <Consumer>
                    {val=> <Child {...val}></Child> }
                </Consumer>
                <Consumer>
                    {val=> <Child {...val}></Child> }
                </Consumer>
                <Consumer>
                    {val=> <Child {...val}></Child> }
                </Consumer>
            </Provider>
        )  
    };
}