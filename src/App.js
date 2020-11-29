
import './App.css';

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Main from './components/Main/Main'
import Books from './components/BookStore/Books'
import Contacts from './components/Contacts/Contacts'



function App() {
  return (
    <div className="App">
      <Header />
      <Main />

      <Books />
      
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
