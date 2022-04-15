import React, { useState } from "react";
import Input from "../../components/Input/Input";
import SubmitBtn from "../../components/SubmitBtn/SubmitBtn";
import "./RegisterPage.scss";
import { registerUser } from "../../redux/auth/auth-operations";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getAuthError, getAuthLoading } from "../../redux/auth/auth-selectors";
import LoaderSmall from "../../components/LoaderSmall/LoaderSmall";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const error = useSelector(getAuthError);
  const loading = useSelector(getAuthLoading);

  const dispatch = useDispatch();

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(registerUser({ email, password, name }));
  };

  return (
    <section className="register-page">
      <h2>Register</h2>
      <form className="form" onSubmit={(e) => submitForm(e)}>
        <Input
          headline="Name"
          required
          inputType="text"
          inputName="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          headline="Email"
          required
          inputType="email"
          inputName="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          headline="Password"
          required
          inputType="password"
          inputName="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {loading ? <LoaderSmall /> : <SubmitBtn>Submit</SubmitBtn>}
      </form>
      {error && <h2 className="error">{error}</h2>}
    </section>
  );
}

export default RegisterPage;
