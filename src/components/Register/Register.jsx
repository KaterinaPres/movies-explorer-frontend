import "./Register.css";
import React from "react";

import PageWithForm from "../PageWithForm/PageWithForm";
import FormBlock from "../FormBlock/FormBlock";
import InputError from "../InputError/InputError";
import SubmitButton from "../SubmitButton/SubmitButton";
import { useState } from "react";

export default function Register() {
  const [inputValues, setInputValues] = useState({
    name: "", email: "", password: ""
  });

  const handleInputValuesChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  console.log(inputValues);

  return (
    <PageWithForm
      name="register"
      title="Добро пожаловать!"
      captionText="Уже зарегистрированы?"
      linkText="Войти"
      linkPath="/signin"
    >
      <FormBlock onSubmit={handleFormSubmit}>
        <InputError
          name="name"
          type="text"
          label="Имя"
          autoFocus={true}
          required={true}
          value={inputValues.name}
          onChange={handleInputValuesChange}
        ></InputError>
        <InputError
          name="email"
          type="email"
          label="E-mail"
          required={true}
          value={inputValues.email}
          onChange={handleInputValuesChange}
        ></InputError>
        <InputError
          name="password"
          type="password"
          label="Пароль"
          required={true}
          value={inputValues.password}
          onChange={handleInputValuesChange}
        ></InputError>
        <SubmitButton label="Зарегистрироваться" />
      </FormBlock>
    </PageWithForm>
  );
}