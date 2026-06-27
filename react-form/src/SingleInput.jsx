import { useState } from "react"

export default function SingleInput(){
    let [fullName,setFullName]=useState("");
    let setNameChange=(event)=>{
        setFullName(event.target.value);
    }
    let handleForm=(event)=>{
        event.preventDefault();
        setFullName("");
    }
    return (
        <form onSubmit={handleForm}>
        <label htmlFor="userName">Full Name</label>
        <input name="userName" id="userName" type="text" placeholder="Enter Full Name" value={fullName} onChange={setNameChange}/>
        <button>Submit</button>
        </form>
    )
}