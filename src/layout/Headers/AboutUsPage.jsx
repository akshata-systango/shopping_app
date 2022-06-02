import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const AboutUsPage = () => {
  return (
    <div className="aboutpage">
      <Container>
        <Row>
          <Col sm={8}>
            <h1 className="aboutheading">Who we are</h1>
            <p title="para">
              Massa ultricies mi quis hendrerit dolor magna eget est. Lacinia at
              quis risus sed vulputate odio ut enim blandit. Auctor elit sed
              vulputate mi sit. Massa tincidunt dui ut ornare lectus. Turpis
              egestas sed tempus urna et. Diam vulputate ut pharetra sit amet
              aliquam id. Nisi est sit amet facilisis. In nisl nisi scelerisque
              eu ultrices vitae. Massa ultricies mi quis hendrerit dolor magna
              eget est. Lacinia at quis risus sed vulputate odio ut enim
              blandit. Auctor elit sed vulputate mi sit. ​Massa ultricies mi
              quis hendrerit dolor magna eget est. Lacinia at quis risus sed
              vulputate odio ut enim blandit. Auctor elit sed vulputate mi sit.
              Massa tincidunt dui ut ornare lectus. Turpis egestas sed tempus
              urna et. Diam vulputate ut pharetra sit amet aliquam id. Nisi est
              sit amet facilisis. In nisl nisi scelerisque eu ultrices vitae. Ut
              ornare lectus sit amet est placerat. Augue neque gravida in
              fermentum et sollicitudin. Est lorem ipsum dolor sit amet
              consectetur adipiscing elit pellentesque.
              {/* <Link>Read More</Link> */}
            </p>
          </Col>
          <Col sm={4} className="milestone">
            <h1 className="aboutheading">Milestone</h1>
            <p className="para"><i className="bi bi-arrow-right-square"></i>Founded in 2015</p>
            <p className="para"><i className="bi bi-arrow-right-square"></i>Reach over 4M+ Customers</p>
            <p className="para"><i className="bi bi-arrow-right-square"></i>Raise $10M+ in funding</p>
            <p className="para"><i className="bi bi-arrow-right-square"></i>Turpis egestas sed</p>
            <p className="para"> <i className="bi bi-arrow-right-square"></i>24*7 native suppport</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUsPage;
