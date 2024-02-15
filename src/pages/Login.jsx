import { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

  function login() {
    const isCorrectUsername = (username === 'cmj2000@hotmail.com');
    const isCorrectPassword = (password === 'password');

    //      true                   true
    if (isCorrectUsername && isCorrectPassword) {
      authContext.setToken("abc");
      navigate("/dashboard");
    }

  }

  return (
    <>
      <Container>
        <h1>Login to your account</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <div className="col-6">
              <Form.Control 
                type="email" 
                placeholder="Enter email" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <Form.Text className="text-muted">
              We&apos;ll never share your email with anyone else. 
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <div className="col-6">
              <Form.Control 
                type="password" 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </Form.Group>

          <Button variant="primary" onClick={login}>
            Login
          </Button>
        </Form>
      </Container>
    </>
  )
}