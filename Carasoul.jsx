import { Carousel, Container} from "react-bootstrap"
import books from '../data/history.json'

const Carasoul = () =>{
    return(
        <>
        
            <Container  fluid>
               <Carousel>
                {
                    books.slice(2,8).map(book =>(
                            <Carousel.Item key={book.asin}>
                                <img
                                className="d-block w-100"
                                src={book.img}
                                alt="Book Image"
                                style={{height:"500px"}}
                                />
                                <Carousel.Caption>
                                <h3>{book.title}</h3>
                    
                                </Carousel.Caption>
                            </Carousel.Item>

                    ))
                }
                </Carousel>
            
        </Container>
      </>
    )

}
export default Carasoul