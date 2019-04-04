import React, {Component} from 'react';
import {Container, Card, Col, Form, Button} from 'react-bootstrap';
import logo from "../../assets/images/persistr-horizontal.png"
import {history} from '../../helpers';

export default class Login extends Component {

  static propTypes = {};
  state = {
    validated: false,
    email:'',
    password:''
  };

  handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      localStorage.setItem('token',{})
      history.push('/account');
    };
    this.setState({ validated: true });
  }
  handleEmail = (e) => {
    this.setState({ email: e.target.value })
  }
  handlePassword = (e) => {
    this.setState({ password: e.target.value })
  }
  render() {
    const { validated, email, password } = this.state;
    return (<Container className="login-container">
      <Col md={{
          span: 12,
          offset: 0
        }} lg={{
          span: 10,
          offset: 1
        }} className="p-0 pt-lg-5">

        <Card className="mt-lg-5 mb-lg-5">
          <Col xs={{
              span: 10,
              offset: 1
            }}>
            <div className="pt-5"></div>
            <img height={50} src={logo} alt="Kater"/>
            <h3 className="mt-3 mb-3">Log in to your account</h3>
            <Form
            noValidate
            validated={validated}
            onSubmit={e => this.handleSubmit(e)}
            className="mb-5">
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  required
                  placeholder="Enter email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  onChange={this.handleEmail}
                  value={email}
                  />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  required
                  minLength="8"
                  placeholder="Password"
                  onChange={this.handlePassword}
                  value={password}
                />
              </Form.Group>
              <Button variant="primary" type="submit" >
                Login
              </Button>
            </Form>
          </Col>
        </Card>
      </Col>
    </Container>);
  }

}
