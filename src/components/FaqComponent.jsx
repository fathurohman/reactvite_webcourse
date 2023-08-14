import {Container, Row, Col, Accordion} from 'react-bootstrap';

import { faq } from "../data/index";

const FaqComponent = () => {
  return (
    <div className='faq'>
    <Container>
      <Row>
        <Col>
          <h2 className='text-center fw-bold animate__animated animate__fadeInUp animate__delay-1s'>Pertanyaan yang sering ditanyakan</h2>
        </Col>
      </Row>
      <Row className='row-cols-lg-2 row-cols-1 g-2 pt-5'>
        {faq.map((datafaq) => {
          return (
            <Col key={datafaq.id}>
            <Accordion className='shadow-sm'>
              <Accordion.Item eventKey={datafaq.eventKey}>
                <Accordion.Header>{datafaq.title}</Accordion.Header>
                <Accordion.Body>
                 {datafaq.desc}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          )
        })}
       
       
      </Row>
    </Container>
      
    </div>
  )
}

export default FaqComponent