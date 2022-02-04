import React from 'react';
import './Footer.scss';

function Footer(props) {
    return (
        <>
            <footer className='bg-dark'>
                <div className='footer-wrapper py-3'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-6 col-12'>
                                <div className='social-icon-box'>
                                    <ul className='d-inline-flex list-unstyled mb-0'>
                                        <li className='mx-2'>
                                            <a href='/'><i className='fa fa-facebook'></i></a>
                                        </li>
                                        <li className='mx-2'>
                                            <a href='/'><i className='fa fa-instagram'></i></a>
                                        </li>
                                        <li className='mx-2'>
                                            <a href='/'><i className='fa fa-linkedin'></i></a>
                                        </li>
                                        <li className='mx-2'>
                                            <a href='/'><i className='fa fa-whatsapp'></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-lg-6 col-12'>
                                <h6>@copyright 2020 to SamTech</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>   
        </>
    );
}

export default Footer;