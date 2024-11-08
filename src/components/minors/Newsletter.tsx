import React from 'react'

const Newsletter = () => {
    return (
        <section className='flex flex-col items-center my-8'>
            <h1 className='font-bold text-xl'>Subscribe for exclusive deals!</h1>
            <p className='my-2 text-sm'>Join the list for exclusive offers, original stories, events and more</p>

            <div className='bg-[#F5F5F5] rounded-sm px-2 my-3'>
                <input type="email" name="email"
                placeholder='Email'
                className='bg-transparent p-3 outline-none'
                id="" />

                <button className='bg-[#E30505] text-white rounded-sm p-2 pr-3'>Subscribe</button>
            </div>
        </section>
    )
}

export default Newsletter