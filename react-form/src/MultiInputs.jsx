import { useState } from "react"

export default function MultiInputs(){
    let [formData,setFormData]=useState({
        fullName: "",
        userName: ""
    });
    let updateFormData=(event)=>{
        setFormData((currData)=>{
            return {...currData,[event.target.name]: [event.target.value]};
        })
    }
    let handleSubmit=(event)=>{
        event.preventDefault();
        setFormData({
        fullName: "",
        userName: ""
    });
    }

    return (
        <form onSubmit={handleSubmit}> 
        <label htmlFor="fullName">Full Name</label>
        <input name="fullName" type="text" id="fullName" placeholder="Enter Full Name" value={formData.fullName} onChange={updateFormData}/>
        <br /><br/>
        <label htmlFor="userName">User Name</label>
        <input name="userName" type="text" id="userName" placeholder="Enter username" value={formData.userName} onChange={updateFormData} />
        <br />
        <button>Submit</button>
        </form>
    )
}