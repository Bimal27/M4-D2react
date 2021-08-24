import { Navbar,Nav ,Form , FormControl ,Button} from "react-bootstrap"
const MyNav = () =>{
    return(
        <Navbar bg="dark" variant="dark" style={{position:"fixed",top:"0",right:"0" ,left:'0',zIndex:"1"}}>
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Nav className="mr-auto">
        <Navbar.Brand href="#home">About</Navbar.Brand>
        <Navbar.Brand href="#home">Browse</Navbar.Brand>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    )
}
export default MyNav