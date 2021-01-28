import React, { Component, state } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class Login extends Component {
  documentData;
  constructor(props) {
    super(props);

    this.state = { emailValue: "", passwordValue: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    //debugger;

    var storage = JSON.parse(localStorage.getItem("document"));

    if (storage != null) {
      if (
        storage["emailValue"] == this.state.emailValue &&
        storage["passwordValue"] == this.state.passwordValue
      ) {
        alert("You are logged in successfully");
        this.props.history.push("/todo-list");
      } else {
        alert("Username or Password does not match");
      }
    }

    if (storage == null)
      localStorage.setItem("document", JSON.stringify(this.state));

    // alert(
    //   "Email submitted: " +
    //     this.state.emailValue +
    //     " Password submitted: " +
    //     this.state.passwordValue
    // );
    event.preventDefault();
  }

  componentDidMount() {
    //localStorage.removeItem("emailValue");
    //localStorage.clear();
    this.documentData = JSON.parse(localStorage.getItem("document"));

    if (localStorage.getItem("document")) {
      this.setState({
        emailValue: this.documentData.emailValue,
        passwordValue: this.documentData.passwordValue,
      });
    } else {
      this.setState({
        emailValue: "",
        passwordValue: "",
      });
    }
  }

  render() {
    return (
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Router>
            {/* <form onSubmit={this.handleFormSubmit}> */}
            <form>
              <h3>Sign In</h3>

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

              <div className="form-group">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                    name="lsRememberMe"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customCheck1"
                  >
                    Remember me
                  </label>
                </div>
              </div>

              {/* <button type="submit" className="btn btn-primary btn-block">Submit</button> */}
              <Link to={"/todo-list"}>
                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  onClick={this.handleSubmit}
                >
                  Submit
                </button>
              </Link>

              <p className="forgot-password text-right">
                Forgot <a href="#">password?</a>
              </p>
            </form>

            {/* <Switch>
                        <Route path="/todo-list" component={ToDoList} />
                    </Switch> */}
          </Router>
        </div>
      </div>
    );
  }
}
