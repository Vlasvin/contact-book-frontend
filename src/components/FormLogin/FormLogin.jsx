import { useState } from "react";

import loginValidationSchema from "./loginSchema";

import {
  Button,
  Container,
  Form,
  FormGroup,
  Input,
  StyledLink,
  LinksContainer,
  ErrorText,
} from "components/FormRegistration/styled";

const FormLogin = ({ login }) => {
  const [errors, setErrors] = useState({});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsFormSubmitted(true);

    try {
      const formData = {
        email: e.target.elements.email.value,
        password: e.target.elements.password.value,
      };

      await loginValidationSchema.validate(formData, { abortEarly: false });
      await login(formData);
    } catch (error) {
      const validationErrors = {};
      error.inner.forEach((err) => {
        validationErrors[err.path] = err.message;
      });
      setErrors(validationErrors);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <LinksContainer>
          <StyledLink type="button" to="/">
            Go Home
          </StyledLink>{" "}
          <StyledLink to="/register">Registration</StyledLink>
        </LinksContainer>

        <FormGroup>
          <Input
            type="email"
            name="email"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter your email address"
          />
          {isFormSubmitted && errors.email && (
            <ErrorText>{errors.email}</ErrorText>
          )}
        </FormGroup>

        <FormGroup>
          <Input
            name="password"
            type="password"
            className="form-control"
            placeholder="Enter your password"
          />
          {isFormSubmitted && errors.password && (
            <ErrorText>{errors.password}</ErrorText>
          )}
        </FormGroup>
        <Button type="submit">Log In</Button>
      </Form>
    </Container>
  );
};

export default FormLogin;
