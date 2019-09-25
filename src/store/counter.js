
//vuex中的action
export const add = val =>({type:'add', value:val}); //action creator
export const plus = (val)=>({type:'plus', value:val});
        //异步 返回函数
export const asyncAdd = ()=>dispatch=>{
            //异步调用
            setTimeout(()=>{
                dispatch({type:'add'})
            }, 1000)
        }
export const asyncAddPromise = ()=>dispatch=>{
            //异步调用
            return new Promise(resolve=>{
                setTimeout(()=>{
                    dispatch({type:'add',value:3})
                    resolve()
                }, 1000)
            })
        }
export const counterReducer = function(state = 0, action){
    let val = action.value || 1;
    switch(action.type){
        case 'add':
            return state + val;
        case 'plus':
            return state - val;
        default:
            return state;
    }
}