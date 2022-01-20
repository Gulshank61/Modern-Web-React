import './App.css';
import Navbar from './components/Navbar';
import './css/bootstrap.css';
import './css/fontawesome-all.css';
import './css/magnific-popup.css';
import './css/styles.css'
import './css/swiper.css'
import Header from './components/Header';
import Customers from './components/Customers';
import Description from './components/Description';
import Features from './components/Features';
import Details from './components/Details';
import Video from './components/Video';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Copyright from './components/Copyright';
import Login from './components/Login';
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
     
     <Navbar />
     <Header />
     <Customers />
     <Description />
     <Features />
     <Details />
     <Video />
     <Pricing />
     <Testimonials />
     <Newsletter />
     <Footer />
     <Copyright />
    <Link to="/login">Login</Link>
    <Link to="/signup">SignUp</Link>
    <Link to="/privacypolicy">Privacypolicy</Link>
    <Link to="/Termsandcondition">Termsandcondition</Link>
    <Link to="/Articledetails">Articledetails</Link>
    </div>

  
    
  );
}

export default App;
