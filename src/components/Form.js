import React,{useState} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import CurrencyInput from 'react-currency-input-field';

const Example = (props) => {
  const [radiobox,setRadiobox]=useState("");
  const [checkbox,setCheckbox]=useState("");

  const handleSubmit=(event)=>{
    event.preventDefault();
    console.log(event.target.userid.value);
  }

  const handleInputChange=(event)=>{

    setRadiobox(event.target.value);
    
  }
  //console.log(radiobox);

  return (
    <Form onSubmit={handleSubmit} style={{marginLeft: "30px", marginRight: "30px",marginTop: "30px"}}>
      <FormGroup style={{margin: "10px", display: "flex", justifyContent: "space-between", width: "50%"}}>
        <Label for="userid">User ID : </Label>
        <Input type="text" name="userid" id="userid" placeholder="Enter User Id" />
      </FormGroup>

      <FormGroup style={{margin: "10px", display: "flex", justifyContent: "space-between", width: "50%"}}>
        <Label for="username">User Name : </Label>
        <Input type="text" name="username" id="username" placeholder="Enter User Name" />
      </FormGroup>

      <FormGroup tag="fieldset" style={{width:"600px"}}>
        <legend>Type of Loan : </legend>
        <div style={{margin: "10px", display: "flex", justifyContent: "space-between", width: "500px"}}>
        <FormGroup check>
          <Label check>
            <Input type="radio" onChange={handleInputChange} name="radio1" id="goldradio" value="GoldLoan"/>{' '}
            Gold Loan
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" onChange={handleInputChange} name="radio1" id="homeradio" value="HomeLoan"/>{' '}
           Home Loan
          </Label>
        </FormGroup>
        </div>
        <div style={{margin: "10px", display: "flex", justifyContent: "space-between", width: "527px"}}>
        <FormGroup check>
          <Label check>
            <Input type="radio" onChange={handleInputChange} name="radio1" id="vehicleradio" value="VehicleLoan"/>{' '}
            Vehicle Loan
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" onChange={handleInputChange} name="radio1" id="educationradio" value="EducationLoan"/>{' '}
            Education Loan
          </Label>
        </FormGroup>
        </div>
      </FormGroup>


      { radiobox==="GoldLoan" &&
        <FormGroup style={{margin: "10px", display: "flex", justifyContent: "space-between", width: "50%"}}>
        <Label for="goldamount">Gold Amount : </Label>
        <Input type="number" name="goldamount" id="goldamount" placeholder="Enter gold amount in grams" />
      </FormGroup>
      }

      { radiobox==="HomeLoan" &&
      <div>
        <FormGroup style={{margin: "10px", display: "flex", justifyContent: "space-between", width: "50%"}}>
        <Label for="propertytype">Property Type : </Label>
        <Input type="text" name="propertytype" id="propertytype" placeholder="Enter property type" />
      </FormGroup>
     <FormGroup style={{margin: "10px", display: "flex", justifyContent: "space-between", width: "50%"}}>
      <Label for="area">Area : </Label>
      <Input type="number" name="area" id="area" placeholder="Enter area in squarefeet" />
    </FormGroup>
    <FormGroup style={{margin: "10px", display: "flex", justifyContent: "space-between", width: "50%"}}>
    <Label for="address">Address : </Label>
    <Input type="text" name="address" id="address" placeholder="Enter property address" />
  </FormGroup>
      </div>
      }

      { radiobox==="VehicleLoan" &&
      <div>
        <FormGroup style={{margin: "10px", display: "flex", justifyContent: "space-between", width: "50%"}}>
        <Label for="vehicletype">Vehicle Type : </Label>
        <Input type="text" name="vehicletype" id="vehicletype" placeholder="Enter type of vehicle" />
      </FormGroup>
       <FormGroup style={{margin: "10px", display: "flex", justifyContent: "space-between", width: "50%"}}>
       <Label for="ownerdetails">Owner Details : </Label>
       <Input type="text" name="ownerdetails" id="ownerdetails" placeholder="Enter details of vehicle owner" />
     </FormGroup>
      </div>
      }

      { radiobox==="EducationLoan" &&
      <div>
        <FormGroup style={{margin: "10px", display: "flex", justifyContent: "space-between", width: "50%"}}>
        <Label for="institute">Institute </Label>
        <Input type="text" name="institute" id="institute" placeholder="Enter name of institute" />
      </FormGroup>
      <FormGroup style={{margin: "10px", display: "flex", justifyContent: "space-between", width: "50%"}}>
      <Label for="guaranter">Guaranter : </Label>
      <Input type="text" name="guaranter" id="guaranter" placeholder="Enter guatanter name" />
    </FormGroup>
    <FormGroup style={{margin: "10px", display: "flex", justifyContent: "space-between", width: "50%"}}>
    <Label for="course">Course : </Label>
    <Input type="text" name="course" id="course" placeholder="Enter course name" />
  </FormGroup>
  <FormGroup style={{margin: "10px", display: "flex", justifyContent: "space-between", width: "50%"}}>
  <Label for="courseduration">Course Duration : </Label>
  <Input type="number" name="courseduration" id="courseduration" placeholder="Enter course tenure" />
</FormGroup>
</div>
      }
      

      <FormGroup style={{margin: "10px", display: "flex", justifyContent: "space-between", width: "50%"}}>
        <Label for="loanamount">Loan Amount : </Label>
        <CurrencyInput
            id="loanamount"
            name="input-name"
            placeholder="Enter loan amount in INR"
            decimalsLimit={2}
            prefix="₹"
            onValueChange={(value, name) => console.log(value, name)}
        />
      </FormGroup>

      <FormGroup style={{margin: "10px"}}>
        <Label for="loanduration">Loan Duration in years : </Label>
        <Input type="select" name="select" id="loanduration" placeholder="Select Tenure in years">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
          <option>11</option>
          <option>12</option>
          <option>13</option>
          <option>14</option>
          <option>15</option>
          <option>16</option>
          <option>17</option>
          <option>18</option>
          <option>19</option>
          <option>20</option>
        </Input>
      </FormGroup>
    
      <FormGroup style={{margin: "10px"}}>
        <Label for="exampleFile">Add supporting documents  :    </Label>
        <Input type="file" name="file" id="exampleFile"  />
        <FormText color="muted" >
        <br/>
       Add ownership documents in pdf format (property papers, vehicle papers, gold papers, educational Course papers)
        </FormText>
      </FormGroup>

      <FormGroup style={{margin: "10px"}} check>
        <Label check>
          <Input type="checkbox" />{' '}
          I agree that all the above mentioned details are true to my knowledge.
        </Label>
      </FormGroup>
      
      <div style={{margin: "10px", display: "flex", justifyContent: "center", width: "100%"}}>
      <Button  style={{ backgroundColor: "#2F4050",borderRadius: "5px", fontSize: "initial", 
                        boxShadow: "2px 2px 2px grey", padding: "4px 25px", color:"white",fontFamily: "sans-serif"}}>SUBMIT</Button>{' '}
      </div>
    </Form>
  );
}

export default Example;