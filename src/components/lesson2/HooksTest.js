import React,{useState, useReducer, useEffect, useContext} from 'react'
const Context = React.createContext()

function reducer(state, action){
    switch(action.type){
        case 'init':
            return action.value;
        case 'add':
            return [...state, action.value];
        default:
            return state;
    }
}
function FruitAdd(props){
    const [pname, setPname] = useState('');
    const {dispatch} = useContext(Context)
    const onAddFruits=(e)=>{
        if(e.key === 'Enter'){
           // props.onAddFruits(pname)
           dispatch({type:'add', value:pname})
           setPname('')
        }
    }
    return (
        <input type="text"
            value={pname}
            onChange={(e)=>{ setPname(e.target.value) }}
            onKeyDown={onAddFruits}
         />
    )
}
function FruitList(props){
    console.log(props)
    const {fruits} = useContext(Context)
    const [favorite, setFavorite] = useState('');
    return(
        <div>
            <label>{favorite?'你选择的水果是:'+favorite:'请选择你喜欢的水果:'}</label>
            <ul>
                {fruits.map((item, inx)=>{
                    return <li key={inx} onClick={()=>{ setFavorite(item) }}>{item}</li>
                })}
            </ul>
        </div>
    )
}
export default function HooksTest(){
    const [fruits, dispatch] = useReducer(reducer, [])
    useEffect(()=>{
        setTimeout(()=>{
            dispatch({type:'init', value:['香蕉','苹果']})
            console.log(fruits)
        },1000)
    },[])
    return (
        <div>
            <Context.Provider value={{fruits, dispatch}}>
                {/* <FruitAdd onAddFruits={(pname)=>{ dispatch({type:'add', value:pname}) }}/> */}
                <FruitAdd />
                {/* <FruitList data={fruits}/> */}
                <FruitList/>
            </Context.Provider>
        </div>
    )
}