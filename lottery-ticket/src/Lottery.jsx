import { useState } from "react"
import "./Lottery.css";
import {genRandomNum, sum} from "./helper";
import Ticket from "./Ticket.jsx";

export default function Lottery({n,winningSum}){
    let [ticket,setTicket]=useState(genRandomNum(n));
    let isWinning=sum(ticket)===winningSum;
    let genTicket=()=>{
        setTicket(genRandomNum(n));
    }
    return (
    <div>
        <h1>Lottery Game!</h1>
        <Ticket ticket={ticket}/>
        <h2>{isWinning && "Congratulations, you won!"}</h2>
        <button onClick={genTicket}>Buy New Ticket</button>
    </div>)
}