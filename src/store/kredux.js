/****
 * 实现state存储
 * 实现getState
 * 实现dispatch触发state改变
 * 订阅subscribe
 */
export const createStore=(reducer,enhanncer)=>{
    if(enhanncer){
       return enhanncer(createStore)(reducer)
    }
    let currState = undefined;
    let cbs = [];
    function getState(){
        return currState;
    }
    function dispatch(action){
        currState = reducer(currState, action)
        cbs.forEach((cb)=>{
            cb(currState);
        })
    }
    function subscribe(cb){
        cbs.push(cb);
    }
    //初始化状态
    dispatch({type:'@kkb-redux-init'})

    return {
        getState,
        dispatch,
        subscribe
    }
}
export function applyMiddleware(...middlewares){
    //返回强化store的方法
    return createStore => (...args) =>{
        const store = createStore(...args);

        let dispatch = store.dispatch;
        const midApi = {
            getState:store.getState,
            dispatch: (...args)=> dispatch(...args)
        }

        let chain = middlewares.map(mw=>mw(midApi))

        //用聚合对原有的dispatch进行加强
        dispatch = compose(...chain)(store.dispatch)
        //console.log(dispatch)
        return {
            ...store,
            dispatch
        }
    }
}
function compose(...funcs){
    if(funcs.length == 0) return args=>args;
    if(funcs.length == 1) return funcs[0];

    //[f1,f2,f3] ===> f3(f2(f1()))
<<<<<<< HEAD
    return funcs.reduce((left, right)=>(...args)=> right(left(...args)) )
}
=======
    //最终return之后被调用的顺序 会是 f3,f2,f1
    //所以应该 转换为 ===> f1(f2(f3()))，之后被调用才是 f1,f2,f3
    return funcs.reduce((left, right)=>(...args)=>left(right(...args)))
}
>>>>>>> bad3a7577780612d3be8d5554c6abe493c925be6
