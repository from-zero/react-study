import React from 'react'


const withContent = Comp => props=>{
    return <Comp {...props}></Comp>
}
const withLog = Comp =>{
    return class extends React.Component{
        render(){
            return (<Comp {...this.props}></Comp>)
        }
        componentDidMount(){
            console.log('didMount', this.props)
        }
    }
}
const LessonWithContent = withLog(withContent(Lesson))
let lessons = [
    {lesson:'课程一', name:'章节一'},
    {lesson:'课程一', name:'章节二'},
    {lesson:'课程一', name:'章节三'},
]

// @withLog
// @withContent
function Lesson(props){
    return(
        <div>{props.lesson}-{props.name}</div>
    )
}
export default function HocTest() {
    return (
        <div>
            {[0,0,0].map((item, inx) => {
                return <LessonWithContent {...lessons[inx]}  key={inx}/>
            })}
        </div>
    )
}
