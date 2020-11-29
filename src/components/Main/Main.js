import React, { Component } from 'react'
import './Main.css'
import { Carousel, Button } from 'react-bootstrap'

export default class Main extends Component {
   render() {
      return (
         
         <div>
            
            <Carousel>
               <Carousel.Item>
                  <img
                     className="d-block w-100"
                     src="https://images.unsplash.com/photo-1561657819-51c0511e35ab?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=751&q=80"
                     alt="First slide"
                  />
                  <Carousel.Caption>
                  <div className="box1-text">
                  <h1 className="main-title">Classics Bookstore</h1>
                  <p className="main-para">We have the best book store for you.
                   You can<br></br> check out our existing
                      book library and add books you wish</p>
                      <Button variant="outline-success" size="lg">Add a Book</Button>
               </div>
                  </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>
                  <img
                     className="d-block w-100"
                     src="https://images.pexels.com/photos/3847626/pexels-photo-3847626.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                     alt="Third slide"
                  />

                  <Carousel.Caption>
                  <div className="box1-text">
                  <h1 className="main-title">Classics Bookstore</h1>
                  <p className="main-para">We have the best book store for you.
                   You can<br></br> check out our existing
                      book library and add books you wish</p>
                      <Button variant="outline-success" size="lg">Add a Book</Button>
               </div>
                  </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>
                  <img
                     className="d-block w-100"
                     src="https://images.pexels.com/photos/2663851/pexels-photo-2663851.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                     alt="Third slide"
                  />

                  <Carousel.Caption>
                  <div className="box1-text">
                  <h1 className="main-title">Classics Bookstore</h1>
                  <p className="main-para">We have the best book store for you.
                   You can<br></br> check out our existing
                      book library and add books you wish</p>
                      <Button variant="outline-success" size="lg">Add a Book</Button>
               </div>
                  </Carousel.Caption>
               </Carousel.Item>
            </Carousel>
            </div>
      )
   }
}
