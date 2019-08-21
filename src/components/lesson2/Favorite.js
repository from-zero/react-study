import React, {useState, useEffect} from 'react';

function List({fruits, onSetFruits}){
    return (
        <ul>
            {
                fruits?fruits.map((item,inx) =>{
                    return (<li key={inx} onClick={()=>{
                        onSetFruits(item)
                    }}>{item}</li>)
                }):null
            }
        </ul>
    )
}

function HookTest(props){
    return (
        <div>{props.favorite?`您选择的水果是:${props.favorite}`:'请选择喜爱的水果:'}</div>
    )
}
function FavoriteAdd({onAddFruits}){
    const [fname, setFname] = useState('');
    const onKeydown=(e)=>{
        if(e.key === 'Enter'){
            onAddFruits(fname)
            setFname('')
        }
    }
    return(
        <input type='text'
            onChange={(e)=>{setFname(e.target.value)}}
            onKeyDown={onKeydown}
            value={fname}
        ></input>
    )
}
export default function Favorite(props){
    const [title] = useState('开课吧真不错');
    const [pname, setPname] = useState('');
    const [fruits, setFruits] = useState([]);
    useEffect(()=>{
        setTimeout(()=>{
            setFruits(['香蕉','苹果'])
        },1000)
        return ()=>{
        }
    },[])
    const addFruits=(f)=>{
        setFruits([...fruits, f])
        console.log(fruits)
    }
    return (
        <div>
            <h1>{title}</h1>
            <FavoriteAdd onAddFruits={addFruits} />
            <HookTest favorite={pname}/>
            <List fruits={fruits} onSetFruits={setPname}></List>
        </div>
    )
}