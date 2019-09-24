import React from 'react'
import store from './index'
let context = React.createContext()
let Consumer = context.Consumer;
export let Provider = context.Provider;

export const connect = function(Comp){
        return (stateMap, funcMap)=>{
            return (<Consumer>{val=>{
                // let resState = stateMap(val);
                // let resFunc = funcMap.map(item=>{
                //     return (val)=>{
                //         store.dispatch(item(val))
                //     }
                // })
                // return <Comp {...resState} {...resFunc}></Comp>
            }}</Consumer>)
        }
    }
