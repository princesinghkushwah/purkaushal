import React from 'react'
import Header from './Header'
import PromisesCard from './PromisesCard'
import Login from './Login'
import Carousel from '../components/Carousel'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
import FollowUs from './FollowUs'
import PopularCategory from './PopularCategory'
import Trending from './Trending'
import Reviews from './Reviews'
import Ourstorycomp from './ourstorycomp'
import CollectionHover from './CollectionHover'
import Menu from './Menu'
import collection from '../images/collection.png'
import { useNavigate } from 'react-router-dom'
import Cover1 from '../images/Cover 1.png'
import Cover2 from '../images/Cover 2.png'
import Cover3 from '../images/Cover 3.png'
import Cover4 from '../images/Cover 4.png'
import Cover5 from '../images/Cover 5.png'
import Cover6 from '../images/Cover 6.png'
import Cover7 from '../images/Cover 7.png'
import Cover8 from '../images/Cover 8.png'
import Cover9 from '../images/Cover 8.png'
import Cover10 from '../images/Cover 10.png'

function Homepage() {
  const navigation = useNavigate()
  return (
    <div className='bgcolor' style={{}}>
        <Header/>
        <Menu/>
        
       
        <div className="flex lg:hidden overflow-x-scroll over py-5 gap-2 px-4">
        <img onClick={()=>navigation('/collection')} className='w-20 shadow-lg' src={Cover1}></img>
        <img onClick={()=>navigation('/collection')} className='w-20 shadow-lg' src={Cover2}></img>
        <img onClick={()=>navigation('/collection')} className='w-20 shadow-lg' src={Cover3}></img>
        <img onClick={()=>navigation('/collection')} className='w-20 shadow-lg' src={Cover4}></img>
        <img onClick={()=>navigation('/collection')} className='w-20 shadow-lg' src={Cover5}></img>
        <img onClick={()=>navigation('/collection')} className='w-20 shadow-lg' src={Cover6}></img>
        <img onClick={()=>navigation('/collection')} className='w-20 shadow-lg' src={Cover7}></img>
        <img onClick={()=>navigation('/collection')} className='w-20 shadow-lg' src={Cover8}></img>
        <img onClick={()=>navigation('/collection')} className='w-20 shadow-lg' src={Cover9}></img>
        <img onClick={()=>navigation('/collection')} className='w-20 shadow-lg' src={Cover10}></img>
        
        
    </div>
    <div style={{width:'98.5%'}} className='lg:mt-4'>
    <img
            className="lg:w-4/5 h-20 lg:ml-40  border border-gray"
            style={{ borderRadius: 10}}
            src={collection}
          ></img></div>
        <Carousel/>
        <Ourstorycomp/>
        <PopularCategory/>
        <div className='w-full lg:my-16 my-16'>
          <img  src='https://kinclimg8.bluestone.com/f_webp,c_scale,w_2380,b_rgb:ffffff/product/dynamic_banner/desktop/home/1668446147749-IVOIRE_Desktop-banner_1190x386pxl_final.jpg'></img>
        </div>
        <PromisesCard/>
        <Trending/>
        <Reviews/>
        <FollowUs/>
        <Footer/>
        
        
      
    </div>
  )
}

export default Homepage
