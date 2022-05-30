import React from 'react'
import NewsCard from '../utilities/NewsCard'
const recentNews = [
    {
        title: "What is SaaS? Software as a Service Explained",
        desc: "Going into this journey, I had a standard therapy regimen, based on looking at the research literature. After I saw the movie, I started to ask other people what they did for their anxiety, and some",
        date: "Thursday, December 9th 2021",
       
    },
    {
        title: "A Quick Guide to WordPress Hosting",
        desc: "According to him, Ã¢â‚¬Å“I'm still surprised that this has happened. But we are surprised because we are so surprised.Ã¢â‚¬ÂMore revelations about Whittington will be featured in the film",
        date: "Thursday, December 9th 2021",
       
    },
    {
        title: "7 Promising VS Code Extensions Introduced in 2022",
        desc: "I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks. I realized today that I have all this stuff that",
        date: "Thursday, December 9th 2021",
        
    },
    {
        title: "How to Use Root C++ Interpreter Shell to Write C++ Programs",
        desc: "The powerful gravity waves resulting from the impact of the planets' moons Ã¢â‚¬â€ four in total Ã¢â‚¬â€ were finally resolved in 2015 when gravitational microlensing was used to observe the",
        date: "Thursday, December 9th 2021",
        
    }
]
const News = () => {
  return (
    <div className=' hidden lg:flex  w-1/5 flex-col mt-20 m-5  shadow-xl rounded-lg bg-white mr-20'>
        <h1 className='text-xl font-extrabold mr-10'> GETTR News</h1>
        <div>
            {
                recentNews.map((news,idx) => {
                    return <NewsCard {...news} key={idx}/>

                })
            }
        </div>
       
    </div>
  )
}

export default News