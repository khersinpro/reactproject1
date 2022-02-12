import React, {useState} from 'react';
import { useMediaQuery } from 'react-responsive'
import { data } from "./data";

const Technology = () => {
    const [technologyData, setTechnologyData] = useState(data[0].technology);
    const [selectedTech, setSelectedTech] = useState(0);
    const isTablet = useMediaQuery({maxWidth: 1024 });

    const btnChoice = (e) => {setSelectedTech(e.target.value)}

    const mapTest =  technologyData.map( (dest, idx) => (
        <div className='mapContainer' key={idx} style={{display: `${idx == selectedTech ? "flex" : "none"}`}}>
            <div className='technologyInfos__infos'>
                <p className='technologyInfos__infos--title'>THE TERMINOLOGY...</p>
                <h2 className='technologyInfos__infos--name'>{dest.name}</h2>
                <p className='technologyInfos__infos--description'>{dest.description}</p>
            </div>
            <img className='technologyInfos__image' src={!isTablet ? dest.images.portrait : dest.images.landscape} alt={dest.name} />
        </div> 
      ))

  return(
      <div className='technologyContainer'>
          <h2 className='title'><span>03</span>SPACE LAUNCH 101</h2>
          <div className='technologyInfos'>
                <div className='technologyInfos__buttons'>
                    <button className={selectedTech == 0 ? "buttonSelected" : ""}  onClick={btnChoice} value={0}>1</button>
                    <button className={selectedTech == 1 ? "buttonSelected" : ""}  onClick={btnChoice} value={1}>2</button>
                    <button className={selectedTech == 2 ? "buttonSelected" : ""}  onClick={btnChoice} value={2}>3</button>
                </div>
                {mapTest}
          </div>   
      </div>
  )
};

export default Technology;
