import React from 'react'
import Card from '../utilities/Card'
const posts = [
    {
        title: "What is SaaS? Software as a Service Explained",
        description: "Going into this journey, I had a standard therapy regimen, based on looking at the research literature. After I saw the movie, I started to ask other people what they did for their anxiety, and some",
        image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        logo: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
        author: "Sidi dev",
        date: "Jan 4 2022",
      
    },
    {
        title: "A Quick Guide to WordPress Hosting",
        description: "According to him, â€œI'm still surprised that this has happened. But we are surprised because we are so surprised.â€More revelations about Whittington will be featured in the film",
        image: "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        logo: "https://api.uifaces.co/our-content/donated/FJkauyEa.jpg",
        author: "Micheal",
        date: "Jan 4 2022",
        
    },
    {
        title: "7 Promising VS Code Extensions Introduced in 2022",
        description: "I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks. I realized today that I have all this stuff that",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        logo: "https://randomuser.me/api/portraits/men/46.jpg",
        author: "Luis",
        date: "Jan 4 2022",
        
    },
    {
        title: "How to Use Root C++ Interpreter Shell to Write C++ Programs",
        description: "The powerful gravity waves resulting from the impact of the planets' moons â€” four in total â€” were finally resolved in 2015 when gravitational microlensing was used to observe the",
        image: "https://images.unsplash.com/photo-1617529497471-9218633199c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        logo: "https://api.uifaces.co/our-content/donated/KtCFjlD4.jpg",
        author: "Lourin",
        date: "Jan 4 2022",
        
    }
]
const Feeds = () => {
  return (
    <div className='flex  flex-col justify-between items-center pt-20 mx-auto space-x-96 bg-[#F7F8F9] '>
        <h1 className='text-xl font-extrabold mx-auto bg-[#F7F8F9]'>Explore</h1>
     <div>{
            posts.map(post => {
               return <Card {...post}/> 
            })
        }
        </div>   
    </div>
  )
}

export default Feeds