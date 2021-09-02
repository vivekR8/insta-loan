import React from "react";
import loginImg from "../../assets/images/login.svg";

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      userName:'',
      userId:''
      
    }
  }

  handleInputChange=(event)=>{
   
    this.setState({[event.target.name]:event.target.value})
 
  }
  handleClick=()=>{
    this.props.loginById(this.state.userId)
    console.log(this.props);
  }
  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input onChange={this.handleInputChange} value={this.state.userName}  type="text" name="userName" placeholder="username" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input onChange={this.handleInputChange} value={this.state.userId} type="password" name="userId" placeholder="password" />
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <button onClick={this.handleClick} type="button" className="btn">
            Login
          </button>
        </div>
      </div>
    );
  }
}
