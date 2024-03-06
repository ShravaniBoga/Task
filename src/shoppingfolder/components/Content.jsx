import React from "react";
import classes from "./Content.module.css";

const Content = () => {
    return (
        <>
            <div className={classes.main}>
                <div>
                    <div className={classes.choosy}>
                        <img src="./assets/cup.png" alt="" />
                        <h5>Best Choice</h5>
                    </div>

                    <img src="./assets/comp.png" alt="image1" />
                </div>
                <div className={classes.content}>
                    <p><b>WixPro 72-Inch Responsive Website Builder-</b> Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)</p>
                    <p><b> Main highlights</b></p>
                    <p>[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides</p>
                    <p className={classes.show}>Show more </p>
                </div>


                <div className={classes.rating}>
                    <div className={classes.semirating}>
                        <center>
                            <p>9.8</p>
                            <p>Exceptional</p>
                            <img src="./assets/img1.png" alt="image1" />
                        </center>
                    </div>
                    <button className={classes.view}>View </button>
                </div>
            </div>


            <div className={classes.main}>
                <div>
                    <div className={classes.choosy}>
                        <img src="./assets/diamond.png" alt="" />
                        <h5>Best Value</h5>
                    </div>

                    <img src="./assets/comp.png" alt="image1" />
                </div>
                <div className={classes.content}>
                    <p><b>SiteCraft 68-Inch Ultimate Web Design Studio-</b>  Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)</p>
                    <p><b> Main highlights</b></p>
                    <p>[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.</p>
                    <p className={classes.show}>Show more </p>
                </div>


                <div>
                    <div className={classes.semirating}>
                        <center>
                            <p>9.5</p>
                            <p>Excellent</p>
                            <img src="./assets/img2.png" alt="image1" />
                        </center>
                    </div>
                    <button className={classes.view}>View </button>
                </div>
            </div >

            <div className={classes.main}>
                <div>
                    <img src="./assets/comp.png" alt="image1" />
                </div>
                <div className={classes.content}>
                    <p><b>WixPro 72-Inch Responsive Website Builder-</b> Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)</p>
                    <p><b> Main highlights</b></p>
                    <p>[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides</p>
                    <p className={classes.show}>Show more </p>
                </div>


                <div>
                    <div className={classes.semirating}>
                        <center>
                            <p>9.3</p>
                            <p>Exceptional</p>
                            <img src="./assets/img3.png" alt="image1" />
                        </center>
                    </div>

                    <button className={classes.view}>View </button>
                </div>
            </div >




            <div className={classes.main}>
                <div>
                    <img src="./assets/comp.png" alt="image1" />
                </div>
                <div className={classes.content}>
                    <p><b>CDK Resposive Builder: </b> An extensive library of widgets and apps, and detailed step-by-step guides</p>
                    <p><b> Main highlights</b></p>
                    <p>Why we love it</p>
                    <li>Documentation</li>
                    <li>Easy Use</li>
                    <li>Out of box</li>
                    <p className={classes.show}>Show more </p>
                </div>


                <div>
                    <div className={classes.semirating}>
                        <center>
                            <p>9.1</p>
                            <p>Very Good</p>
                            <img src="./assets/img4.png" alt="image1" />
                        </center>
                    </div>
                    <button className={classes.view}>View </button>

                </div>
            </div >

        </>
    );

};

export default Content;
