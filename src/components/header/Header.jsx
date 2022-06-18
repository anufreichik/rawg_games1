import React from 'react';
import './header.css'
const Header = () => {
    return (
        <header>
           <div className='header__wrapper'>
                <div className='header__item logo'>RAWG</div>
               <div className='header__item search'>
                   <input type='text' className='header__search__input'/>
               </div>
               <div className='header__item navigation'>Account Items</div>
           </div>
        </header>
    );
};

export default Header;
