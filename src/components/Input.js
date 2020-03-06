import React from 'react'
const Input = (props)=>{
    return <div>
    <input type='text' value={props.y.x.data.add.title}  onChange={props.y.x.handle.handleChangeTitle} placeholder='Add Title'/>
    <input type='text' value={props.y.x.data.add.para} onChange={props.y.x.handle.handleChangePara} placeholder='Add About'/>
    <input type='text' value={props.y.x.data.add.imageurl} onChange={props.y.x.handle.handleChangeImage} placeholder='Add ImageUrl'/>
    <input type='text' value={props.y.x.data.add.type} onChange={props.y.x.handle.handleChangeType} placeholder='Add Type'/>
        </div>
}
export default Input