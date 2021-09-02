import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import CurrencyInput from 'react-currency-input-field';

const Example = (props) => {
  return (
    <Form style={{marginLeft: "30px", marginRight: "30px",marginTop: "30px"}}>
      <FormGroup style={{margin: "10px", display: "flex", justifyContent: "space-between", width: "38%"}}>
        <Label for="userid">User ID : </Label>
        <Input type="text" name="text" id="userid" placeholder="Enter User Id" />
      </FormGroup>

      <FormGroup style={{margin: "10px", display: "flex", justifyContent: "space-between", width: "38%"}}>
        <Label for="username">User Name : </Label>
        <Input type="text" name="text" id="username" placeholder="Enter User Name" />
      </FormGroup>

      <FormGroup tag="fieldset" style={{width:"600px"}}>
        <legend>Type of Loan : </legend>
        <div style={{margin: "10px", display: "flex", justifyContent: "space-between", width: "500px"}}>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="goldloanradio" />{' '}
            Gold Loan
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="homeloanradio" />{' '}
            Home Loan
          </Label>
        </FormGroup>
        </div>
        <div style={{margin: "10px", display: "flex", justifyContent: "space-between", width: "527px"}}>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="vehicleloanradio" />{' '}
            Vehicle Loan
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="educationloanradio" />{' '}
            Education Loan
          </Label>
        </FormGroup>
        </div>
      </FormGroup>
      

      <FormGroup style={{margin: "10px"}}>
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
      <Button style={{ backgroundColor: "#2F4050",borderRadius: "5px", fontSize: "initial", 
                        boxShadow: "2px 2px 2px grey", padding: "4px 25px", color:"white",fontFamily: "sans-serif"}}>SUBMIT</Button>{' '}
      </div>
    </Form>
  );
}

export default Example;