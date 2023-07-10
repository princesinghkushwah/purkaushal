import React from 'react'
import {HashRouter, Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage'
import OurStory from './pages/OurStory'
import Collection from './pages/Collection'
import Faq from './pages/Faq'
import TermsAndConditions from './pages/TermsAndConditions'
import ReturnAndExchange from './pages/ReturnAndExchange'
import ShiptingPolicy from './pages/ShiptingPolicy'
import PrivacyPolicy from './pages/PrivacyPolicy'
import ContactUs from './pages/ContactUs'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import OrderDetail from './pages/OrderDetail'
import SignUp from './pages/SignUp'
import Search from './pages/Search'
import NosePin from './pages/NosePin'
import Rings from './pages/Rings'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/ourStory' element={<OurStory/>}></Route>
        <Route path='/Cart' element={<Cart/>}></Route>
        <Route path='/collection' element={<Collection/>}></Route>
        <Route path='/TermsAndConditions' element={<TermsAndConditions/>}></Route>
        <Route path='/ShiptingPolicy' element={<ShiptingPolicy/>}></Route>
        <Route path='/PrivacyPolicy' element={<PrivacyPolicy/>}></Route>
        <Route path='/contactUs' element={<ContactUs/>}></Route>
        <Route path='/ReturnAndExchange' element={<ReturnAndExchange/>}></Route>
        <Route path='/Faq' element={<Faq/>}></Route>
        <Route path='/productDetail' element={<ProductDetail/>}></Route>
        <Route path='/OrderDetail' element={<OrderDetail/>}></Route>
        <Route path='/SignUp' element={<SignUp/>}></Route>
        <Route path='/Search' element={<Search/>}></Route>
        <Route path='/NosePin' element={<NosePin/>}></Route>
        <Route path='/Rings' element={<Rings/>}></Route>

      </Routes>
    </HashRouter>
  )
}

export default App
