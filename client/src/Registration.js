import './App.css'
import { useNavigate } from 'react-router-dom';
import { useState, React } from 'react';
import Axios from 'axios';

function Registration() {
  
    let navigate = useNavigate();

    const [idno, setIdno] = useState(0);
    const [rfidno, setRfidno] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const[age, setAge] = useState(0);
    const[gender, setGender] = useState("");
    const[dept, setDept] = useState("");
    const[year, setYear] = useState(0);
    
    const  [studentlist, setStudentlist] = useState([]);
    
    const addStudentDetails = () => {
      window.location.reload();
        Axios.post('http://65.49.44.136:5004/create', {
            idno:idno,
            rfidno:rfidno,
            firstname:firstname,
            lastname:lastname, 
            age:age,
            gender:gender,
            dept:dept,
            year:year
        }).then(() => {
            console.log('success');
            setStudentlist([
                ...studentlist, 
                {
                    idno : idno,
                    rfidno : rfidno,
                    firstname : firstname,
                    lastname : lastname,
                    age : age,
                    gender : gender,
                    dept : dept,
                    year : year
                },
            ]);
        });
    };

    return (
        <div className='App'>
          <h1>Student Registration</h1>
          <br/>
          <h2>Enter Student Details !!!</h2>
          <br/>
      <div className='information'>
            <label>Id Number : </label>
            <input type = "number"
            onChange={(event) => {
            setIdno(event.target.value);
          }}
          />
            <label>RFID Number : </label> 
            <input type = "text" 
            onChange={(event) => {
            setRfidno(event.target.value);
          }}
          />
            <label>First Name : </label> 
            <input type = "text" 
            onChange={(event) => {
            setFirstname(event.target.value);
          }}
          />
            <label>Last Name : </label> 
            <input type = "text" 
            onChange={(event) => {
            setLastname(event.target.value);
          }}
          />
            <label>Age : </label>
            <input type = "number" 
            onChange={(event) => {
            setAge(event.target.value);
          }}
          />
            <label>Gender : </label>
            <input type = "text" 
            onChange={(event) => {
            setGender(event.target.value);
          }}
          />
            <label>Department : </label>
            <input type = "text" 
            onChange={(event) => {
            setDept(event.target.value);
          }}
          />
            <label>Year : </label>
            <input type = "number" 
            onChange={(event) => {
            setYear(event.target.value);
          }}
          />
          <br/>
          <div className='fonal'>
            <div className='inf'>
          <button  onClick={addStudentDetails}>Submit Student Details</button>
          </div>
          <div className='inf'>
          <button onClick={() => {navigate('/')}}> Home Page </button> 
          </div>
          </div>
            </div>
            </div>
      
    );
}

export default Registration;
