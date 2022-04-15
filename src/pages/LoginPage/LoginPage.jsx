import React, { useState } from "react";
import Input from "../../components/Input/Input";
import SubmitBtn from "../../components/SubmitBtn/SubmitBtn";
import "./LoginPage.scss";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { logInUser } from "../../redux/auth/auth-operations";
import { getAuthError, getAuthLoading } from "../../redux/auth/auth-selectors";
import LoaderSmall from "../../components/LoaderSmall/LoaderSmall";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const error = useSelector(getAuthError);
  const loading = useSelector(getAuthLoading);

  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(logInUser({ email, password }));
  };
  return (
    <section className="login-page">
      <h2>Login</h2>
      <form className="form" onSubmit={(e) => onSubmitHandler(e)}>
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
