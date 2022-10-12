import './App.css';
import { HashLink } from 'react-router-hash-link';

function App() {
  return (
    <div className="App">
      <div className='navbarClass'>
        <HashLink to="#bikes" smooth className='hashlinkClass'>Bikes</HashLink>
        <HashLink to="#cars" smooth className='hashlinkClass'>Cars</HashLink>
        <HashLink to="#boats" smooth className='hashlinkClass'>Boats</HashLink>
        <HashLink to="#planes" smooth className='hashlinkClass'>Planes</HashLink>
      </div>

      <div id='bikes' className='all'>
          <h4>Bike</h4>
         <img src='https://imgd.aeplcdn.com/1280x720/n/cw/ec/43482/sp-125-right-front-three-quarter-2.jpeg?isig=0&q=80' alt='bike' />
      </div>

      <div id='cars' className='all'>
         <h4>Cars</h4>
         <img src='https://imgd.aeplcdn.com/1056x594/n/cw/ec/123185/grand-vitara-exterior-right-front-three-quarter-2.jpeg?isig=0&q=75&wm=1' alt='car' />
      </div>

      <div id='boats' className='all'>
        <h4>Boats</h4> 
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Amerigo_vespucci_1976_nyc_aufgetakelt.jpg/1280px-Amerigo_vespucci_1976_nyc_aufgetakelt.jpg' alt='boat' />
      </div>

      <div id='planes' className='all'>
         <h4>Plane</h4>
         <img src='https://upload.wikimedia.org/wikipedia/commons/5/5e/ANA_777-300_Taking_off_from_JFK.jpg' alt='plane' />
      </div>
    </div>
  );
}

export default App;
