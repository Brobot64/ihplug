import React from 'react'
import { CiSquareChevLeft, CiSquareChevRight } from 'react-icons/ci'

const Reviews = () => {
    return (
        <section className='flex flex-col mx-6 my-8 prev-category'>
            <p className='font-bold text-2xl '>See what our customers said</p>
            <div className='flex gap-4 mx-auto items-center slide-list scroll-none flex-shrink-0'>
                    
                <CiSquareChevLeft className='w-10 h-10 cursor-pointer' />
                
                <div className='justify-center items-center flex flex-col shadow-2xl rounded-md w-48'>
                    <img src="/red-rating.jpg" alt="" />
                    <div className='flex gap-2'>
                        <img src="/black-round.jpg" alt="" />
                        <div>
                            <h2 className='font-semibold'>Jude</h2>
                            <p className='text-sm'>Sep 18, 2024</p>
                        </div>
                    </div>
                    <p className='text-sm'>Hope it works well/fine</p>
                </div>
                
                <div className='justify-center p-2 items-center flex flex-col shadow-2xl rounded-md w-48'>
                    <img src="/red-rating.jpg" alt="" />
                    <div className='flex gap-2'>
                        <img src="/black-round.jpg" className='w-7' alt="" />
                        <div>
                            <h2 className='font-semibold text-sm'>Chukwuebuka Ugwu</h2>
                            <p className='text-sm'>Sep 6, 2024</p>
                        </div>
                    </div>
                    <p className='text-sm'>I love this earbud. It's very handy and portable. The bass is mind blowing Digifon... <br /><a className='underline' href="">See more</a> </p>
                </div>
                
                <div className='justify-center p-2 items-center flex flex-col shadow-2xl rounded-md w-48'>
                    <img src="/red-rating.jpg" alt="" />
                    <div className='flex gap-2'>
                        <img src="/black-round.jpg" className='w-8' alt="" />
                        <div>
                            <h2 className='font-semibold text-sm'>Adelumola Abayomi</h2>
                            <p className='text-sm'>Aug 24, 2024</p>
                        </div>
                    </div>
                    <p className='text-sm'>Excellent buds. I have been trying to get a quality earbud that isn't too... <br /><a className='underline' href="">See more</a> </p>
                </div>
                
                <div className='justify-center p-2 items-center flex flex-col shadow-2xl rounded-md w-48'>
                    <img src="/red-rating.jpg" alt="" />
                    <div className='flex gap-2'>
                        <img src="/black-round.jpg" className='w-8' alt="" />
                        <div>
                            <h2 className='font-semibold text-sm'>Kingsley</h2>
                            <p className='text-sm'>Aug 24, 2024</p>
                        </div>
                    </div>
                    <p className='text-sm'>I love this speaker! Premium sound quality - the sound clarity is mind blowing; you c... <br /><a className='underline' href="">See more</a> </p>
                </div>

                <CiSquareChevRight className='w-10 h-10 cursor-pointer' />
            </div>
        </section>
    )
}

export default Reviews