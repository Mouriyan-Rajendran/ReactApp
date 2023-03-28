import React, { useState } from "react";

function LoginForm() {
  const [loginFormInput, setLoginForm] = useState({
    username: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(loginFormInput);
  }

  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setLoginForm((prev) => {
      return { ...prev, [name]: value };
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="userName">User Name</label>
        <input
          autoFocus
          id="userName"
          name="username"
          type="text"
          className="form-control"
          onChange={handleChange}
          value={loginFormInput.username}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="text"
          className="form-control"
          onChange={handleChange}
          value={loginFormInput.password}
        />
      </div>
      <button className="btn btn-primary">Login</button>
    </form>
  );
}

export default LoginForm;
