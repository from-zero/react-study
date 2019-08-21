import React, {Component} from 'react'
import logo from '../logo.svg'
import style from '../index.module.css'
export default class JsxTest extends Component{
    render(){
        const name = <h1>React is great</h1>
        const user = {firstName:'tom', lastName:'jerry'}
        function formaterName(user){
            return user.firstName +' '+ user.lastName
        }
        const greet = <p>hello,zero</p>
        const larr = [1,2,3]
        const arr = [1,2,3].map(item => <li key={item}>{item}</li>)
        const  jsx = (
            <div>
                {/* 条件语句 */}
                {name?<h1>name</h1>:''}
                {/* 函数调用 */}
                {formaterName(user)}
                {/*  jsx */}
                {greet}
                {/*  array */}
                <ul>
                    {larr.map((item, inx)=>{
                        console.log(item)
                        return <li key={parseInt(item)-3}>{item}</li>
                    })}
                    {arr}
                </ul>
                {/* 属性使用， 静态值使用"", 动态值用{}  */}
                {/* class是关键字 使用className  */}
                <img src={logo} alt='logo' style={{width:100}} className={style.img1}></img>
            </div>
        )
        return jsx
    }
}