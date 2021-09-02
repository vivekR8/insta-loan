import React from "react";

export class Register extends React.Component {
  constructor(props) {
    super(props);
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
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" placeholder="username" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact">Contact</label>
                    <input type="text" name="contact" placeholder="contact" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" placeholder="email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input type="text" name="address" placeholder="address" />
                  </div>
                </div>
                <div>
                  <div>
                      <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input type="text" name="city" placeholder="city" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="accNo">Account No.</label>
                        <input type="text" name="accNo" placeholder="accNo" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="text" name="password" placeholder="password" />
                      </div>
                  </div>
                </div>
            
          </div>

        </div>
        <div className="footer">
          <button type="button" className="btn">
            Register
          </button>
        </div>
      </div>
    );
  }
}
