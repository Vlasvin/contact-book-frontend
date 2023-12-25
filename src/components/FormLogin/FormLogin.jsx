import {
  Button,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  StyledLink,
} from "components/FormRegistration/FormRegistration.styled";

const FormLogin = ({ login }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    };
    login(user);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <StyledLink type="button" to="/">
          Go home
        </StyledLink>
        <FormGroup>
          <Label>Email address</Label>
          <Input type="email" name="email" aria-describedby="emailHelp" />
          <div>We'll never share your email with anyone else.</div>
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input name="password" type="password" />
        </FormGroup>
        <Button type="submit">Login</Button>
        <StyledLink to="/register">Registration</StyledLink>
      </Form>
    </Container>
  );
};

export default FormLogin;
