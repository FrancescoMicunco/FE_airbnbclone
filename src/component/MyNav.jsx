import { Navbar, Nav, Button, Modal, Form, Col, InputGroup, FormControl} from "react-bootstrap";
import { useState } from "react";
import UserForm from '../component/UserForm'




const MyNavbar = () => { 
    const [show, setShow] = useState(false);
    const [showH, setShowH] = useState(false);
    const [newUser, setNewUser] = useState({})
    const [newHouse, setNewHouse] = useState({})


    const handleChange = (event) => {
        event.preventDefault()
        const name = event.target.name;
        const value = event.target.value;
        setNewUser(v => ({ ...v, [name]: value }))
    }
const handleChangeHouse = (event) => {
        event.preventDefault()
        const name = event.target.name;
        const value = event.target.value;
        setNewHouse(v => ({ ...v, [name]: value }))
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

const handleCloseH = () => setShowH(false);
    const handleShowH = () => setShowH(true);



    const addUser = async (e) => {
      e.preventDefault()
    try {
        const res = await fetch(`http://localhost:3001/user`,
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
    
    
 const addHouse = async (e) => {
      e.preventDefault()
    try {
        const res = await fetch(`http://localhost:3001/house`,
            { 
                method: "POST",
                body: JSON.stringify(newHouse),
                headers: {'Content-Type': "application/json"}
            });
                return res.text()
  } catch (error) {
    console.log("server error");
  }
}
    
    
    const checkIsValid = async (e) => {
        e.preventDefault()
        if (e.IsValid == true) {
            setIsHost==true
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
           


           {/* **************   MODAL FORM User*************************/}
           <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Fill the form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
<div>
                       {/* <UserForm user={ newUser}/> */}
            <Form onSubmit={addUser}>
      <Col xs="auto">
      <Form.Label htmlFor="inlineFormInput" srOnly>
        Name
      </Form.Label>
      <Form.Control
        className="mb-2"
        id="inlineFormInput"
        placeholder="Name"
        name="firstName"
        value={newUser.firstName}
        onChange={handleChange}
      />
    </Col>
    <Col xs="auto">
      <Form.Label htmlFor="inlineFormInput" srOnly>
        LastName
      </Form.Label>
      <Form.Control
        className="mb-2"
        id="inlineFormInput"
        placeholder="Lastname"
        name="lastName"
        value={newUser.lastName}
        onChange={handleChange}
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
        name="email"
        value={newUser.email}
        onChange={handleChange}
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
        name="phone"
        value={newUser.phone}
        onChange={handleChange}
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
        name="username"
        value={newUser.username}
        onChange={handleChange}
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
        name="password"
        value={newUser.password}
        onChange={handleChange}  
      />
    </Col>

    <Col xs="auto">
      <Form.Check
        type="checkbox"
        id="autoSizingCheck"
        className="mb-2"
        label="IsHost"
        name="isHost"
        value={newUser.isHost}
        onChange={handleChange}
      />
    </Col>
    <Col xs="auto">
      <Button type="submit" className="mb-2" onClick={addUser, handleClose}>
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
           {/**************** END MODAL User***********************/}
<Button variant="outline-success" className="ml-3" onClick={handleShowH}>Add a new house</Button>
           

{/* **************   MODAL FORM House*************************/}
           <Modal show={showH} onHide={handleCloseH}>
        <Modal.Header closeButton>
          <Modal.Title>Fill the form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
<div>
                       {/* <UserForm user={ newUser}/> */}
            <Form onSubmit={addHouse}>
      <Col xs="auto">
      <Form.Label htmlFor="inlineFormInput" srOnly>
        Title
      </Form.Label>
      <Form.Control
        className="mb-2"
        id="inlineFormInput"
        placeholder="title"
        name="title"
        value={newHouse.title}
        onChange={handleChangeHouse}
      />
    </Col>
    <Col xs="auto">
      <Form.Label htmlFor="inlineFormInput" srOnly>
        Description
      </Form.Label>
      <Form.Control
        className="mb-2"
        id="inlineFormInput"
        placeholder="description"
        name="description"
        value={newHouse.description}
        onChange={handleChangeHouse}
      />
    </Col>
    <Col xs="auto">
      <Form.Label htmlFor="inlineFormInput" srOnly>
        Rate
      </Form.Label>
      <Form.Control
        className="mb-2"
        id="inlineFormInput"
        placeholder="rate"
        name="rate"
        value={newHouse.rate}
        onChange={handleChangeHouse}
      />
</Col>

<Col xs="auto">
      <Form.Label htmlFor="inlineFormInput" srOnly>
        Rooms
      </Form.Label>
      <Form.Control
        className="mb-2"
        id="inlineFormInput"
        placeholder="Rooms"
        name="rooms"
        value={newHouse.rooms}
        onChange={handleChangeHouse}
      />
</Col>

<Col xs="auto">
      <Form.Label htmlFor="inlineFormInput" srOnly>
        Max Hosts number
      </Form.Label>
      <Form.Control
        className="mb-2"
        id="inlineFormInput"
        placeholder="Max hosts number"
        name="max_host_num"
        value={newHouse.max_host_num}
        onChange={handleChangeHouse}
      />
</Col>


    {/* <Col xs="auto">
      <Form.Check
        type="checkbox"
        id="autoSizingCheck"
        className="mb-2"
        label="IsHost"
        name="isHost"
        value={newUser.isHost}
        onChange={handleChange}
      />
    </Col> */}
    <Col xs="auto">
      <Button type="submit" className="mb-2" onClick={addHouse, handleCloseH}>
        Submit
      </Button>
    </Col>
  {/* </Form.Row> */}
</Form>  
              </div>     
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseH}>
            Close
          </Button>
          
        </Modal.Footer>
           </Modal>
           {/**************** END MODAL House***********************/}




       </Navbar>
       
    )
}
export default MyNavbar