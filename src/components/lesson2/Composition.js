import React from 'react'
function Dialog(props){
    //dom类型的子节点和对象类型同时出现
    // console.log(React)
    // console.log(props.children) // ===>返回一个节点array
    // let obj = {};
    // return (<div style={{border:'1px solid blue'}}>
    //     {obj.header}
    //     {props.children.map((item, inx)=>{
    //         console.log(React.isValidElement(item))
    //         if(React.isValidElement(item)){
    //             return (item)
    //         }else if(typeof item == 'object'){
    //            obj = Object.assign(obj,item)
    //         }
    //     })}
    //     {obj.footer}
    // </div>)       
    const list = {
       a:{title:'aaa', content:'a content'},
       b:{title:'bbb', content:'b content'}
    }
    let msg = props.children.content(list[props.msg])
    console.log(props.children)
    console.log(msg)
    return (<div style={{border:'1px solid blue'}}>
        {props.children.header} <br></br>
        {msg.res}
        {props.children.footer}
    </div>)       
}
export default function Composition(){
    return (
        <div>
                <Dialog msg='b'>
                    {/* 普通插槽 */}
                    {/* <h1>我是标题</h1> */}
                    {/* <div>我是内容 lalalalala</div> */}
                    {/* 具名插槽 & 作用域插槽*/}
                    {
                        {
                            header:'my name is header',
                            footer:(<button onClick={()=>{alert('1111')}}>OK</button>),
                            content:({title, content})=>({
                                res:(
                                        <div>
                                            <h1>{title}</h1>
                                            <div>{content}</div>
                                        </div>
                                )
                            })
                        }   
                    }
                </Dialog>
        </div>
    )
} 