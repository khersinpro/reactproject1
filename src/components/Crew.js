import React, {useState} from 'react';
import {data} from "./data"

const Crew = () => {
    const [crewData, setCrewData] = useState(data[0].crew);
    
    const handleContent = (e) => {
        const contentChoice = document.querySelectorAll(`.crewInfo`)
        
        for(let i = 0; i < contentChoice.length; i++){
            if(i == e.target.value){
                const buttons = document.querySelectorAll('.crewLeft button ');
                contentChoice[e.target.value].style.display = 'flex';
                buttons.forEach(button => {
                    if(button.value == e.target.value){
                        button.style.background = "white"
                    }else{
                        button.style.background = "rgba(255, 255, 255, 0.17)"
                    }
                })
            }else{
                contentChoice[i].style.display = 'none'   
            }
        }     
    }
    
  return(
      <div className='crewContainer'>
          <h2 className='title'><span>02</span>meet your crew</h2>
          {
              crewData.map((crew, idx) => (
                <div className='crewInfo' key={idx} style={{display:`${idx === 0 ?  'flex' : 'none'}`}}>
                    <div className='crewLeft'>
                        <p  className='crewLeft__role'>{crew.role}</p>
                        <h2 className='crewLeft__name'>{crew.name}</h2>
                        <p  className='crewLeft__bio'>{crew.bio}</p>
                        <div className='crewLeft__buttons'> 
                            <button onClick={handleContent} value='0' style={{background: "white"}}></button>
                            <button onClick={handleContent} value='1' ></button>
                            <button onClick={handleContent} value='2' ></button>
                            <button onClick={handleContent} value='3' ></button>
                        </div>
                    </div>
                    <img className='crewRight' src={crew.images.png} alt={crew.name} />
                </div>  
              ))
          }
      </div>
  )
};

export default Crew;
