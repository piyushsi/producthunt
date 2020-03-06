import React from "react"
import Input from './Input'
const Form =(props)=>{
    return <div className="main_2_1 main_2_4">
    <Input y={props}/>
    <button onClick={ props.x.addProduct}>Add</button>   
</div>
}
export default Form