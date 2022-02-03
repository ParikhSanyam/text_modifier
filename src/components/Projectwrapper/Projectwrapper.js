import React from 'react';
import Projectcard from '../Projectcard/Projectcard';
import "./Projectwrapper.scss";

function Projectwrapper(props) {
    return (
        <div className='project-main-wrapper container'>
            {props.projects.map((projects) => {
                return  <Projectcard projects={projects} key={props.sno}/>
            })}
        </div>
    );
}

export default Projectwrapper;