import { Container, Row, Col } from "react-bootstrap";

import MyNavbar from "components/my-navbar";
import Intro from "components/intro";

export default function Layout ({ children }) {
  return (
    <Container>
      <MyNavbar />
      <div className="blog-detail-page">
        <Row>
          <Col md="12">
            <Intro />
          </Col>
        </Row>

        <hr />
    
        <div className={`page-wrapper`}>{children}</div>
      </div>

      <footer className="page-footer">
        <div>
          <a href="#">нүүр</a>
          {" | "}
          <a href="#">сургалт</a>
          {" | "}
          <a href="#">фэйсбүүк</a>
        </div>
      </footer>
    </Container>
  )
}
