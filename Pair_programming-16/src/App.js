import './App.css';
import Navbar from './components/Navbar'
import Promo from './components/Promo'
import Banner from './components/banner'
import Footer from './components/Footer'
import Cards from './components/cards';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Cards />
      <Promo />      
      <Footer/>
    </div>
  );
}

export default App;
