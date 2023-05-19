import React, { useState } from 'react'
import "./qualification.css"

const Qualification = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index)
    };

    return (

        <section className='qualification section' id='qualification'>
            <h2 className='section__title'>Qualification</h2>
            <span className='section__subtitle'>My Front-end Journey</span>

            <div className='qualification__container container'>
                <div className='qualification__tabs'>

                    <div className={toggleState === 1 ? 'qualification__button qualification__active button--flex' : "qualification__button button--flex"} onClick={()=> toggleTab(1)}>
                        <i className='uil uil-graduation-cap qualification__icon'></i>{" "} Education
                    </div>

                    <div className={toggleState === 2 ? 'qualification__button qualification__active button--flex' : "qualification__button button--flex"} onClick={()=> toggleTab(2)}>
                        <i className='uil uil-briefcase-alt qualification__icon'></i>{" "} Experience
                    </div>

                </div>

                <div className='qualification__sections'>
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className='qualification__data'>

                            <div>
                                <h3 className='qualification__title'>Orientation Phase</h3>
                                <span className='qualification__subtitle'>Fontys University S1</span>
                                <div className='qualification__calendar'>
                                    <i className='uil uil-calendar-alt'></i>Sep2021-Jan2021
                                </div>
                            </div>

                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>

                        </div>

                        <div className='qualification__data'>
                            <div></div>

                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                            <div>
                                <h3 className='qualification__title'>Media Design</h3>
                                <span className='qualification__subtitle'>Fontys University S2</span>
                                <div className='qualification__calendar'>
                                    <i className='uil uil-calendar-alt'></i>Feb2022-June2022
                                </div>
                            </div>
                        </div>

                        <div className='qualification__data'>

                            <div>
                                <h3 className='qualification__title'>Media Design</h3>
                                <span className='qualification__subtitle'>Fontys University S3</span>
                                <div className='qualification__calendar'>
                                    <i className='uil uil-calendar-alt'></i>Sep2022-Jan2022
                                </div>
                            </div>

                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>

                        </div>

                        <div className='qualification__data'>
                            <div></div>

                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                            <div>
                                <h3 className='qualification__title'>Smart Mobile</h3>
                                <span className='qualification__subtitle'>Fontys University S4</span>
                                <div className='qualification__calendar'>
                                    <i className='uil uil-calendar-alt'></i>Feb2022-Present
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className='qualification__data'>

                            <div>
                                <h3 className='qualification__title'>Entry Level Frontend Course</h3>
                                <span className='qualification__subtitle'>Bulgaria in Person</span>
                                <div className='qualification__calendar'>
                                    <i className='uil uil-calendar-alt'></i> June 2020
                                </div>
                            </div>

                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>

                        </div>

                        <div className='qualification__data'>
                            <div></div>

                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                            <div>
                                <h3 className='qualification__title'>JavaScript Course</h3>
                                <span className='qualification__subtitle'>Eindhoven Online</span>
                                <div className='qualification__calendar'>
                                    <i className='uil uil-calendar-alt'></i> March 2022
                                </div>
                            </div>
                        </div>

                        <div className='qualification__data'>

                            <div>
                                <h3 className='qualification__title'>React Course</h3>
                                <span className='qualification__subtitle'>Eindhoven Online</span>
                                <div className='qualification__calendar'>
                                    <i className='uil uil-calendar-alt'></i> Feb2023-Present
                                </div>
                            </div>

                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Qualification