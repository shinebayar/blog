import { Row, Col, Image } from "react-bootstrap";

export default function item() {
  return (
    <Row>
      <Col md="1">
        <Image
          roundedCircle
          width={64}
          height={64}
          className="mr-3"
          src="logo.jpg"
          alt="Generic placeholder"
        />
      </Col>
      <Col md="11">
        <h5 className="font-weight-bold mb-0">1234.mn - Онлайн видео сургалт</h5>
        <p className="welcome-text">
          Бид програмчлалын технолгийн чиглэлээр төрөл бүрийн сонирхолтой
          мэдээллүүдийг энэхүү блогоор хүргэж байна.
        </p>
      </Col>
    </Row>
  )
}
