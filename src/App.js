import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./login";
import SignUp from "./signup";
import ToDoList from "./ToDoList";
import RememberMe from "./remember_me";
import HooksList from "./HooksList";
import HooksTimer from "./hooksTimer";

function App() {
  return (
    <Router>
      {/* <div className="App"> */}
      <div>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/sign-in"}>
              React JS Demo
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/remember-me"}>
                    Remember Me
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-in"}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-up"}>
                    Sign up
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/todo-list"}>
                    Todo List
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/hooks-list"}>
                    Hooks List
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/hooks-timer"}>
                    Hooks Timer
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* <div className="auth-wrapper">
                <div className="auth-inner"> */}
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/sign-in" component={Login} />
          <Route path="/remember-me" component={RememberMe} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/todo-list" component={ToDoList} />
          <Route path="/hooks-list" component={HooksList} />
          <Route path="/hooks-timer" component={HooksTimer} />
        </Switch>
        {/* </div>
              </div> */}
      </div>
    </Router>

    // <div>
    //     <ToDoList/>
    // </div>
  );
}

export default App;
