import React, {Component} from 'react'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'


class Home extends Component{
    render(){
        return(
            <Container>
                <Row>
                    <Col md={{ size: 10, offset: 1 }}>
                        <Card>
                            <CardBody>
                                <p className='lead'>
                                    Home
                                </p>

                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default Home