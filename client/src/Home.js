import './App.css'
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {

    let navigate = useNavigate();

    return (
        <div className='Home'>
            <h1>Welcome to the Student Portal</h1>
            <button onClick={() => {navigate('/registration')}}> Registration Page </button>
    
            <button onClick={() => {navigate('/attendance')}}> Rfid Attendance Page </button>
    
            <button  onClick={() => {navigate('/details')}}> Student Details Page </button>
        </div>
    );
}

export default Home;