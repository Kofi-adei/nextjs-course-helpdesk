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
                    width={70}
                    quality={[100, 75]}
                    placeholder='blur'
                />
                <h1>Kofi Helpdesk</h1>
                <Link href='/'>Dashboard</Link>
                <Link href='/tickets'>Tickets</Link>
                <Link href='/tickets/create'>Create</Link>
            </nav>
        </>
    );
};

export default Navbar;