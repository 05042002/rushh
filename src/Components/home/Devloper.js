import React from 'react'
import Sunil from "../../Assets/images/suniil.png";
import pawan from "../../Assets/images/pawan.png";


  import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardFooter
  } from "reactstrap";

export default function Devloper() {
  return (
    <>
    
<h1 style={{marginLeft:"550px",marginTop:"-80px"}}>Devlpoment Team</h1>
      <div
      style={{
        display: "flex"
      }}
    >
      <div class="col-4">
        <Card
          style={{
            padding: "5px",
            marginLeft:"250px",
            marginTop:"-1px"
          }}
        >
          <CardImg top width="100%" src={Sunil} alt="Card image cap" />
          <CardBody>
            <CardTitle style={{ fontWeight: "bold" }}>Mr. Sunil Gupta</CardTitle>
            <CardText>"Hey He is Sunil, a full-stack web developer.  and he is currently studying in BE third year at Thakur College of Engineering and Technology.</CardText>
          </CardBody>
         
        </Card>
      </div>
      <div class="col-4">
        <Card
          style={{
            padding: "5px",
            marginLeft:"250px",
            marginTop:"-1px"
          }}
        >
          <CardImg top width="100%" src={pawan} alt="Card image cap" />
          <CardBody>
            <CardTitle style={{ fontWeight: "bold" }}>Mr. Pawan Kumar Jha</CardTitle>
            <CardText>"Hey He is Pawan, a full-stack web developer.  and he is currently studying in BE third year at Thakur College of Engineering and Technology.</CardText>
          </CardBody>
          
        </Card>
      </div>
      
      
    </div>

    
    </>
  )
}
