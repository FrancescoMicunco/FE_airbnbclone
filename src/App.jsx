import "./App.css";
import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Form, Row, Col, FormControl, InputGroup, Button, Container, Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import Home from '../src/component/Home';
import MyNavbar from '../src/component/MyNav'

function App() {

  const [city, setCity] = useState([])
  const [house, setHouse] = useState([])
  const [selected, setSelected] = useState(false)
  const [date, setDate] = useState('')
  const [cityId, setCityId]=useState('')

  
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
  
 
const getCities = async () => {
  try {
    const res = await fetch("http://localhost:3001/city");
    if (res.ok) {
      const data = await res.json();
      setCity(data);
          }
  } catch (error) {
    console.log("server error");
  }
  };
  

  const handelCityId = (e) => {
    e.preventDefault();
    setSelected(true)
    getCities()
    const citieSelected = city.find(c => c.name === e.target.value)
    console.log("cityselected", citieSelected.id)
    setCityId(citieSelected.id)
    
      
    }
 

  
const getHouseId = async () => {
  try {
    const res = await fetch(`http://localhost:3001/house`);
    if (res.ok) {
      const data = await res.json();
         setHouse(data)
      }
    } catch (error) {
    console.log("server error");
  }
};

useEffect(()=>{
  getHouseId()
  // getCities()
}, [])
     
useEffect(()=>{},[house])
  
  return (
    <>
      <MyNavbar props={house}/>
      <h1>Welcome in Clone<span style={{ color: "white" }}>Air</span>BnB</h1>
      <Container>

          <Row style={{ display: "flex", textAlign: "center" }}>
        
          <Col xs={12} md={4}>
            
                <InputGroup className="mb-3">
        <FormControl
            placeholder="search a city"
            aria-label="Search"
            aria-describedby="basic-addon1"
            value={city.id}
            onChange={handelCityId}
        />
                </InputGroup>
            
          </Col>


          <Col xs={12} md={8} style={{ display: "flex", marginBottom: "10px" }}>

            <Form>
                {
                    <>
                      {/* <Form.Group controlId="formBasicRange">
                          <Form.Label>Range</Form.Label>
                          <Form.Control type="range" as="input" size='sm'/>
                      </Form.Group> */}
                  

                <div key={`Cooking set`} className="mb-3 d-inline-flex">
                    <Form.Check 
                        type={"checkbox"}
                        label={`Cooking set`}
                    />
                  </div>
                  
                <div key={`Smoking allowed`} className="mb-3 d-inline-flex">
                      <Form.Check 
                        type={"checkbox"}
                        label={`Smoking allowed`}
                    />
              </div>
                <div key={`Private bath`} className="mb-3 d-inline-flex">
      <Form.Check 
        type={"checkbox"}
        label={`Private bath`}
                    />
                    </div>

      <div key={`Parking`} className="mb-3  d-inline-flex">
      <Form.Check 
        type={"checkbox"}
        label={`Parking`}
                    />
                    </div>
      
      <div key={`Breakfast included`} className="mb-3 d-inline-flex">
      <Form.Check 
        type={"checkbox"}
        label={`Breakfast included`}
                    />
                    </div>
        
 </>
  }
</Form>

          </Col>
          
      </Row>

      </Container>
      
      <Container>
        <Row className="d-flex">
          <Col xs={12}  className="xs-mt-3">
            <Row>
            {cityId &&
              house.filter(c=>c.CityId==`{cityId}`).map(e => (
              <Col md={3}>
                  <Card className="mb-4">
                    <Card.Img variant="top" src={e.image1url} />
                    <Card.Body>
                      <Card.Title>{ e.title}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">{e.name }</Card.Subtitle>
                        <Card.Text>{ e.description}</Card.Text>
                        <Card.Text>rate {e.rate}</Card.Text>
                        <Card.Link href="#">Show more</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                  </Card>
              </Col>
              ))
              }
              {
                house.map(e => (
              <Col md={3}>
                  <Card className="mb-4">
                    <Card.Img variant="top" src={e.image1url} />
                    <Card.Body>
                      <Card.Title>{ e.title}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">{e.name }</Card.Subtitle>
                        <Card.Text>{ e.description}</Card.Text>
                        <Card.Text>rate {e.rate}</Card.Text>
                        <Card.Link href="#">Show more</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                  </Card>
              </Col>
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
