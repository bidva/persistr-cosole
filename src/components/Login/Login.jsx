import React, {Component} from 'react';
import {Container, Card, Col} from 'react-bootstrap';
import logo from "../../assets/images/persistr-horizontal.png"

export default class Login extends Component {

  static propTypes = {};

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (<Container>
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
            <img height={70} src={logo} alt="Kater"/>
          </Col>

        </Card>
      </Col>

    </Container>);
  }

}
