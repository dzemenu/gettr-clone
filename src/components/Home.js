import React from 'react'
import Feeds from './Feeds'
import News from './News'
import SideBar from './SideBar'
import NavBar from './NavBar'
import Footer from './Footer'
const Home = () => {
  return (
    <div className="flex  flex-col justify-between bg-[#F7F8F9]	">
      <NavBar />
      <div className='flex'>
      <SideBar />
         
<Feeds />
<News />
      </div>
 
<Footer />
</div>
  )
}

export default Home