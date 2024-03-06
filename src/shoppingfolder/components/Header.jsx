import React from 'react'
import NavBar from './NavBar'

const Header = () => {
    return (
        <div>
            <NavBar />
            <h1 className='heading'>Best Website builders in the US</h1>
            <hr />
            <div className="subHeading">
                <h6 >
                    <div className='symbol'>
                        <img src="./assets/mark.png" alt="" />
                        <label>Last Updated &nbsp;- &nbsp;</label>
                        <input type="date" />
                    </div>


                </h6>
                &nbsp;&nbsp;
                <h6>
                    <div className='symbol'>
                        <img src="./assets/exclam.png" alt="" />
                        <label> &nbsp;Advertising Disclosure  </label>
                    </div>
                </h6>
                <div class="select-container">

                    <select>
                        <option value="1">Top Relevant</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                        <option value="4">Option 4</option>
                    </select>
                </div>





            </div>
            <hr />
            <div className='subNav'>
                <a href="#">Tools</a>
                <a href="#">AWS Builder</a>
                <a href="#">Build Supplies</a>
                <a href="#">Tooling</a>
                <a href="#">BuleHosting</a>
            </div>


        </div>
    )
}

export default Header
