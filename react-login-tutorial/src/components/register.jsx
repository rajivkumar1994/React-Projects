import React, { Component } from "react";
import { browserHistory } from "react-router";
// import axios from "axios";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      formErrors: {
        firstName: "",
        lastName: "",
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
      case "firstName":
        formErrors.firstName =
          value.length < 3 && value.length > 0
            ? "Minimum 3 Characters Required"
            : "";
        break;
      case "lastName":
        formErrors.lastName =
          value.length < 3 && value.length > 0
            ? "Minimum 3 Characters Required"
            : "";
        break;
      case "email":
        formErrors.email =
          emailRegEx.test(value) && value.length > 0
            ? ""
            : "Enter Valid Mail ID";
        break;
      case "password":
        formErrors.password =
          value.length < 6 && value.length > 0
            ? "Minimum 6 Characters Required"
            : "";
        break;
      default:
        break;
    }
    this.setState({ formErrors, [name]: value }, () => {
      console.log(this.state);
    });
  };

  handleSubmit = event => {
    // event.preventDefault();
    if (formValid(this.state)) {
      console.log(` ---- SUBMITTING FORM ----
firstName : ${this.state.firstName}
lastName : ${this.state.lastName}
email : ${this.state.email}
password : ${this.state.password}
`);
      // axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
      //   .then(res => {
      //     console.log("response : ", res)
      //   }).catch(err => {
      //     console.log(err)
      //   })
      alert("REGISTRATION COMPLETED SUCCESSFULLY. PLEASE LOGIN");
      browserHistory.push("/login");
    } else {
      console.error("FORM INVALID");
      // alert("REGISTRATION FAILED");
    }
  };

  handleClick = () => {
    alert("Redirecting to Login Page");
    browserHistory.push("/login");
  };

  render() {
    const { formErrors } = this.state;
    return (
      // <div className="App">
      <div className="wrapper">
        <div className="form wrapper">
          <h2> CREATE ACCOUNT HERE !!! </h2>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="firstName">
              <label htmlFor="firstName"> First Name </label>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className={formErrors.firstName.length > 0 ? "error" : null}
                onChange={this.handleChange}
                noValidate
              />
              {formErrors.firstName.length > 0 && (
                <span className="errorMessage">{formErrors.firstName}</span>
              )}
            </div>
            <div className="lastName">
              <label htmlFor="lastName"> Last Name </label>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className={formErrors.lastName.length > 0 ? "error" : null}
                onChange={this.handleChange}
                noValidate
              />
              {formErrors.lastName.length > 0 && (
                <span className="errorMessage">{formErrors.lastName}</span>
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
                className={formErrors.password.length > 0 ? "error" : null}
                onChange={this.handleChange}
                noValidate
              />
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
            </div>
            <div className="createAccount">
              <button type="submit" className="btn btn-primary">
                Create Account
              </button>
              <small>
                <p className="normal">
                  Already Having an Account ? Please Login
                  <button
                    type="submit"
                    onClick={this.handleClick}
                    className="btn btn-warning"
                  >
                    Login
                  </button>
                </p>
              </small>
            </div>
          </form>
        </div>
      </div>
      // </div>
    );
  }
}

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // Validating while Submitting the form (if any form errors)
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // Submitting the form without entering any details
  // rest -> firstName, lastName, email, password
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });
  return valid;
};

const emailRegEx = RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

export default Register;
