import axios from "axios";
import React from "react";
import {API} from '../../constants';
import {browserHistory} from 'react-router'
export class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      userName:'',
      contact:'',
      email:'',
      address:'',
      city:'',
      accountNo:'',
      panNo:'',
      creditScore:5,
    }
  }
  createUser=()=>{
    const payload={...this.state}
    console.log(payload);
    axios.post(`${API}/user`,payload).then((res)=>{
      //res.status==201?
    }).catch((err)=>{
      console.log(err)
    })
  }
  handleChange=(event)=>{
    this.setState({[event.target.name]:event.target.value})
    console.log(event.target.name)
    console.log(event.target.value)

  }
  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content ">
          {/* <div className="image">
            <img src={loginImg} />
          </div> */}
              <div className="form">
              <div className="left-form">
                  <div className="form-group">
                    <label htmlFor="userName">Username</label>
                    <input onChange={this.handleChange} type="text" name="userName" placeholder="username" required/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact">Contact</label>
                    <input onChange={this.handleChange} type="text" name="contact" placeholder="contact" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input onChange={this.handleChange} type="text" name="email" placeholder="email" required/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input onChange={this.handleChange} type="text" name="address" placeholder="address" />
                  </div>
                </div>
                <div>
                  <div>
                      <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input onChange={this.handleChange} type="text" name="city" placeholder="city" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="panNo">Pan No.</label>
                        <input onChange={this.handleChange} type="text" name="panNo" placeholder="panNo" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="accountNo">Account No.</label>
                        <input onChange={this.handleChange} type="text" name="accountNo" placeholder="accNo" required/>
                      </div>
                      <div className="form-group">
                        <label htmlFor="userId">Password</label>
                        <input onChange={this.handleChange} type="text" name="userId" placeholder="password" required/>
                      </div>
                  </div>
                </div>
            
          </div>

        </div>
        <div className="footer">
          <button onClick={this.createUser} type="button" className="btn">
            Register
          </button>
        </div>
      </div>
    );
  }
}
