import React from 'react';
import { Link } from 'react-router-dom';
import footerBg from '../../assets/images/footer.png'

const Footer = () => {
    return (
        <footer class=" p-10  text-black bg-cover bg-center" style={{ backgroundImage: `url(${footerBg})` }}>
            <div className='footer  md:justify-around'>
                <div>
                    <span class="footer-title">Services</span>
                    <Link to='/' class="link link-hover">Branding</Link>
                    <Link to='/' class="link link-hover">Design</Link>
                    <Link to='/' class="link link-hover">Marketing</Link>
                    <Link to='/' class="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span class="footer-title">Company</span>
                    <Link to='/' class="link link-hover">About us</Link>
                    <Link to='/' class="link link-hover">Contact</Link>
                    <Link to='/' class="link link-hover">Jobs</Link>
                    <Link to='/' class="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span class="footer-title">Legal</span>
                    <Link to='/' class="link link-hover">Terms of use</Link>
                    <Link to='/' class="link link-hover">Privacy policy</Link>
                    <Link to='/' class="link link-hover">Cookie policy</Link>
                </div>
            </div>
            <p className='text-center mt-48'>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
        </footer>
    );
};

export default Footer;