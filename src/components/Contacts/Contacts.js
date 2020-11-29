import React, { Component } from 'react'
import { Jumbotron, Button } from 'react-bootstrap'
import './Contact.css'

export default class Contacts extends Component {
   render() {
      return (
         <div>
            <Jumbotron className="contact-section">
               <h1>Want to get in touch with Us </h1>
               <p>
                  Leave us a Message, We will reach you as soon as possible  
               </p>
               
                  <Button variant="danger">Contact Us</Button>
               
            </Jumbotron>
         </div>
      )
   }
}
