import React, { useState } from "react";
import Input from "../../components/Input/Input";
import SubmitBtn from "../../components/SubmitBtn/SubmitBtn";
import "./RegisterPage.scss";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  return (
    <section className="register-page">
      <h2>Register</h2>
      <form
        className="form"
        // onSubmit={this.onSubmitHandler}
      >
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
        <SubmitBtn>Submit</SubmitBtn>
      </form>
    </section>
  );
}
