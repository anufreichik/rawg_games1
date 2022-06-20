import React from 'react';
import './header.css'
import SearchBar from "../searchbar/SearchBar";
const Header = () => {
    return (
        <header>
           <div className='header__wrapper'>
                <div className='header__item logo'>RAWG</div>
               <div className='header__item search'>
                   <SearchBar placeholder={'Search games '}/>
               </div>
               <div className='header__item navigation'>Account Items</div>
           </div>
        </header>
    );
};

export default Header;
