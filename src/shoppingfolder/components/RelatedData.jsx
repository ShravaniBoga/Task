import React from 'react'
import classes from "./RelatedData.module.css"

const RelatedData = () => {
    return (
        <>

            <div>


                <h1>Related deals you might like for</h1>


                <div className={classes.total}>


                    <div className={classes.RelatedData}>
                        <div>
                            <center>
                                <img src="./assets/comp.png" alt="" />
                            </center>
                            <p className={classes.offer}>20% Off &nbsp;&nbsp;&nbsp; Limited time </p>
                            <h4><b>Webbuilder 1</b></h4>
                            <div>
                                <p>Computer  Modern clasic with wix</p>
                                <p> support</p>

                                <div className={classes.tag}>
                                    <p><b>$39.96</b></p> &nbsp;&nbsp;&nbsp;
                                    <h6 className={classes.cost}>$49.96</h6>&nbsp;&nbsp;&nbsp;
                                    <h6 className={classes.off}>(20% Off)</h6>
                                </div>
                            </div>
                            <button className={classes.view}>View </button>

                        </div>
                    </div>













                    <div className={classes.RelatedData}>
                        <div>
                            <center>
                                <img src="./assets/comp.png" alt="" />
                            </center>
                            <p className={classes.offer}>20% Off &nbsp;&nbsp;&nbsp; Limited time </p>
                            <h4><b>Webbuilder 1</b></h4>
                            <div>
                                <p>Computer  Modern clasic with wix</p>
                                <p> support</p>

                                <div className={classes.tag}>
                                    <p><b>$39.96</b></p> &nbsp;&nbsp;&nbsp;
                                    <h6 className={classes.cost}>$49.96</h6>&nbsp;&nbsp;&nbsp;
                                    <h6 className={classes.off}>(20% Off)</h6>
                                </div>
                            </div>
                            <button className={classes.view}>View </button>

                        </div>
                    </div>










                    <div className={classes.RelatedData}>
                        <div>
                            <center>
                                <img src="./assets/comp.png" alt="" />
                            </center>
                            <p className={classes.offer}>20% Off &nbsp;&nbsp;&nbsp; Limited time </p>
                            <h4><b>Webbuilder 1</b></h4>
                            <div>
                                <p>Computer  Modern clasic with wix</p>
                                <p> support</p>

                                <div className={classes.tag}>
                                    <p><b>$39.96</b></p> &nbsp;&nbsp;&nbsp;
                                    <h6 className={classes.cost}>$49.96</h6>&nbsp;&nbsp;&nbsp;
                                    <h6 className={classes.off}>(20% Off)</h6>
                                </div>
                            </div>
                            <button className={classes.view}>View </button>

                        </div>
                    </div>




                </div >



                <div className={classes.signup}>
                    <h3>Sign up and get exclusive special deals</h3>
                    <button className={classes.button}>Sign Up </button>
                </div>



            </div>

        </>
    )
}

export default RelatedData
