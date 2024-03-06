import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='foot'>


                <div>
                    <p className="head">Categories</p>
                    <p >Web Builder</p>
                    <p >Hosting</p>
                    <p >Data Center</p>
                    <p >Robotic-Automation</p>
                </div>



                <div>
                    <p className="head">Contact</p>
                    <p >Privacy Policy</p>
                    <p >Terms Of Services</p>
                    <p >Categories</p>
                    <p >About</p>
                </div>


                <div >
                    <select className='option'>
                        <option value="option 1">United States</option>
                        <option value="option 2">option 2</option>
                        <option value="option 3">option 3</option>
                        <option value="option 4">option 4</option>
                        <option value="option 5">option 5</option>
                    </select>

                </div>


            </div>
        </>

    )

}

export default Footer
