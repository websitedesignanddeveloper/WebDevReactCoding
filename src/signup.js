import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fNameValue: "",
      lNameValue: "",
      emailValue: "",
      passwordValue: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    debugger;
    localStorage.setItem("document", JSON.stringify(this.state));
    alert("You are registered successfully");
    this.props.history.push("/sign-in");
    // alert(
    //   "First Name submitted: " +
    //     this.state.fNameValue +
    //     " Last Name submitted: " +
    //     this.state.lNameValue +
    //     " Email submitted: " +
    //     this.state.emailValue +
    //     " Password submitted: " +
    //     this.state.passwordValue
    // );
    event.preventDefault();
  }

  render() {
    return (
      <Router>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <form>
              <h3>Sign Up</h3>
              <div className="form-group">
                <label>First name</label>
                <input
                  type="text"
                  name="fNameValue"
                  className="form-control"
                  placeholder="First name"
                  onChange={this.handleChange}
                />
              </div>

              <div className="form-group">
                <label>Last name</label>
                <input
                  type="text"
                  name="lNameValue"
                  className="form-control"
                  placeholder="Last name"
                  onChange={this.handleChange}
                />
              </div>

              <div className="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  name="emailValue"
                  className="form-control"
                  placeholder="Enter email"
                  onChange={this.handleChange}
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="passwordValue"
                  className="form-control"
                  placeholder="Enter password"
                  onChange={this.handleChange}
                />
              </div>

              <button
                onClick={this.handleSubmit}
                type="submit"
                className="btn btn-primary btn-block"
              >
                Sign Up
              </button>

              <p className="forgot-password text-right">
                Already registered <a href="#">sign in?</a>
              </p>
            </form>
          </div>
        </div>
      </Router>
    );
  }
}
