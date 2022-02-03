import React from 'react';
import Projectwrapper from '../Projectwrapper/Projectwrapper';
// import sample from '../../assets/image/Omnivus.png';

function Otherprojects(props) {
    let projects = [
        {
            sno: '1',
            imagee: 'http://www.cypresswebindia.com/img/2.jpg',
            name: 'Omnivous',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis dapibus massa, sed gravida dolor. Nullam pretium ullamcorper libero et hendrerit. Maecenas feugiat lectus eget ipsum varius, sed pharetra mi condimentum.',
        },
        {
            sno: '2',
            imagee: 'http://www.cypresswebindia.com/img/2.jpg',
            name: 'Wankee',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis dapibus massa, sed gravida dolor. Nullam pretium ullamcorper libero et hendrerit. Maecenas feugiat lectus eget ipsum varius, sed pharetra mi condimentum.'
        },
        {
            sno: '3',
            name: 'Hamela',
            imagee: 'http://www.cypresswebindia.com/img/2.jpg',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis dapibus massa, sed gravida dolor. Nullam pretium ullamcorper libero et hendrerit. Maecenas feugiat lectus eget ipsum varius, sed pharetra mi condimentum.'
        },
        {
            sno: '4',
            imagee: 'http://www.cypresswebindia.com/img/2.jpg',
            name: 'Cardone',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis dapibus massa, sed gravida dolor. Nullam pretium ullamcorper libero et hendrerit. Maecenas feugiat lectus eget ipsum varius, sed pharetra mi condimentum.'
        },
    ];

    return (
        <div>
            <Projectwrapper projects={projects}/>
            {/* <img src={sample}/> */}
        </div>
    );
}

export default Otherprojects;