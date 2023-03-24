
import React from 'react';
import './Body.css';
import { Carousel } from "react-bootstrap";

function Body() {
  return (
   
    <Carousel className='headerBody'>
      <Carousel.Item interval={1000}>
              
        <img
          className="d-block w-100"
          src="img33.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <section className='cardHeader1'>
          <h3> Back to Homepage </h3>
          <p>THRILLER * HORROR * TEEN</p>
          <h1>Stranger Things</h1>
          <h6>16+</h6>
           <p> 9.0         2019 I 9 Episodes</p>
           <p>When a young boy vanishes, a small town uncovers a mystery involving secret <br/> experiments, terrifying supernatural forces and one strange little girl. </p>
           <p>Starring : Winona Ryder, David Harbour,Millie Bobby Brown</p>
           <button className='btn-1'>Watch Season 3</button>
           <button className='btn-2'>All Seasons</button>
          </section>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="birdbox.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
        <section className='cardHeader2'>
          <h3>CHILD DEPRIVED</h3>
          <p>Poor children suffer greatly from starvation and are also abused by several people.supervision of an adult. They can be children of any age, but are generally considered children under the age of 18.

The reasons why children end up on the streets are varied and complex, but can include poverty, domestic violence, armed conflict, neglect or abandonment of family, drugs or substance abuse, sexual exploitation, or discrimination.

</p>
          </section>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img44.png"
          alt="Third slide" 
        />
        <Carousel.Caption>
        <section className='cardHeader3'>
         
          </section>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
  );
}

export default Body;