import react from 'react';
import Nav from './components/Nav/Nav';
import Section1 from './components/Section1/Section1';
import ImageSlider from './components/ImageSlider/ImageSlider';
import hotels from './data/hoteldata';
import Searchbox from './components/Searchbox/Searchbox';
import Movingtext from './components/Movingtext/Movingtext';
import Contactpage from './components/Conatactpage/Contactpage';
import Aboutpage from './components/Aboutpage/Aboutpage';
import Features from './components/Features/Features';


function App() {
  return (
    <>
      <Nav />
      <Section1 />
      <ImageSlider 
        hotels={hotels}
        autoplay={true}
        interval={6000}
      />
      <Searchbox />
      <Movingtext 
        text1="STAY COMFORTABLY"
        text2="DISCOVER YOUR STAY"
        text3="REST • RELAX • RECONNECT" />
      <Features/>
      <Aboutpage/>
      <Contactpage/>

    </>
  )
}

export default App;