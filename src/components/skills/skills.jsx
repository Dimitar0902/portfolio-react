import React from 'react';
import "./skills.css";
import Frontend from './frontend';
import UIUX from './uiux';

const Skills = () =>{
    return(
        <section className='skills section' id='skills'>
            <h2 className='section__title'>Skills</h2>
            <span className='section__subtitle'>My technical Level</span>

            <div className='skills__container container grid'>
                <Frontend />

                <UIUX />
            </div> 
        </section>
    )
}

export default Skills