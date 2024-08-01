
import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; 
import './Signup.css';
const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = formData;

  
   
    if (username === 'admin' && password === 'ramya') {
      setSuccess('Login successful!');
      setError('');
      setTimeout(() => {
        navigate('/addProduct'); 
      }, 1000); 
    } else if (username && password) {
      setSuccess('Login successful!');
      setError('');
      setTimeout(() => {
        navigate('/homes'); 
      }, 1000); 
    } else {
      setError('Invalid credentials');
      setSuccess('');
    }
  };

  return (
    <Container className="my-5">
      <h2>Login</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formPassword" className="mt-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button type="submit" className="mt-4 custom-pink-btn">
         <b> Login</b>
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
