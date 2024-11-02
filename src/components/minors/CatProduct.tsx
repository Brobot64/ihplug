import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsStar, BsStarFill } from 'react-icons/bs'

const CatProduct = () => {
    return (
        <React.Fragment >
            <div className='w-full flex flex-col'>
                <section className='prev-category'>
                    <h1>Earbuds</h1>
                    <div className="slide-list scroll-none">
                        <div className="product">
                            <div className="best-selling" />
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
                            <div className="new-arrival" />
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

                <section className='prev-category'>
                    <h1 className='text-2xl font-bold'>Speakers</h1>
                    <div className='flex justify-around slide-list scroll-none '>
                        <div className=' w-[300px]  flex flex-col flex-shrink-0'>
                            <img className='w-60' src="speakerboom.png" alt="" />
                            <Link href='/'>
                                <p className='text- font-semibold'>BoomMax Elite 30W Bluetooth Speaker - Powerful Sound, Tri-Bass EQ, IPX& Waterproof, 8-Hour Playtime, USB-C Charging - digifon</p>
                            </Link>
                            <div className="stars  flex">⭐⭐⭐⭐
                                <p className='text-gray-400'>(1)</p>
                            </div>
                            <p className="price">&#8358; 84,499.00</p>
                        </div>

                        <div className=' w-[300px]  flex flex-col flex-shrink-0'>
                            <img className='w-60' src="boom1.png" alt="" />
                            <div className="color-variant">
                                <span></span>
                                <span></span>
                            </div>
                            <Link href='/'>
                                <p className='text- font-semibold'>BoomS High Fidelity Smart 10W Bluetooth Speaker - digifon</p>
                            </Link>
                            <div className="stars  flex">⭐⭐⭐⭐
                                <p className='text-gray-400'>(214)</p>
                            </div>
                            <p className="price">&#8358; 37,240.32</p>
                        </div>

                        <div className=' w-[300px]  flex flex-col flex-shrink-0'>
                            <img className='w-60' src="boom2.png" alt="" />
                            <div className="color-variant">
                                <span className='bg-red-500 w-1 h-2'></span>
                                <span></span>
                            </div>
                            <Link href='/'>
                                <p className='text- font-semibold'>BoomQ 5W Mini Bluetooth Speaker - digifon</p>
                            </Link>
                            <div className="stars  flex">⭐⭐⭐⭐
                                <p className='text-gray-400'>(165)</p>
                            </div>
                            <p className="price">&#8358; 22,000.00</p>
                        </div>

                        <div className=' w-[300px]  flex flex-col flex-shrink-0'>
                            <img className='w-60' src="boom3.png" alt="" />
                            <p className='text- font-semibold'>BoomMax Siri Enables Bass Boost 20W Bluetooth Speaker - digifon</p>
                            <div className="stars  flex">⭐⭐⭐⭐
                                <p className='text-gray-400'>(166)</p>
                            </div>
                            <p className="price">&#8358; 65,100.00</p>
                        </div>
                    </div>
                </section>

                <section className='prev-category'>
                    <h1 className='text-2xl font-bold'>Power Banks</h1>
                    <div className='flex justify-around slide-list scroll-none '>
                        <div className=' w-[300px]  flex flex-col flex-shrink-0'>
                            <img className='w-60' src="bank4.png" alt="" />
                            <Link href='/'>
                                <p className='text- font-semibold'>Gorilla WX1 10,000mAh Super-fast Charging 22.5W Wired Power Bank - digifon</p>
                            </Link>
                            <div className="stars  flex">⭐
                                <p className='text-gray-400'>(0)</p>
                            </div>
                            <p className="price">&#8358; 18,000.00</p>
                        </div>

                        <div className=' w-[300px]  flex flex-col flex-shrink-0'>
                            <img className='w-60' src="bank2.png" alt="" />
                            <div className="color-variant">
                                <span></span>
                                <span></span>
                            </div>
                            <Link href='/'>
                                <p className='text- font-semibold'>X1 10,000mAh Fast Charging 12W Power Bank - Dual USB-A & USB-C Ports | Slim & Slim & Lightweight Design - digifon</p>
                            </Link>
                            <div className="stars  flex">⭐⭐⭐⭐
                                <p className='text-gray-400'>(p)</p>
                            </div>
                            <p className="price">&#8358; 14,060.32</p>
                        </div>

                        <div className=' w-[300px]  flex flex-col flex-shrink-0'>
                            <img className='w-60' src="bank2.png" alt="" />
                            <div className="color-variant">
                                <span className='bg-red-500 w-1 h-2'></span>
                                <span></span>
                            </div>
                            <Link href='/'>
                                <p className='text- font-semibold'>Gorilla X 10,000maAh Fast Charging 22.5W Power Bank | PD 3.0 & 3.0 - digifon</p>
                            </Link>
                            <div className="stars  flex">⭐⭐⭐⭐
                                <p className='text-gray-400'>(3)</p>
                            </div>
                            <p className="price">&#8358; 18,387.20</p>
                        </div>

                        <div className=' w-[300px]  flex flex-col flex-shrink-0'>
                            <img className='w-60' src="bank3.png" alt="" />
                            <p className='text- font-semibold'>Gorilla 1 10,000maAh Fast Charging 22.5W Qualcomm 3.0 Power Bank - digifon</p>
                            <div className="stars  flex">⭐⭐⭐⭐
                                <p className='text-gray-400'>(81)</p>
                            </div>
                            <p className="price">&#8358; 15,000.00</p>
                        </div>
                    </div>


                </section>

                <button className='border border-red-600 text-red-600 p-2 rounded-md font-semibold mx-auto'>View all</button>
            </div>
        </React.Fragment>
    )
}

export default CatProduct