import { Navbar, Nav, Button, Modal, Form, Col, InputGroup, FormControl} from "react-bootstrap";
import { useState } from "react";




const UserForm = (props) => {

const handleChange = (event) => {
        event.preventDefault()
        const name = event.target.name;
        const value = event.target.value;
        setNewUser(v => ({ ...v, [name]: value }))
    }



    const addUser = async (e) => {
      e.preventDefault()
    try {
        const res = await fetch(`http://localhost:3001/user`,
            { 
                method: "POST",
                body: JSON.stringify(props),
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
        value={props.firstName}
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
        value={props.lastName}
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
        value={props.email}
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
        value={props.phone}
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
        value={props.username}
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
        value={props.password}
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
        value={props.isHost}
        onChange={handleChange}
      />
    </Col>
    <Col xs="auto">
      <Button type="submit" className="mb-2" onClick={addUser}>
        Submit
      </Button>
    </Col>
  {/* </Form.Row> */}
</Form>

    )
     }

       export default UserForm