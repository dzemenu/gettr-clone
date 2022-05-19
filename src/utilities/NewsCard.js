import React from 'react'

const NewsCard = ({title,desc,date}) => {
  return (
    <article className="mt-5 p-8 md:pt-0" >
    <a href='/'>
        <span className="block text-gray-400 text-sm">
            {date}
        </span>
        <div className="mt-2">
            <h3 className="text-xl text-gray-900 font-semibold hover:underline">
                {title}
            </h3>
            <p className="text-gray-400 mt-1 leading-relaxed">
                {desc}
            </p>
        </div>
        <button className="mt-2 outline-none flex items-center text-[14px] text-blue-600 decoration-blue-600 hover:underline">
            READ MORE
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
        </button>
    </a>
</article>
  )
}

export default NewsCard