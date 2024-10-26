import React from 'react'
import { FiMap, FiPackage, FiSmile } from 'react-icons/fi';
import { AiOutlineX, AiOutlineInstagram, AiFillYoutube, AiOutlineFacebook } from 'react-icons/ai';
import { BiLogoFacebook } from 'react-icons/bi';

const TopWrapText = () => {
  return (
    <div className='top-wrap w-full bg-black !text-white'>
        <ul>
            <li>
                <a href=""><FiMap/> locate stores</a>
            </li>
            <li>
                <a href=""><FiPackage/> become a dealer</a>
            </li>
            <li>
                <a href=""><FiSmile/> collab with us</a>
            </li>
        </ul>

        <ul>
            <li>
                <a href=""><AiOutlineX size={24}/></a>
            </li>

            <li>
                <a href=""><BiLogoFacebook size={24}/></a>
            </li>

            <li>
                <a href=""><AiOutlineInstagram size={24}/></a>
            </li>

            <li>
                <a href=""><AiFillYoutube size={24}/></a>
            </li>
        </ul>
    </div>
  )
}

export default TopWrapText