import React from 'react'
let Context = React.createContext()
export function Provider(props) {
    return <Context.Provider value={props.store}>
        {props.children}
    </Context.Provider>
}
/*
export class Provider extends React.Component{
    render(){
        return <Context.Provider value={this.props.store}>
            {this.props.children}
        </Context.Provider>
    }
}
*/

function transferFunc(funcMap, dispatch) {
    if (typeof funcMap == 'undefined') return { dispatch: dispatch };
    if (typeof funcMap == 'function') funcMap = funcMap();
    let res = {};
    for (let key in funcMap) {
        let func = funcMap[key]
        res[key] = (val) => {
            //此处无法处理没有参数的情况
            dispatch(func(val))
        }
    }
    return res;
}

function bindActionCreator(creator, dispatch) {
    //return (...args) => dispatch(creator(...args))
    return function () {
        //console.log(arguments)
        return dispatch(creator.apply(this, arguments))
    }
}
function bindActionCreators(creators, dispatch) {
    return Object.keys(creators).reduce((ret, item) => {
        ret[item] = bindActionCreator(creators[item], dispatch)
        return ret
    }, {})
}

export const connect = function (stateMap, funcMap) {
    return (Comp) => {
        class MyRedux extends React.Component {
            constructor(props, context) {
                super(props, context)
                this.state = {
                    props: {}
                }
                this.store = this.props.store;
                //console.log(context)
            }
            componentDidMount() {
                this.store.subscribe(() => this.update())
                this.update();
            }
            update() {
                let resState = stateMap(this.store.getState());
                let resFuncs = bindActionCreators(funcMap, this.store.dispatch);
                //console.log(resState, resFuncs)
                this.setState({
                    props: {
                        ...this.state.props,
                        ...resState,
                        ...resFuncs
                    }
                });
            }
            render() {
                return <Comp {...this.state.props}></Comp>
            }
        }
        return () => { return <Context.Consumer>{val => <MyRedux store={val}></MyRedux>}</Context.Consumer> }
    }
}
// import React from 'react'
// import PropTypes from 'prop-types'
// import { bindActionCreators } from './kkb-redux'
// export const connect = (mapStateToProps = state => state, mapDispatchToProps = {}) =>
//     (WrapComponent) => {
//         return class ConnectComponent extends React.Component {
//             static contextTypes = {
//                 store: PropTypes.object
//             }
//             constructor(props, context) {
//                 super(props, context)
//                 this.state = {
//                     props: {}
//                 }
//             }
//             componentDidMount() {
//                 const { store } = this.context
//                 store.subscribe(() => this.update())
//                 this.update()
//             }
//             update() {
//                 const { store } = this.context
//                 const stateProps = mapStateToProps(store.getState())
//                 const dispatchProps = bindActionCreators(mapDispatchToProps,
//                     store.dispatch)
//                 this.setState({
//                     props: {
//                         ...this.state.props,
//                         ...stateProps,
//                         ...dispatchProps
//                     }
//                 })
//             }
//             render() {
//                 return <WrapComponent {...this.state.props}></WrapComponent>
//             }
//         }
//     }
// export class Provider extends React.Component {
//     static childContextTypes = {
//         store: PropTypes.object
//     }
//     getChildContext() {
//         return { store: this.store }
//     }
//     constructor(props, context) {
//         super(props, context)
//         this.store = props.store
//     }
//     render() {
//         return this.props.children
//     }
// }