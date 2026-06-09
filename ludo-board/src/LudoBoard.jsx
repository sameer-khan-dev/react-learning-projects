import { useState } from "react";

export default function LudoBoard(){
    let [moves,setMoves]=useState({blue:0,yellow:0,green:0,red:0});
    let updateBlue=()=>{
        setMoves((prevMov)=>{
            return ({...prevMov,blue:prevMov.blue+1});
        })
    }
     let updateYellow=()=>{
        setMoves((prevMov)=>{
            return ({...prevMov,yellow:prevMov.yellow+1});
        })
    }
     let updateGreen=()=>{
        setMoves((prevMov)=>{
            return ({...prevMov,green:prevMov.green+1});
        })
    }
     let updateRed=()=>{
        setMoves((prevMov)=>{
            return ({...prevMov,red:prevMov.red+1});
        })
    }
    return(
        <>
        <h2>Game begin!</h2>
        <div id="board">
            <p>Blue moves: {moves.blue}</p>
            <button onClick={updateBlue} style={{backgroundColor: "blue",color: "white"}}>1+</button>
            <p>Yellow moves: {moves.yellow}</p>
            <button onClick={updateYellow} style={{backgroundColor: "yellow",color: "black"}}>1+</button>
            <p>Green moves: {moves.green}</p>
            <button onClick={updateGreen} style={{backgroundColor: "green"}}>1+</button>
            <p>Red moves: {moves.red}</p>
            <button onClick={updateRed} style={{backgroundColor:"red"}}>1+</button>
        </div>
        </>
    );
}