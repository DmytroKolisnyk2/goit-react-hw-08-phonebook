import React, { useState } from "react";
import Input from "../../components/Input/Input";
import SubmitBtn from "../../components/SubmitBtn/SubmitBtn";
import "./LoginPage.scss";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <section className="login-page">
      <h2>Login</h2>
      <form
        className="form"
        // onSubmit={this.onSubmitHandler}
      >
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
        <SubmitBtn>Submit</SubmitBtn>
      </form>
    </section>
  );
}
