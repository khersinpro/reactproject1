import React, {useState} from 'react';
import{NavLink} from 'react-router-dom'
import logo from '../assets/shared/logo.svg'
import burger from '../assets/shared/icon-hamburger.svg'
import burgerClose from '../assets/shared/icon-close.svg'

const Nav = () => {

    const [openNav, setOpenNav] = useState(false);
    const [openBurger, setOpenBurger] = useState(false);
    const [closeBurger, setCloseBurger] = useState(false);

    const togleBurger = (e) => {
        if(openBurger === false){
            setCloseBurger(true)
            setOpenBurger(true)
            setOpenNav(true)
        }else{
            setCloseBurger(false)
            setOpenBurger(false)
            setOpenNav(false)
        }
    }
    // const backgroundSwitch = (e) => {
    //     switch(e.target.href){
    //         case 'http://localhost:3000/':
    //             document.body.classList.remove(document.body.classList)
    //             document.body.classList.add("home")
    //             break
    //         case 'http://localhost:3000/destination':
    //             document.body.classList.remove(document.body.classList)
    //             document.body.classList.add("destination")
    //             break
    //         case 'http://localhost:3000/crew':
    //             document.body.classList.remove(document.body.classList)
    //             document.body.classList.add("crew")
    //             break
    //         case 'http://localhost:3000/technology':
    //             document.body.classList.remove(document.body.classList)
    //             document.body.classList.add("destination")
    //             break
    //     }
    // }
    const backgroundSwitch = (e) => {
        switch(e.target.href){
            case 'https://khersinpro.github.io/reactproject1/':
                document.body.classList.remove(document.body.classList)
                document.body.classList.add("home")
                break
            case 'https://khersinpro.github.io/reactproject1/destination':
                document.body.classList.remove(document.body.classList)
                document.body.classList.add("destination")
                break
            case 'https://khersinpro.github.io/reactproject1/crew':
                document.body.classList.remove(document.body.classList)
                document.body.classList.add("crew")
                break
            case 'https://khersinpro.github.io/reactproject1/technology':
                document.body.classList.remove(document.body.classList)
                document.body.classList.add("destination")
                break
        }
    }
    return(
        <header>
            <nav>
                <div className='lineHeader'></div>
                <img src={logo} alt="logo" />
                <div className='burger'>
                        <img onClick={togleBurger} style={{display:closeBurger ? 'block' : 'none' }}  src={burgerClose} alt='closeBurger'/>
                        <img onClick={togleBurger} style={{display:openBurger ? 'none' : 'block' }}  src={burger} alt='openBurger'/>
                </div>
               
                <ul onClick={togleBurger} className={`navList ${openNav && 'openNavList'}`}>
                    <li>
                        <NavLink to='/reactproject1/'
                            onClick={backgroundSwitch}>
                        <span id="boldNav">00</span>HOME</NavLink>
                    </li>  

                    <li>
                        <NavLink to='/reactproject1/destination'
                            onClick={backgroundSwitch}>
                        <span id="boldNav">01</span>DESTINATION</NavLink>
                    </li>  

                    <li>
                        <NavLink to='/reactproject1/crew' 
                            onClick={backgroundSwitch}>
                        <span id="boldNav">02</span>CREW</NavLink>
                    </li> 

                    <li>
                        <NavLink to='/reactproject1/technology' 
                            onClick={backgroundSwitch}>
                        <span id="boldNav">03</span>TECHNOLOGY</NavLink>
                    </li> 
                </ul>
            </nav>
        </header>
        
    )
};

export default Nav;
