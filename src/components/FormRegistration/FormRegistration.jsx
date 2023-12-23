import {
  Button,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  StyledLink,
} from "./FormRegistration.styled";

const FormRegistration = ({ register }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    };
    register(newUser);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <StyledLink type="button" to="/">
          go home
        </StyledLink>
        <FormGroup>
          <Label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </Label>
          <Input
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="e mailHelp"
          />
          <div>We'll never share your email with anyone else.</div>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="exampleInputName" className="form-label">
            Name
          </Label>
          <Input
            type="text"
            name="name"
            className="form-control"
            id="exampleInputName"
          />
        </FormGroup>
        <FormGroup className="mb-3">
          <Label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </Label>
          <Input
            name="password"
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </FormGroup>
        <Button type="submit" className="btn btn-primary">
          Register
        </Button>
        <StyledLink to="/login">Login</StyledLink>
      </Form>
    </Container>
  );
};

export default FormRegistration;
