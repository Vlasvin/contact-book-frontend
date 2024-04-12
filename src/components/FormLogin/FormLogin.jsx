import {
  Button,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  StyledLink,
  LinksContainer,
} from "components/FormRegistration/styled";

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
        </FormGroup>
        <FormGroup>
          <Input
            name="password"
            type="password"
            className="form-control"
            placeholder="Enter your password"
          />
        </FormGroup>
        <Button type="submit">Login</Button>
      </Form>
    </Container>
  );
};

export default FormLogin;
