import { Card, Container, Row , Col} from "react-bootstrap"
import romancebooks from '../data/romance.json'

const LatestRelease = () =>{
    return(
        <>
        <h1 className="text-dark" style={{backgroundColor:"yellow"}}>Latest Release</h1>
        <Container className="my-3" >
            
            <Row>
                
                    {
                        romancebooks.slice(0,20).map(book =>(
                            <Col xs={12} md={4} lg={3}>
                            <Card className="mt-3" style={{width:"250px" ,height:"425px"}} >
                        <Card.Img variant="top" src={book.img} style={{width:'248px',height:"300px"}}/>
                        <Card.Body>
                          <Card.Title>{book.title}</Card.Title>
                    
                        </Card.Body>
                      </Card>
                      </Col>

                        ))
                        
                    }
                
            </Row>
              
        </Container>
      </>
    )

}
export default LatestRelease