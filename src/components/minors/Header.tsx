import Link from 'next/link'
import React from 'react'
import Image from 'next/image';

import { FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi';
import TopWrapText from './TopWrapText';
import Marqee from './Marqee';

const Header = () => {
    return (
        <>
            <Marqee />
            <TopWrapText />
            <header className='headings'>
                <Link href='/'>
                    <Image
                        src="/digifon-full-logo-dark.png"
                        width={160}
                        height={160}
                        alt="Picture of the author"
                    />

                </Link>

                <nav>
                    <a href="">new arrivals</a>
                    <a href="">clearance</a>
                    <a href="">Earbuds</a>
                    <a href="">speakers</a>
                    <a href="">Power banks</a>
                    <a href="">Chargers</a>
                    <a href="">cables</a>
                    <a href="">special offers</a>
                    <a href="">cables</a>
                    <a href="">special offers</a>
                </nav>

                <div className="profile">
                    <FiSearch size={29} />
                    <FiUser size={29} />

                    <div className="pay-cart">
                        <div className='relative'>
                            <span className='test absolute flex items-center justify-center bg-red-600 text-white text-[10px] w-[20px] h-[20px] text-center rounded-full font-[600] -top-[5px] -right-[10px]'>
                                <span>0</span>
                            </span>
                            <FiShoppingCart size={29} />
                        </div>
                        <div>
                            <p>subtotal</p>
                            <h3>&#8358; 0.00</h3>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header