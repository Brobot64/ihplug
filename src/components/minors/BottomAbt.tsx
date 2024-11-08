import Link from 'next/link'
import React from 'react'

const BottomAbt = () => {
  return (
    <React.Fragment>
        <section className='text-abt flex-col'>
            <div className='wrap'>
                <h2>Add zest to your life with high quality
                smartphone accessories.</h2>
                <p>Digifon is a Canadian brand of consumer electronics headquartered in Mississauga, Ontario. Our products are
                sold online and through retail stores in North America, Caribbean Europe, Nigeria and other African nations.</p>
            </div>
            <Link href='/about' className='mt-2 no-underline pointer  bg-red-600 text-white p-2 rounded-md'>About Us</Link>
        </section>
    </React.Fragment>
  )
}

export default BottomAbt