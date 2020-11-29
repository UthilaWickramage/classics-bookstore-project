import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {
   render() {
      return (
         <div className="my-footer">
            
            
            <div className="top-footer">
            
            <h3 className="footer-logo">BOOK STORE</h3>
            
            <ul className="nav-list">
               <li className="nav-list-item">Home</li>
               <li className="nav-list-item">Books</li>
               <li className="nav-list-item">Add a Book</li>
               <li className="nav-list-item">Contacts</li>
            </ul>
            
            </div>

            <div className="bottom-footer">
               <p className="footer-text"><span>&copy;</span> all rights reserved</p>
            
               <ul className="social-links">
                  <li className="social-item" ><a className="social-link" href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a></li>
                  <li className="social-item"><a className="social-link" href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
                  <li className="social-item" ><a className="social-link" href="https://twitter.com/" target="_blank"><i class="fab fa-twitter"></i></a></li>
               </ul>
            </div>

                      
         </div>
      )
   }
}

