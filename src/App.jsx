import './App.css'
import Career from './components/Career/Career';
import DesignPage from './components/Designer/DesignPage';
import DoubtPage from './components/DoubtPage/DoubtPage';
import Footer from './components/Footer/Footer';
import FresherPage from './components/FresherPage.jsx/FresherPage';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Offering from './components/Offering/Offering';
import Reviews from './components/Reviews/Reviews';
import Top from './components/Top/Top';
import Why from './components/Why/Why';

const App = () => {
  return (
    <div>
         <Top/>
      <Navbar/>
      <Hero/>
      <Career/>
      <Offering/>
      <FresherPage/>
      <DesignPage/>
      <Why/>
      <Reviews/>
      <DoubtPage/>
      <Footer/>
    </div>
  )
}

export default App;

