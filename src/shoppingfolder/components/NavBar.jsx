

import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'; // Correct icon import

const NavBar = () => {
    return (
        <div className="navbar">
            {/* Add your navigation links or components here */}




            <div className='menu'>
                <div className='search'>
                    {/* <img src="./assets/search.png" alt="" /> */}



                    <input type="text" placeholder='Search' />
                    <div className="bulb">
                        <FontAwesomeIcon icon={faSearch} /> {/* Correct icon usage */}
                    </div>


                </div>
                <a href="#">Categories</a>
                <a href="#">Website Builders</a>
                <a href="#">Today's Deals</a>

            </div>
        </div>
    );
}

export default NavBar;

