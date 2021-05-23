import React, {useState} from 'react'
import { Button, Navbar, Nav, NavDropdown, Jumbotron } from 'react-bootstrap';
import Data from './data.js'
import {Link, Route, Switch, useHistory} from 'react-router-dom';
import Detail from './Detail'
import './App.css';
import axios from 'axios';


function App() {

  let [shoes, shoes변경] = useState(Data);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Shoe shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home" as={Link} to="/">Home</Nav.Link>
            <Nav.Link href="#link" as={Link} to="/detail">Detail</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>  
        <Button variant="outline-success">Search</Button>  
        </Navbar.Collapse>
      </Navbar>


      <Route exact path = "/">
        <Jumbotron className="background">
          <h1>20% Season OFF</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for calling
            extra attention to featured content or information.
          </p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Jumbotron>

        <div className="container">
            <div className="row">
              {
                shoes.map((a,i)=>{
                  return <Card shoes = {a} i={i} key={i}  />
                  // return <Card shoes = {shoes[i]} />
                })
              }            
            </div>
        
            <button className ="btn btn-primary" onClick={()=>{

              // 로딩중이라는 UI 띄움

              axios.get('https://codingapple1.github.io/shop/data2.json')
              .then((result)=>{

                // 로딩중이라는 UI 안보이게

                axios.post('서버URL', { id : 'codingapple', pw : 1234});

                console.log(result);
                shoes변경([...shoes, ...result.data]); // shoes 카피본!!
                // let copy = [...shoes];
                // copy.push(result.data);
                // shoes변경(copy);

              }) //요청이 성공했을 때

              .catch(()=>{

                // 로딩중이라는 UI 안보이게

                console.log('실패했습니당 ㅜㅠ')
              }) //요청이 실패했을 때       
              
            }}>더보기</button>
        </div>

      </Route>

      <Route path = "/detail/:id">
        <Detail shoes={shoes}  />
      </Route>      
    </div>
  )
}

function Card(props){

  let history = useHistory();

  return(
      <div className="col-md-4"  onClick={()=>{history.push('/detail/'+props.shoes.id)}}>
          <img src={'https://codingapple1.github.io/shop/shoes'+
          (props.i+1)+'.jpg' }width="100%" />
          <h4>{props.shoes.title}</h4>
          <p>{props.shoes.content}</p>
          <p>{props.shoes.price}</p>
      </div>

  )
}



export default App;
