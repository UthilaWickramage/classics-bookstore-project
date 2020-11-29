import React, { Component } from 'react'
import { Spinner, Form, Button, Card, Col,Row, Carousel, Container } from 'react-bootstrap'
import './Books.css'
import firebase from '../../Configuration/fbConfig'

const db = firebase.firestore();

export default class Books extends Component {

   state = {
      bookData: [],
      bookName: '',
      author: '',
      price: '',
      ISBN: ''
   }

   componentDidMount() {
      db.collection('books').get().then(data => {
         data.docs.forEach(doc => {
            this.setState({
               bookData: [...this.state.bookData, doc.data()]
            })
            // console.log('Home',doc.data())
         })
      })
   }

   handleChange = (e) => {
      this.setState({
         [e.target.name]: e.target.value
      })
   }

   submitData = (e) => {
      e.preventDefault();
      db.collection('books').add({
         bookName: this.state.bookName,
         author: this.state.author,
         price: this.state.price,
         ISBN: this.state.ISBN
      })
   }

   render() {
      return (
         <div>

            <h3 className="book-store-title">Our Featured BookStore</h3>
            <div className="book-form">
               {this.state.bookData.length ? (
                  this.state.bookData.map(item => {
                     return (
                        // <div className="book-list">

                        //    <p>{item.bookName}</p>
                        //    <p>{item.Author}</p>
                        //    <p>{item.price}</p>
                        //    <p>{item.ISBN}</p>

                        // </div>
                        <div className="book-card">
                           <Col xs={6} md={3} >
                              <Card style={{ width: '18rem' }}>
                                 <Card.Body>
                                    <Card.Title>{item.bookName}</Card.Title>
                                    <Card.Text className="mb-2 text-muted">{item.author}</Card.Text>
                                    <Card.Text>
                                       {item.price}
                                    </Card.Text>
                                    <Card.Text href="#">{item.ISBN}</Card.Text>

                                 </Card.Body>
                              </Card>
                           </Col>
                        </div>


                     )
                  })
               ) : (
                     <Spinner animation="border" variant="success" />
                  )}
            </div>
            <div className="add-book-form">

               <h2>Add a Book</h2>
               <Container>
                  <Form  style={{width: "100%"}} onSubmit={this.submitData}>
               
               <Row>
               
               <Col  md={6}>
               <Form.Group controlId="formBasicEmail">
                  <Form.Label>Book Name</Form.Label>
                     <Form.Control type="text" name="bookName" placeholder="Book" onChange={this.handleChange}/>
                  </Form.Group>
                  </Col>
                  <Col  md={6}>
                  <Form.Group controlId="formBasicPassword">
                  <Form.Label>Author</Form.Label>
                  <Form.Control type="text" name="author" placeholder="Author" onChange={this.handleChange}/>
               </Form.Group>
                  </Col>
    
                  </Row>
                  <Row>
                     <Col  md={6}>
                     <Form.Group controlId="formBasicPassword">
                  <Form.Label>Price</Form.Label>
                  <Form.Control type="text" name="price" placeholder="Price" onChange={this.handleChange}/>
               </Form.Group>
                     </Col>

                     <Col  sm={6}>
                     <Form.Group controlId="formBasicEmail">
                  <Form.Label>ISBN</Form.Label>
                     <Form.Control type="text" name="ISBN" placeholder="ISBN" onChange={this.handleChange}/>
                  </Form.Group>
                     </Col>
                  </Row>
                <Row>
               
               <Button variant="primary" type="submit">
                  Submit
               </Button>
               </Row>
               </Form>
               </Container>
            
               
            </div>
         </div>
      )
   }
}
