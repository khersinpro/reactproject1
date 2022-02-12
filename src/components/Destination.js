import React, {useState} from 'react';
import {data} from './data'


const Destination = () => {

  const [destinationData, setDestinationData] = useState(data[0].destinations);
  const [index, setIndex] = useState(0);

  
 
  const handleIndex = (e) => {
    const options = document.querySelectorAll('.carousel__txt--nav p' )
    setIndex(e.target.id)  
    for(let i = 0 ; i < options.length; i++){
      options[i].classList.remove("navSelected")
    }
    options[e.target.id].classList.add('navSelected')
  }

  const planetImageMap = destinationData.map((image, idx) => (
    <div key={idx} className='carousel__image moon' style={{display: `${idx == index ? "flex" : "none"}`}}>
      <img src={image.images.png} alt='' />
    </div>
  ))
  
  return (
   
      <div className="moon" id='destinationContainer'>
         <h2 className='title'><span>01</span>Pick your destination</h2>
        <div className='carousel'>
          {planetImageMap}
          <div className='carousel__txt'>

            <div className='carousel__txt--nav'>
              <p onClick={handleIndex} className='navSelected' id='0'>MOON</p>
              <p onClick={handleIndex} id='1'>MARS</p>
              <p onClick={handleIndex} id='2'>EUROPA</p>
              <p onClick={handleIndex} id='3'>TITAN</p>
            </div>

            <div className='carousel__txt--textMiddle'>
              <h2>{destinationData[index].name}</h2>
              <p>{destinationData[index].description}</p>
            </div>
            
            <div className='carousel__txt--textBottom'>

              <div className='measure'>
                <h3>AVG. DISTANCE</h3>
                <p>{destinationData[index].distance}</p>
              </div>

              <div className='measure'> 
                <h3>EST. TRAVEL TIME</h3>
                <p>{destinationData[index].travel}</p>
              </div>

            </div>
          </div>
        </div>
      </div>
  )
};

export default Destination;
