import React, { Component } from 'react'
import {createBrowserHistory} from 'history'
import matchPath from '../../utils/matchPath'

const RouterContext = React.createContext();

class BrowserRouter extends Component{
    constructor(props){
        super(props)
        this.history = createBrowserHistory(this.props)
        this.state = {
            location:this.history.location
        }

        this.unlisten = this.history.listen(location=>{
            this.setState({location})
        })
    }
    componentWillUnmount(){
        if(this.unlisten) this.unlisten()
    }
    render(){
        return(
            <RouterContext.Provider value={{history:this.history, location:this.state.location}}>
                {this.props.children}
            </RouterContext.Provider>
        )
    }
}
class Link extends Component{ //to
    constructor(props){
        super(props)
    }
    render(){
        return(<RouterContext.Consumer>{(history, location)=><a href={this.props.to}>{this.props.children}</a>
        }</RouterContext.Consumer>)
    }
}
class Route extends Component{ //path , children>component>render, 
    constructor(props){
        super(props)
    }
    render(){
        return(<RouterContext.Consumer>{({history, location})=>{
            let match = matchPath(location.pathname, this.props)
            let  props = {
                history, 
                location, 
                match
            }
            let {children, component, render} = this.props;
            let hasChildren = false;
            if(children && typeof children == 'function'){
                children(props);
                hasChildren = true;
            } 
            return(<RouterContext.Provider value={props}>
                    {hasChildren?
                        children:
                            match?
                                component?React.createElement(component, props):
                                    render?render(props):null
                            :null
                    }
            </RouterContext.Provider>)

        }}</RouterContext.Consumer>)
    }
}
class Redirect extends Component{
    constructor(props){
        super(props)
        //from, to
    }
    render(){
        return (<RouterContext.Consumer>
        {({history, location})=>{
            let to = {};
            if(typeof this.props.to == 'string') to.pathname = this.props.to;
            else to = this.props.to;
            if(!this.props.from){
                history.push(to)
            }else if(this.props.from == location.pathname){
                history.push(to)
            }
            return null
        }}
        </RouterContext.Consumer>)
    }
}
export {
    BrowserRouter,
    Link,
    Route,
    Redirect
}
