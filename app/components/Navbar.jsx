import React from 'react';
import Logo from './dojo-logo.png';

//Component imports
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <>
            <nav>
                <Image
                    src={Logo}
                    alt='helpdesk logo'
                    className='logo'
                    quality={[100, 75]}
                    placeholder='blur'
                />
                <h1>Kofi Helpdesk</h1>
                <Link href='/' className='navlinks'>Dashboard</Link>
                <Link href='/tickets' className='navlinks'>Tickets</Link>
                <Link href='/tickets/create' className='navlinks'>Create</Link>
            </nav>
        </>
    );
};

export default Navbar;