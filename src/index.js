import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import logo from './logo.svg'
import './index.css'
import style from './index.module.css'
import store from './store'
import {Provider} from 'react-redux'


//React负责一些逻辑控制进行数据处理
//ReactDOM负责渲染  vdom->dom
//babel-loader将jsx->vdom ，其实调用了React.createElement()类似于vue的render()

//jsx中的变量要求是合法的表达式,if/for不是合法表达式

// const name = <h1>React is great</h1>
// const user = {firstName:'tom', lastName:'jerry'}
// function formaterName(user){
//     return user.firstName +' '+ user.lastName
// }
// const greet = <p>hello,zero</p>
// const larr = [1,2,3]
// const arr = [1,2,3].map(item => <li key={item}>{item}</li>)
// //数组会作为一组元素对待
// const  jsx = (
//     <div>
//         {/* 条件语句 */}
//         {name?<h1>name</h1>:''}
//         {/* 函数调用 */}
//         {formaterName(user)}
//         {/*  jsx */}
//         {greet}
//         {/*  array */}
//         <ul>
//             {larr.map((item, inx)=>{
//                 console.log(item)
//                 return <li key={parseInt(item)-3}>{item}</li>
//             })}
//             {arr}
//         </ul>
//         {/* 属性使用， 静态值使用"", 动态值用{}  */}
//         {/* class是关键字 使用className  */}
//         <img src={logo} alt='logo' style={{width:100}} className={style.img + ' img1'}></img>
//     </div>
// )
// console.log(jsx)
ReactDOM.render(
    <Provider store={store}><App title="my class" /></Provider>, document.getElementById('root'))