
import React from 'react';
import './Headerr.css';

function Header  () {
    return (
        <div>
            <header>
                <p className='logo'>
                  <img src="Frame 2071.png" alt="" />
                </p>
                <ul>
                    <li>Series</li>
                    <li>Movies</li>
                    <li>Box Office</li>
                    <li>Local</li>
                </ul>
                <form action="">
                    <img src="Frame.png" alt="" />
                    <input type="text" placeholder='eg.Stranger Things...' />
                </form>
                <p className='headpicture'>
                    <img src="drown.png" alt="" />
                  <img src="unsplash_3TLl_97HNJo.png" alt="" />
                </p>
            </header>
           
        </div>
    );
};

export default Header;