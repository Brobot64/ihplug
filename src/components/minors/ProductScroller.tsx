import Link from 'next/link'
import React from 'react'
import earbudimg from '@/public/earpodcyb.jpg';

const ProductScroller = () => {
  return (
    <React.Fragment>
        <section className="scroller-product">
            <span className="navg">-</span>
            <div className="scrolls scroll-none">
                <div className="product-item" style={{ 
                    backgroundImage: `url(/earpodcyb.jpg)`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    // transition: 'background-image 0.5s ease-in-out',
                }}>
                    <div className='texty'>
                        <Link href='/'>
                            <h2>TWS Earbuds</h2>
                        </Link>
                        <p>20 products</p>
                    </div>
                    <span className="overlay"></span>
                </div>

                <div className="product-item" style={{ 
                    backgroundImage: `url(/bank.jpg)`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    // transition: 'background-image 0.5s ease-in-out',
                }}>
                    <div className='texty'>
                        <Link href='/'>
                            <h2>Power Bank</h2>
                        </Link>
                        <p>20 products</p>
                    </div>
                    <span className="overlay"></span>
                </div>

                <div className="product-item" style={{ 
                    backgroundImage: `url(/earpodcyb.jpg)`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    // transition: 'background-image 0.5s ease-in-out',
                }}>
                    <div className='texty'>
                        <Link href='/'>
                            <h2>TWS Earbuds</h2>
                        </Link>
                        <p>20 products</p>
                    </div>
                    <span className="overlay"></span>
                </div>

                <div className="product-item" style={{ 
                    backgroundImage: `url(/speaker.png)`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    // transition: 'background-image 0.5s ease-in-out',
                }}>
                    <div className='texty'>
                        <Link href='/'>
                            <h2>Speaker</h2>
                        </Link>
                        <p>20 products</p>
                    </div>
                    <span className="overlay"></span>
                </div>

                <div className="product-item" style={{ 
                    backgroundImage: `url(/earbudnn.jpg)`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    // transition: 'background-image 0.5s ease-in-out',
                }}>
                    <div className='texty'>
                        <Link href='/'>
                            <h2>TWS Earbuds</h2>
                        </Link>
                        <p>20 products</p>
                    </div>
                    <span className="overlay"></span>
                </div>

                <div className="product-item" style={{ 
                    backgroundImage: `url(/earpodcyb.jpg)`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    // transition: 'background-image 0.5s ease-in-out',
                }}>
                    <div className='texty'>
                        <Link href='/'>
                            <h2>TWS Earbuds</h2>
                        </Link>
                        <p>20 products</p>
                    </div>
                    <span className="overlay"></span>
                </div>

                <div className="product-item" style={{ 
                    backgroundImage: `url(/charger.png)`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    // transition: 'background-image 0.5s ease-in-out',
                }}>
                    <div className='texty'>
                        <Link href='/'>
                            <h2>Charger</h2>
                        </Link>
                        <p>10 products</p>
                    </div>
                    <span className="overlay"></span>
                </div>

                <div className="product-item" style={{ 
                    backgroundImage: `url(/earpodcyb.jpg)`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    // transition: 'background-image 0.5s ease-in-out',
                }}>
                    <div className='texty'>
                        <Link href='/'>
                            <h2>IhPlug Earbuds</h2>
                        </Link>
                        <p>20 products</p>
                    </div>
                    <span className="overlay"></span>
                </div>

                <div className="product-item" style={{ 
                    backgroundImage: `url(/earbudnn.jpg)`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    // transition: 'background-image 0.5s ease-in-out',
                }}>
                    <div className='texty'>
                        <Link href='/'>
                            <h2>TWS Earbuds</h2>
                        </Link>
                        <p>20 products</p>
                    </div>
                    <span className="overlay"></span>
                </div>

                <div className="product-item" style={{ 
                    backgroundImage: `url(/earpodcyb.jpg)`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    // transition: 'background-image 0.5s ease-in-out',
                }}>
                    <div className='texty'>
                        <Link href='/'>
                            <h2>TWS Earbuds</h2>
                        </Link>
                        <p>20 products</p>
                    </div>
                    <span className="overlay"></span>
                </div>
            </div>
            <span className="navg">+</span>
        </section>
    </React.Fragment>
  )
}

export default ProductScroller