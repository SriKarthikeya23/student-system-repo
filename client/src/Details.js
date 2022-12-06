import './App.css'
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import { useState, React } from 'react';

function Studentdetails() {

    let navigate = useNavigate()

    const [studentList, setStudentList] = useState([]);
    const [id, setId] = useState(0);

    const getStudentDetails = () => {
        Axios.get('http://65.49.44.136:3003/get/details/all').then((response) => {
            setStudentList(response.data); 
            console.log(response.data);
        })
    }

    const getStudent = (id) => {
        Axios.get(`http://65.49.44.136:3003/get/details/${id}`).then((response) => {
            setStudentList(response.data);
        })
    }

    function clear() {
        document.getElementById("input").value="";
    }

    return (
        <div className='details'>
            <h1>Student Details</h1>
            <div className='labe'>
            <button class = "buttons" onClick={getStudentDetails}>Get All Student Details</button>
            <br></br>
            <br/>
            <br/>
            <label> Id Num : </label>
            <input id = "input" type = 'number' placeholder='Enter the Id Number' 
            onChange={(event) => {
                setId(event.target.value);
            }}></input>
           <br/>
           <br/>
            <button  onClick={() => {getStudent(id); clear()}}> Submit </button>
            <br/>
            <br/>
            <br/>
            {
            studentList.map((val, key) => {
                return (
                <div className='list'>
                    <p key = {val.idno}>ID Number : {val.idno}</p>
                    <p key = {val.firstname}>First Name : {val.firstname}</p>
                    <p key = {val.lastname}>Last Name : {val.lastname}</p>
                    <p key = {val.age}>Age : {val.age}</p>
                    <p key = {val.gender}>Gender : {val.gender}</p>
                    <p key = {val.dept}>Department : {val.dept}</p>
                    <p key = {val.year}>Year : {val.year}</p>
                </div>
                    );
                })
            }
              <br/>
            <button onClick={() => {navigate('/')}}> Home Page </button>
            </div>
        </div>
    );
}

export default Studentdetails;
