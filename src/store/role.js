export const RoleReducer=(state=false,action)=>{
    switch(action.type){
        case 'login':
            return true;
        case 'logout':
            return false;
        default:
            return state;
    }
}
export const login = ()=>({type:'login'});
export const logout = ()=>({type:'logout'});