import React, {useState} from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import Axios from "axios";
import Swal from 'sweetalert2';

function Approve() {
  const[spenderAddress_approve,setSpenderAddress_approve ] = useState("");
  const[amount_approve,setAmount_approve ] = useState("");
  const approve =() =>{
    
    Axios.post('http://localhost:5000/approve',{
      spender: spenderAddress_approve,
      amount: amount_approve,
    }).then((response) =>{
      
      Swal.fire(
        response.data.status.toString(),
        'The status for the approval:  ' + response.data.status.toString(),
        'success'
      )      
    });
  };
  return (
    <MDBContainer>
    <div style={{marginTop:70, borderBottom:"solid"}}>
    
    <MDBCol md="12">
      <div className="text-center">
        <p className="h1 text-center mb-4">Transfer</p>
        <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
          Spender Address: 
        </label>
        <input style={{width:500, marginLeft:300}}  type="text" 
        onChange = {(e) =>{
          setSpenderAddress_approve(e.target.value);
        }}
        
        
        placeholder="Spender Address" className="form-control" />
        <br />
        <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
          Amount: 
        </label>
        <input style={{width:500, marginLeft:300}}  type="text" 
        onChange = {(e) =>{
          setAmount_approve(e.target.value);
        }}
        
        
        placeholder="Amount" className="form-control" />
        <br />
      
        <div className="text-center mt-4">
          <button className="btn btn-success" style={{width:300}} type="submit" onClick={approve}>Submit</button>
        </div>
        <br/>
        
        </div>
    </MDBCol>
    </div>
    </MDBContainer>
  );
}

export default Approve;
