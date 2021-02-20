import React,{useState} from 'react'

const UseEstateComponent = () => {
    const [name,setName]=useState("Nasim Kabir")
    return (
        <div>
            <h1>{name}</h1>
            <button onClick={()=>{setName("Md. Nasim Kabir")}}>Change</button>
        </div>
    )
}

export default UseEstateComponent
