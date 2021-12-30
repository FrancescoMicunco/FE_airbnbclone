import { Navbar, Nav, Button, Modal, Form, Col, InputGroup, FormControl} from "react-bootstrap";
import { useState } from "react";



const MyNavbar = () => { 
    const [show, setShow] = useState(false);
    const [firstName, setFirstName] = useState("")
    
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [isHost, setIsHost] = useState("")


    const newUser = {
        firstName: '{firstName}',
        lastName: '{lastName}',
        email: '{email}',
        phone: {phone},
        username: "{username}",
        password: "{password}",
        isHost:"{isHost}"
    }
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  const addUser = async () => {
    try {
        const res = await fetch(`http://localhost:3001/city/${id}`,
            
            { 
                method: "POST",
                body: JSON.stringify(newUser),
                headers: {'Content-Type': "application/json"}
            });
                if (res.ok) {
                aler("User correctly added!")
    }else{alert("there is an error adding new User!")}
  } catch (error) {
    console.log("server error");
  }
}
      
    

   return (
        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">CloneAirBnB</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
       </Nav>
            </Navbar.Collapse>
           <Button onClick={handleShow}>Become a Host</Button>


           {/* **************   MODAL FORM *************************/}
           <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Fill the form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
<div>
                   
            <Form>
  {/* <Form.Row className="align-items-center"> */}
    <Col xs="auto">
      <Form.Label htmlFor="inlineFormInput" srOnly>
        Name
      </Form.Label>
      <Form.Control
        className="mb-2"
        id="inlineFormInput"
        placeholder="Name"
      />
    </Col>
    <Col xs="auto">
      <Form.Label htmlFor="inlineFormInput" srOnly>
        LastName
      </Form.Label>
      <Form.Control
        className="mb-2"
        id="inlineFormInput"
        placeholder="lastname"
      />
    </Col>
    <Col xs="auto">
      <Form.Label htmlFor="inlineFormInput" srOnly>
        email
      </Form.Label>
      <Form.Control
        className="mb-2"
        id="inlineFormInput"
        placeholder="email"
      />
    </Col>

                           <Col xs="auto">
      <Form.Label htmlFor="inlineFormInput" srOnly>
        Phone number
      </Form.Label>
      <Form.Control
        className="mb-2"
        id="inlineFormInput"
        placeholder="Phone"
      />
                           </Col>

<Col xs="auto">
      <Form.Label htmlFor="inlineFormInput" srOnly>
        Username
      </Form.Label>
      <Form.Control
        className="mb-2"
        id="inlineFormInput"
        placeholder="Choise a username"
      />
                           </Col>


<Col xs="auto">
      <Form.Label htmlFor="inlineFormInput" srOnly>
        Password
      </Form.Label>
      <Form.Control
        className="mb-2"
        id="inlineFormInput"
        placeholder="*****"
        type="password"
      />
    </Col>

    <Col xs="auto">
      <Form.Check
        type="checkbox"
        id="autoSizingCheck"
        className="mb-2"
        label="IsHost"
      />
    </Col>
    <Col xs="auto">
      <Button type="submit" className="mb-2">
        Submit
      </Button>
    </Col>
  {/* </Form.Row> */}
</Form>
              </div>     
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
           </Modal>
           {/**************** END MODAL ***********************/}

       </Navbar>
       
    )
}
export default MyNavbar