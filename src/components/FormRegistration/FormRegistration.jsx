import { useState } from "react";

import validationSchema from "./validationSchema";
import {
  Button,
  Container,
  Form,
  FormGroup,
  Input,
  StyledLink,
  LinksContainer,
} from "./styled";

const FormRegistration = ({ register }) => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await validationSchema.validate(formData, { abortEarly: false });
      await register(formData);
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
          </StyledLink>
          <StyledLink to="/login">Login</StyledLink>
        </LinksContainer>
        <FormGroup>
          <Input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter your email address"
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Input
            type="text"
            name="name"
            className="form-control"
            placeholder="Enter your name"
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Input
            name="password"
            type="password"
            className="form-control"
            placeholder="Enter your password"
            onChange={handleChange}
          />
        </FormGroup>

        <Button type="submit" className="btn btn-primary">
          Register
        </Button>
      </Form>
    </Container>
  );
};

export default FormRegistration;
