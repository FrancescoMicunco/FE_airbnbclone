import "./App.css";
import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Row, Col, FormControl, InputGroup, Button, Container, Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import Home from '../src/component/Home';
import MyNavbar from '../src/component/MyNav'

function App() {

  const [city, setCity] = useState([])
  const [selected, setSelected] = useState(false)
  const [date, setDate] = useState('')
  const [id, setId]=useState('')

  
const deleteCity = async ({id}) => {
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
  
const getCity = async ({id}) => {
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
  

  const handelCityId = (e) => {
    e.preventDefault();
    setSelected(true)
    const citieSelected = city.find(c => c.name === e.target.value)
    if (citieSelected) {
      console.log(citieSelected.id)
      setId(citieSelected)
      console.log(id.id)
    }
 }

  
const getHouseId = async (id) => {
    try {
      if (id) {
        const res = await fetch(`http://localhost:3001/city/${id}`);
        if (res.ok) {
          const data = await res.json();
          console.log(data);
          setCity(data);
          console.log(city)
        }
      } else {
                const res = await fetch("http://localhost:3001/city");
        if (res.ok) {
          const data = await res.json();
          console.log(data);
          setCity(data);
          
        }
      }
  } catch (error) {
    console.log("server error");
  }
};

useEffect(()=>{
  getHouseId()
  // getCities()
}, [])
     
useEffect(()=>{},[city])
  
  return (
    <>
      <MyNavbar props={city}/>
      <h1>Welcome in Clone<span style={{ color: "white" }}>Air</span>BnB</h1>
      <div style={{ display: "inline-block" }}>
        <InputGroup className="mb-3">
        <FormControl
            placeholder="search a city"
            aria-label="Search"
            aria-describedby="basic-addon1"
            value={city.id}
            onChange={handelCityId}
        />
        </InputGroup>
      </div>
      <Container>
        <Row className="d-flex">
          <Col xs={12}  className="xs-mt-3">
            <Row>
            {
              city.map(e => e.Houses.map(h => (
              <Col md={3}>
                  <Card className="mb-4">
                    <Card.Img variant="top" src={h.image1url} />
                    <Card.Body>
                      <Card.Title>{ h.title}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">{e.name }</Card.Subtitle>
                        <Card.Text>{ h.description}</Card.Text>
                        <Card.Text>rate {h.rate}</Card.Text>
                        <Card.Link href="#">Show more</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                  </Card>
              </Col>)
              ))
            }
            </Row>
            </Col>
        </Row>
   </Container>
    </>
  );
}

export default App;
