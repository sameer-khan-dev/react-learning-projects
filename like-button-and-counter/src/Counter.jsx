import { useState, useEffect } from "react";
export default function Counter(){
    let [count,setCount]=useState(0);
    function inCount(){
        setCount(count+1);
    }
    let decCount=()=>{
        setCount(count-1);
    }
    function resCount(){
        setCount((reset)=>{
            return 0;
        });

    }
    useEffect(function printSomething(){ // just for practice
        console.log("this is the side effect.");
    })

    return(
        <div>
            <h2>Counter={count}</h2>
            <button onClick={inCount}>Increase</button>
            <button onClick={decCount}>Decrease</button>
            <button onClick={resCount}>Reset</button>
        </div>
    )
}