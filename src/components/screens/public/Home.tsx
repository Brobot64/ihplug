import Marqee from '@/src/components/minors/Marqee'
import React from 'react'
import TopWrapText from '../../minors/TopWrapText'
import Header from '../../minors/Header'
import ScrollTop from '../../minors/ScrollTop'
import ProductScroller from '../../minors/ProductScroller'
import CatProduct from '../../minors/CatProduct'
import BottomAbt from '../../minors/BottomAbt'

const MainHome = () => {
  return (
    <React.Fragment>
        <Marqee/>
        <TopWrapText/>
        <Header/>
        <ScrollTop/>
        <ProductScroller/>
        <CatProduct/>
        <BottomAbt/>
    </React.Fragment>
  )
}

export default MainHome