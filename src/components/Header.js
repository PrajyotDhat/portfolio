import React from 'react';
import Logo from '../assests/logo.jpeg'

const Header = () => {
    return <header className='py-8'>
        <div className='container mx-auto'>
            <div className="flex justify-between items-center">
                <a className="h-[84px] w-[84px]" href='#'>
                    <img src={Logo} className='rounded-full' alt="" />
                </a>
                <a href="https://github.com/PrajyotDhat">
                    <button className='btn btn-sm'>Work with me</button>
                </a>
            </div>
        </div>
    </header>;
};

export default Header;