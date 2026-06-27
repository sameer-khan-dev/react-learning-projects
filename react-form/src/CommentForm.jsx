import { useState } from "react"

export default function CommentForm(){
    let [formData,setFormData]=useState({
        username: "",
        remarks: "",
        rating: 5
    })
    let [isSubmit,setIsSubmit]=useState(false);
    let updateFormData=(even)=>{
        setFormData((currData)=>{
            return {...currData,[even.target.name]: even.target.value};
        })
    }
    let handleSubmit=(event)=>{
        event.preventDefault();
        setFormData({
        username: "",
        remarks: "",
        rating: 5
    });
    setIsSubmit(isSubmit=true);
    }
    return (
        <div>
          <h2>Write a comment!</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input type="text" placeholder="username" id="username" value={formData.username} onChange={updateFormData} name="username" />
            <br /><br />
            <label htmlFor="remarks">Remarks</label>
            <textarea name="" id="remarks" placeholder="add few remarks" value={formData.remarks} onChange={updateFormData} name="remarks" />
             <br /><br />
             <label htmlFor="rating">Rating</label>
             <input type="number" placeholder="5" min={1} max={5} id="rating" value={formData.rating} onChange={updateFormData} name="rating" />
             <br /><br />
             <button>Add Comment</button>
             <br /><br />
             {isSubmit?<h3>Submitted</h3>: null}
          </form>
           
        </div>
    )
}