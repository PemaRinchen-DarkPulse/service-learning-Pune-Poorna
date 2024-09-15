import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button, Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome
import './Login.css'; // Import custom CSS for styling
import { Link } from 'react-router-dom';
import axios from 'axios'; // You need to install axios for making HTTP requests

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Password validation
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    
    try {
      // Send POST request to your API
      const response = await axios.post('http://localhost:8080/register', { email, password });
      
      if (response.data.exists) {
        setError('User already exists.');
        setSuccess('');
      } else {
        setSuccess('Signup successful! You can now log in.');
        setError('');
        // Reset the form fields
        setEmail('');
        setPassword('');
        setConfirmPassword('');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
      setSuccess('');
    }
  };

  return (
    <Container fluid className="login-page">
      <Row className="justify-content-center align-items-center vh-100">
        <Col md="6" lg="4" className="login-form-container">
          <div className="p-4 rounded shadow-sm bg-white">
            <h2 className="font-weight-bold text-center">Welcome</h2>
            <Form onSubmit={handleSubmit}>
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
              <FormGroup>
                <Label for="exampleConfirmPassword">Confirm Password</Label>
                <Input
                  id="exampleConfirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  type="password"
                  className="login-input"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </FormGroup>
              {error && <p className="text-danger text-center">{error}</p>}
              {success && <p className="text-success text-center">{success}</p>}
              <Button color="primary" className="w-100">Sign Up</Button>
            </Form>
            <p className="mt-3 text-center">Already have an account? <Link to="/login">Login here</Link>.</p>
            <h5 className='text-center'>Or</h5>
            <div className="mt-3 text-center">
              <Button color="light" className="w-100 d-flex align-items-center justify-content-center">
                <i className="fab fa-google mr-2"></i> Sign Up with Google
              </Button>
              <Button color="light" className="w-100 d-flex align-items-center justify-content-center mt-2">
                <i className="fab fa-facebook-f mr-2"></i> Sign Up with Facebook
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
