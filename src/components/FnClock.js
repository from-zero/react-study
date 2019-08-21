import React, {useState, useEffect} from 'react'

export default function FnClock() {
    //useState返回状态和修改状态的函数的数组
    const [date, setDate] = useState(new Date())
    //useState useEffect
    //hooks只能在16.8.x之后使用
    //定时器是副作用
    useEffect(()=>{
        const timer = setInterval(()=>{
            setDate(new Date)
        },1000)
        return()=>{
            //释放
            clearInterval(timer)
        }
    }, []) //参数二依赖的状态, []没有依赖且仅执行一次

    return (
        <div>
            {date.toLocaleTimeString()}
        </div>
    )
}
