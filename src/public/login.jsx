import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button, Container, Row, Col, Alert } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      // Fetch the login data from db.json
      const response = await fetch('http://localhost:3001/login');
      const users = await response.json();

      // Check if the user exists
      const user = users.find(user => user.email === email && user.password === password);

      if (user) {
        setError('');
        alert('Login successful!');
        // Perform actions after successful login, e.g., redirect to dashboard
      } else {
        setError('Invalid email or password.');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      setError('Something went wrong. Please try again later.');
    }
  };

  return (
    <Container fluid className="login-page">
      <Row className="justify-content-center align-items-center vh-100">
        <Col md="6" lg="4" className="login-form-container">
          <div className="p-4 rounded shadow-sm bg-white">
            <h2 className="font-weight-bold text-center">Welcome Back</h2>
            <Form onSubmit={(e) => e.preventDefault()}>
              {error && <Alert color="danger">{error}</Alert>}
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="Enter your email"
                  type="email"
                  className="login-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormGroup>
              <Button color="primary" className="w-100" onClick={handleLogin}>
                Login
              </Button>
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
