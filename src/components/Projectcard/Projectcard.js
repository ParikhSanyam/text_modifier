import React from 'react';
import './Projectcard.scss';

function Projectcard({projects}) {
    return (
        <div className='project-card-wrapper mt-4'>
            <div className='card'>
                <div className='img-wrapper'>
                <img src={projects.imagee} alt="imageee"/>
                </div>
                <div className='card-body d-flex justify-content-center align-items-center flex-column'>
                    <h4>{projects.name}</h4>
                    <p className='text-center text-secondary'>{projects.desc}</p>
                    <button className='cvbtn mb-2'>View More</button>
                </div>
            </div>
        </div>
    );
}

export default Projectcard;