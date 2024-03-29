import Main from '@/app/component/Main'
import Navbar from '@/app/component/Navbar'
import React from 'react'
import About from './component/About'
import Services from './component/Services'
import Foryou from './component/Foryou'
import App from './component/App'
import Reviews from './component/Reviews'
import Shop from './component/Shop'
import Faqs from './component/Faqs'
import Footer from './component/Footer'

const Home = () => {
  return (
    <div>
      <div className=' text-white bg-black h-auto'>
        <Navbar />
        <Main />
      </div>

      <div className=' text-black bg-white h-auto'>
        <About />
      </div>

      <div className=' text-white bg-black h-auto'>
        <Services />
      </div>

      <div className=' text-black bg-white h-auto'>
        <Foryou />
      </div>

      <div className=' text-white bg-black h-auto'>
       <App />
      </div>

      <div className=' text-black bg-white h-auto'>
        <Reviews />
      </div>
      <div className=' text-white bg-black h-auto'>
        <Shop />
      </div>

      <div className=' text-black bg-[#f3f5f7] h-auto'>
        <Faqs />
      </div>
      <div className=' text-white bg-black h-auto'>
        <Footer />
      </div>
    </div>
  )
}

export default Home