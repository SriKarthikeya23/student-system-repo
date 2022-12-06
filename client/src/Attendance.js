import './App.css'
import { useState, React } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Attendance() {

    let navigate = useNavigate();

    const [rfid, setRfid] = useState("");

    const addRecord = () => {
        Axios.post("http://65.49.44.136:5004/enter/attendance", {
          rfid: rfid
        }).then(() => {
          console.log("Success");
        })
      }

    return (
        <div className='App'>
          <h1>Enter Attendance</h1>
          <br/>
          <div className='rfid'>
          <label>RFID Number : </label> 
          <input type = "text" 
          onChange={(event) => {
          setRfid(event.target.value);
        }}
        />
        </div>
        <br/>
        <button  onClick={ addRecord}>Submit</button>
        <br/><br/>
        <button  onClick={() => {navigate('/')}}> Home Page </button>
        </div>
    );
}

export default Attendance;
