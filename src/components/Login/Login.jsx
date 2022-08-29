import "./Login.css";
import React, { useEffect, useState } from "react";
import PageWithForm from "../PageWithForm/PageWithForm";
import FormBlock from "../FormBlock/FormBlock";
import InputError from "../InputError/InputError";
import SubmitButton from "../SubmitButton/SubmitButton";
import { useFormWithValidation } from "../../utils/useFormWithValidation";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

export default function Login({ handleLogin, errorMessage, setErrorMessage }) {
  const controls = useFormWithValidation({
    email: "",
    password: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleLogin(controls.values.email, controls.values.password);
  };

  useEffect(() => {
    errorMessage && setErrorMessage("");
  }, [controls.values]);

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
          value={controls.values.email}
          onChange={controls.handleChange}
          errorMessage={controls.errors.email}
        ></InputError>
        <InputError
          label="Пароль"
          type="password"
          name="password"
          required={true}
          value={controls.values.password}
          onChange={controls.handleChange}
          errorMessage={controls.errors.password}
        ></InputError>
        <ErrorMessage errorMessage={errorMessage} />
        <SubmitButton label="Войти" isDisabled={!controls.isValid}/>
      </FormBlock>
    </PageWithForm>
  );
}