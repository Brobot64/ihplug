import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsStar, BsStarFill } from 'react-icons/bs'

const CatProduct = () => {
  return (
    <React.Fragment>
        <section className='prev-category'>
            <h1>Earbuds</h1>
            <div className="slide-list scroll-none">
                <div className="product">
                    <div className="best-selling"/>
                    <Image
                        src='/earpod2.png'
                        width={100}
                        height={100}
                        alt='product-image'
                    />
                    <div className="color-variant">
                        <span></span>
                        <span></span>
                    </div>
                    <Link href='/'>
                        <p>BoomAir HiFi3 TWS Active Noise Cancelling  Earbuds - digifon</p>
                    </Link>
                    <div className="ratings">
                    {/* #ffc83d<BsStarFill color='yellow'/> */}
                        <div className="stars">⭐⭐⭐⭐ </div>
                        <p>(20)</p>
                    </div>

                    <p className="price">&#8358; 85,000.00</p>
                </div>

                <div className="product">
                    <Image
                        src='/earbudnn.jpg'
                        width={100}
                        height={100}
                        alt='product-image'
                    />
                    <div className="color-variant">
                        <span></span>
                        <span></span>
                    </div>
                    <Link href='/'>
                        <p>BoomAir Bass TWS Environmental Noise Cancelling Earbuds - Dual Mic, Bluetooth 5.3 USB-C - digifon</p>
                    </Link>
                    <div className="ratings">
                    {/* #ffc83d<BsStarFill color='yellow'/> ₦*/}
                        <div className="stars">⭐⭐⭐⭐ </div>
                        <p>(7)</p>
                    </div>

                    <p className="price">&#8358; 23,499.00</p>
                </div>

                <div className="product">
                    <Image
                        src='/earpod3.png'
                        width={100}
                        height={100}
                        alt='product-image'
                    />
                    <div className="color-variant">
                        <span></span>
                        <span></span>
                    </div>
                    <Link href='/'>
                        <p>BoomAir HiFi3 TWS Noise Cancelling  Earbuds - digifon</p>
                    </Link>
                    <div className="ratings">
                    {/* #ffc83d<BsStarFill color='yellow'/> */}
                        <div className="stars">⭐⭐⭐⭐ </div>
                        <p>(61)</p>
                    </div>

                    <p className="price">&#8358; 35,378.08</p>
                </div>

                <div className="product">
                    <Image
                        src='/earpod4.png'
                        width={100}
                        height={100}
                        alt='product-image'
                    />
                    <div className="color-variant">
                        <span></span>
                        <span></span>
                    </div>
                    <Link href='/'>
                        <p>BoomAir HiFi2 TWS Environmental Noise Cancelling Premium Earbuds - digifon</p>
                    </Link>
                    <div className="ratings">
                    {/* #ffc83d<BsStarFill color='yellow'/> */}
                        <div className="stars">⭐⭐⭐⭐ </div>
                        <p>(20)</p>
                    </div>

                    <p className="price">&#8358; 85,000.00</p>
                </div>

                <div className="product">
                    <div className="new-arrival"/>
                    <Image
                        src='/earpodcyb.jpg'
                        width={100}
                        height={100}
                        alt='product-image'
                    />
                    <div className="color-variant">
                        <span></span>
                        <span></span>
                    </div>
                    <Link href='/'>
                        <p>BoomAir HiFi3 TWS Active Noise Cancelling  Earbuds - digifon</p>
                    </Link>
                    <div className="ratings">
                    {/* #ffc83d<BsStarFill color='yellow'/> */}
                        <div className="stars">⭐⭐⭐⭐ </div>
                        <p>(20)</p>
                    </div>

                    <p className="price">&#8358; 85,000.00</p>
                </div>
            </div>
        </section>
    </React.Fragment>
  )
}

export default CatProduct