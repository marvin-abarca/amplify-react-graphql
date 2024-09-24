import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavigationHeader from './NavigationHeader';  


    function MainView() {
        return (
            <Container>
            <Row>
            <Col> <NavigationHeader/> </Col>
            </Row>
            <Row>
            <Col sm={4}>1 of 3</Col>
            <Col sm={8}>2 of 3</Col>
            </Row>

        </Container>
        );
        
}

export default MainView;