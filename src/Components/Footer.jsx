import React from 'react';
import './Footer.css'

function Footer(){
    return (
        <div className='footer'>
           <div className='endTilte'>
          <p>
           Genre and Type <span>Action Series</span>
          </p>
           </div>
           <div className='allImages'>
             <div className='cardOne'>
                <img src="F1.png" alt="" />
                <p>Baby Driver</p>
                <p>2017 ! 1h53m</p>
             </div>
             <div className='cardTwo'>
                <img src="F2.png" alt="" />
                <p>Squid GAME</p>
                <p>2017 ! 1Season</p>
             </div>
             <div className='cardFree'>
                <img src="F3.png" alt="" />
                <p>Titans</p>
                <p>2018 ! 4Seasons</p>
             </div>
             <div className='cardFour'>
                <img src="F4.png" alt="" />
                <p>The Wednesday</p>
                <p>2022 ! 1Seasons</p>
             </div>
             <div className='cardFive'>
                <img src="F5.png" alt="" />
                <p>The Wticher</p>
                <p>2019 ! 2Seasons</p>
             </div>
             <div className='cardSix'>
                <img src="F6.png" alt="" />
                <p>1999</p>
                <p>2022 ! 1Season</p>
             </div>
           
           </div>
        </div>
    )
}
export default Footer;