import React from 'react';
import { Form, FormGroup, Label, Input, Button, Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome
import './Login.css'; // Import custom CSS for styling
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <Container fluid className="login-page">
      <Row className="justify-content-center align-items-center vh-100">
        <Col md="6" lg="4" className="login-form-container">
          <div className="p-4 rounded shadow-sm bg-white">
            <h2 className="font-weight-bold text-center">Welcome Back</h2>
            <Form>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="Enter your email"
                  type="email"
                  className="login-input"
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  id="examplePassword"
                  name="password"
                  placeholder="Enter your password"
                  type="password"
                  className="login-input"
                />
              </FormGroup>
              <Button color="primary" className="w-100">Login</Button>
              </Form>
              <p>Doesn't have an account? <Link to="/signup">Sign Up here</Link>.</p>
            <h5 className='text-center'>Or</h5>
              <div className="mt-3 text-center">
                <Button color="light" className="w-100 d-flex align-items-center justify-content-center">
                  <i className="fab fa-google mr-2"></i> Login with Google
                </Button>
                <Button color="light" className="w-100 d-flex align-items-center justify-content-center mt-2">
                  <i className="fab fa-facebook-f mr-2"></i> Login with Facebook
                </Button>
              </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
