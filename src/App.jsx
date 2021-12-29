import "./App.css";
import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Row, Col, FormControl, InputGroup, Button, Container, Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import Home from '../src/component/Home'

function App() {

  const [city, setCity] = useState([])
  const [cities, setSelected] = useState('')
const [date, setDate] = useState('')

  
  const deleteCity = async (id) => {
    try {
    const res = await fetch(`http://localhost:3001/city/${id}`);
    if (res.ok) {
      const data = await res.json();
      console.log(data);
      
    }
  } catch (error) {
    console.log("server error");
  }
  }
  
const addCity = async (id) => {
    try {
    const res = await fetch(`http://localhost:3001/city/${id}`);
    if (res.ok) {
      const data = await res.json();
      console.log(data);
      setCity(data)
    }
  } catch (error) {
    console.log("server error");
  }
  }
  
const getCities = async () => {
  try {
    const res = await fetch("http://localhost:3001/city");
    if (res.ok) {
      const data = await res.json();
      console.log(data);
      setCity(data);
          }
  } catch (error) {
    console.log("server error");
  }
  };
  
  const getHouseId = async (id) => {
  try {
    const res = await fetch(`http://localhost:3001/city/${id}`);
    if (res.ok) {
      const data = await res.json();
      console.log(data);
      setCity(data);
      console.log(city)
      }
  } catch (error) {
    console.log("server error");
  }
};

useEffect(()=>{
  getCities()
}, [])
     
  
  return (
    <>
      <h1>Welcome in Clone<span style={{color:"white"}}>Air</span>BnB</h1>
      <Container>
        <Row>
          <Col xs={12} md={6} className="form_input">

<InputGroup className="mb-3">
    <InputGroup.Prepend>
      <Button variant="outline-secondary">Button</Button>
    </InputGroup.Prepend>
    <FormControl aria-describedby="basic-addon1" placeholder="Search for a city"
            className="mr-sm-2 form_input"/>
  </InputGroup>
{/* <Navbar className="bg-light justify-content-between">
    <Form inline className="form_input">
    <Form.Control 
            type="text"
                  // onChange={(e) => getHouseId(e.target.value)}
                    // setSelected(e.target.value)}
            //value={cities}
            placeholder="Search for a city"
            className="mr-sm-2 form_input" />
    <Button type="submit" onClick={(e)=>console.log(e.target.value)}>search</Button>
  </Form>
      </Navbar> */}
          </Col>


          {/* <Col xs={12} md={6}>
<Navbar className="bg-light justify-content-between">
    <Form inline>
    <Form.Control 
            type="date"
            onChange={(e)=>setDate(e.target.value)}
            value={date}
            placeholder="Search for a date"
            className=" mr-sm-2 form_input"/>
    <Button type="submit" onClick={(e)=>setDate(e.target.value)}>search</Button>
  </Form>
      </Navbar>
          </Col> */}
        </Row>
      </Container>
      <Row>
        <Col md={6}>
          <h2>Select a House</h2>
        </Col>
      </Row>

      
      </>
  );
}

export default App;
