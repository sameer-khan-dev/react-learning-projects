import { useState } from 'react';
export default function LikeButton() {
 let likeStyle={
  color:"red",
 }
 
 let [isLiked,setIsLiked]=useState(false);
 let [calculateLike,setcalculateLike]=useState(0);
 let toggleLike=()=>{
  setIsLiked((currLike)=>{
    return !currLike;
  });
  setcalculateLike((currCount)=>{
    return currCount+1;
  });

 }
 
  return (
    <>
      <p onClick={toggleLike}>
        {isLiked?(
       <i className="fa-solid fa-heart" style={likeStyle}></i>
        ):(<i className="fa-regular fa-heart"></i>)}
       </p>
       <h3>You clicked like button {calculateLike}times</h3>
    </>
  );
}
