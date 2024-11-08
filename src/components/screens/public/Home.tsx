import React from 'react'
import ScrollTop from '../../minors/ScrollTop'
import ProductScroller from '../../minors/ProductScroller'
import CatProduct from '../../minors/CatProduct'
import BottomAbt from '../../minors/BottomAbt'
import BottomHero from '../../minors/BottomHero'
import Reviews from '../../minors/Reviews'
import BlogPost from '../../minors/BlogPost'
import Faqs from '../../minors/Faqs'
import AvailableAndSocials from '../../minors/AvailableAndSocials'
import Newsletter from '../../minors/Newsletter'

const MainHome = () => {
  return (
    <React.Fragment>
        <ScrollTop/>
        <ProductScroller/>
        <CatProduct/>
        <BottomAbt/>
        <BottomHero />
        <Reviews />
        <BlogPost />
        <Faqs />
        <AvailableAndSocials />
        <Newsletter />
    </React.Fragment>
  )
}

export default MainHome