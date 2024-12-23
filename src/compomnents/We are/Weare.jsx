import { Button, Col, Container, Row } from "react-bootstrap";
import { FaArrowRightLong, FaCarOn, FaCarSide } from "react-icons/fa6";
import { BsTicketDetailed } from "react-icons/bs";
import { IoPricetag } from "react-icons/io5";
import "./Weare.css";

const sections = [
  {
    title: "Who we are",
    description: "Lorem posuere in tortoran in the nisan semere sceriun miss etiam ornare iros metusan the ravidane lacus.",
    number: "01"
  },
  {
    title: "Our philosophy",
    description: "Lorem posuere in tortoran in the nisan semere sceriun miss etiam ornare iros metusan the ravidane lacus.",
    number: "02"
  },
  {
    title: "How we work",
    description: "Lorem posuere in tortoran in the nisan semere sceriun miss etiam ornare iros metusan the ravidane lacus.",
    number: "03"
  }
];

function Weare() {
  return (
    <div className="Weare">
      <Container>
        <Row>
          {sections.map((section, index) => (
            <Col key={index} lg={4} md={12} sm={12}>
              <div className="booking_details">
                <div className="booking_info">
                  <h5>{section.title}</h5>
                  <p>{section.description}</p>
                  <div className="numb">{section.number}</div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Weare;
