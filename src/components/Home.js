import React from 'react';
import{Link} from 'react-router-dom'


const destBackground = () => {
    document.body.classList.remove(document.body.classList)
    document.body.classList.add("destination")
}

const Home = () => {
  return (
      <div className='container'>
            <div className='homeText'>
                <h2 className='homeText__title' >SO, YOU WANT TO TRAVEL TO</h2>
                <p id='spaceTxt'>SPACE</p>
                <p className='homeText__text'>
                    Let’s face it; if you want to go to space, you might as well 
                    genuinely go to outer space and not hover kind of on the edge 
                    of it. Well sit back, and relax because we’ll give you a truly 
                    out of this world experience!
                </p>
            </div>
            <div className='exploreContain'>
                <Link id='explore' to='/reactproject1/destination' onClick={destBackground} >EXPLORE</Link>
            </div>
      </div>
  )
};

export default Home;
        