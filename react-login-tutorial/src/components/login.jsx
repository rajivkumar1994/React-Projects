import React, { Component } from "react";
import { browserHistory } from "react-router";
import "./login.css";

// import Dashboard from "./dashboard";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userid: null,
      email: null,
      password: null,
      formErrors: {
        userid: "",
        email: "",
        password: ""
      }
    };
  }

  handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    let formErrors = this.state.formErrors;
    switch (name) {
      case "userid":
        formErrors.userid =
          value.length < 6 && value.length > 0 ? "Enter Valid User ID" : "";
        break;
      case "email":
        formErrors.email =
          emailRegex.test(value) && value.length > 0
            ? ""
            : "Enter Valid Email ID";
        break;
      case "password":
        formErrors.password =
          value.length < 6 && value.length > 0
            ? "Minimum 6 characters required"
            : "";
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors,
        [name]: value
      },
      () => {
        console.log(this.state);
      }
    );
  };

  handleSubmit = event => {
    const { userid, email, password } = this.state;
    // event.preventDefault();
    if (formValid(this.state)) {
      console.log(` ---- SUBMITTING FORM ----
user id : ${userid}
email : ${email}
password : ${password}
`);
      browserHistory.push("/dashboard");
    } else {
      console.error("---- INVALID LOGIN ---- ");
      // alert("LOGIN FAILED");
    }
  };

  handleClick = () => {
    browserHistory.push("/register");
  };

  render() {
    const { formErrors } = this.state;
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h2> LOGIN HERE !!! </h2>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="userid">
              <label htmlFor="userid"> User ID </label>
              <input
                type="text"
                name="userid"
                placeholder="User ID"
                className={formErrors.userid.length > 0 ? "error" : ""}
                onChange={this.handleChange}
                noValidate
              />
              {formErrors.userid.length > 6 && (
                <span className="errorMessage"> {formErrors.userid} </span>
              )}
            </div>
            <div className="email">
              <label htmlFor="email"> Email ID </label>
              <input
                type="email"
                name="email"
                placeholder="Email ID"
                className={formErrors.email.length > 0 ? "error" : null}
                onChange={this.handleChange}
                noValidate
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>
            <div className="password">
              <label htmlFor="password"> Password </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className={formErrors.password.length > 0 ? "error" : ""}
                onChange={this.handleChange}
                noValidate
              />
              {formErrors.password.length > 6 && (
                <span className="errorMessage"> {formErrors.password} </span>
              )}
            </div>
            <div className="createAccount">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
              <small>
                <p className="normal">
                  New User? Please Create an Account !!!
                  <button
                    type="submit"
                    onClick={this.handleClick}
                    className="btn btn-secondary"
                  >
                    Signup
                  </button>
                </p>
              </small>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;
  // Validating while submitting form
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });
  // validate when all form fields are empty
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });
  return valid;
};

const emailRegex = RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

export default Login;
