import React from 'react'

function Radio({children, ...rest}){
    return (
        <label>
            <input type='radio' {...rest}/>
            {children}
        </label>
    )
}
function RadioGroup(props){
    console.log(React.Children)
    
    return React.Children.map(props.children, (child, inx)=>{
        console.log(child, inx)
        return React.cloneElement(child, {name: props.name})
    })
}
export default function RadioComponsition(){
    return (
        <div>
            <RadioGroup name='country'>
                <Radio value='CN'>中国</Radio>
                <Radio value='AC'>美国</Radio>
                <Radio value='JP'>日本</Radio>
            </RadioGroup>
        </div>
    )
}