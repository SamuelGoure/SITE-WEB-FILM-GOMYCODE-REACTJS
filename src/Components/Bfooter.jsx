import React from 'react';
import './Bfooter.css';

function Bfooter(){
    return (
        <div className='bHeader'>
            <section className='bSection'>
                <img src="fleche.png" alt="" />
                Trends Now
            </section>
            <section className='bSection'>
                <img src="water.png" alt="" />
               Popular
            </section>
            <section className='bSection'>
                <img src="plus.png" alt="" />
                New
            </section>
            <hr/>
        </div>
    )
}
export default Bfooter;