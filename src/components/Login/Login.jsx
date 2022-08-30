import "./Login.css";
import React, { useState } from "react";
import PageWithForm from "../PageWithForm/PageWithForm";
import FormBlock from "../FormBlock/FormBlock";
import InputError from "../InputError/InputError";
import SubmitButton from "../SubmitButton/SubmitButton";

export default function Login() {
  const [inputValues, setInputValues] = useState({ email: "", password: "" });
  const handleInputValuesChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const checkValidity = (e) => {
    console.log(e.target.validity);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <PageWithForm
      title="Рады видеть!"
      name="login"
      captionText="Ещё не зарегистрированы?"
      linkText="Регистрация"
      linkPath="/signup"
    >
      <FormBlock onSubmit={handleFormSubmit}>
        <InputError
          label="E-mail"
          type="email"
          name="email"
          autoFocus={true}
          required={true}
          value={inputValues.email}
          onChange={handleInputValuesChange}
          onBlur={checkValidity}
        ></InputError>
        <InputError
          label="Пароль"
          type="password"
          name="password"
          required={true}
          value={inputValues.password}
          onChange={handleInputValuesChange}
        ></InputError>
        <SubmitButton label="Войти" />
      </FormBlock>
    </PageWithForm>
  );
}