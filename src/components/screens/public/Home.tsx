import React from 'react'
import ScrollTop from '../../minors/ScrollTop'
import ProductScroller from '../../minors/ProductScroller'
import CatProduct from '../../minors/CatProduct'
import BottomAbt from '../../minors/BottomAbt'

const MainHome = () => {
  return (
    <React.Fragment>
        <ScrollTop/>
        <ProductScroller/>
        <CatProduct/>
        <BottomAbt/>
    </React.Fragment>
  )
}

export default MainHome