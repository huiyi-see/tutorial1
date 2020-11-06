import React,{setState} from 'react';
import {useState} from 'react'; 
import ReactDOM from 'react-dom';
import "./index.css";

function Room(){
const [isLit, setLit] =useState(false);
const[isDark,setDark] =useState(true);
const light =  "Lit";
const dark = "Dark";
let [isTemp,setTemp] =useState(72); 
let [isTemp2,setTemp2] =useState(72); 
const increment = isTemp ? "isTemp++": "isTemp++";
const decrement = isTemp2 ? "isTemp2--": "isTemp2--";
//const brightness = isLit ? "lit": "dark";
	return (
	
		//to have on and off button 
		<div className ="main">
			<div className={`room ${isLit? "lit":"dark"} ${isDark? "dark":"lit"}`} class="light">
				the room is {light || dark }
				<br />
				<button onClick={() =>setLit(!isLit)}>
				On
				</button>
				<button onClick={() =>setDark(!isDark)}>
				Off
				</button>
			</div>
			


			<div className={`room ${isTemp? "isTemp++":"isTemp--"}`} class= "temperature">
				The room temperature is 72; with plus icon: {isTemp++},  and with minus icon: {isTemp2--}. 		
				<br />
				<button onClick={() =>setTemp( isTemp++)} class="plus">
				+ 
				</button>
				<button onClick={() =>setTemp2( isTemp2--)} class="minus">
				-
				</button>
			</div>
		</div>
		);
	

}

ReactDOM.render(<Room/>,document.querySelector('#root'));
