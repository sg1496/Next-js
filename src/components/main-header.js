import Link from 'next/link'
import React from 'react'
import './header.css'
import Image from 'next/image'
import platerLogo from '../../public/plater1.jpg'

const MainHeader = () => {
    return (
        <header className='main'>
            <Link className='link' href='/'>
                <div style={{ display: 'flex', alignItems: "center" }}>
                    <Image className='logo_img' src={platerLogo} priority></Image>
                    <h1 style={{ color: '#ffffff', padding: "0 15px" }}> Barbeque Food</h1>
                </div>
            </Link>

            <nav>
                <ul className='topbar'>
                    <li>
                        <Link className='link' href='/about'><p>Browse Meals</p></Link>
                    </li>
                    <li>
                        <Link className='link' href='/contact'><p>Foodies Community</p></Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader