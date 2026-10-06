import react from 'react';
import Nav from './components/Nav/Nav';
import Section1 from './components/Section1/Section1';
import ImageSlider from './components/ImageSlider/ImageSlider';
import hotels from './data/hoteldata';


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
      
    </>
  )
}

export default App;