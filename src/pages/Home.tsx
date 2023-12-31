import React from 'react'

import HomeMain from '../components/HomeMain'
import Editor from '../components/Editor'

const Home = () => {
  return (
    <>
   {/* Hero Section */}
   <section className="bg-teal-500 p-16 text-zinc-50 pt-20">
      <div className="flex">
        <div className="w-1/2 pr-8">
          <p className="text-5xl  mb-4">
            GoatLang is <span className="font-semibold">Multipupose programming language built on top of JavaScript.</span>
          </p>
          <p className="text-lg">
            A user-friendly language utilizing Babel for translation into JavaScript, designed for ease of use and versatility, catering to both beginners and experienced and developers for seamless and efficient web application development.
          </p>
        </div>
        <div className="w-1/2">
          <Editor />
        </div>
      </div>
    </section>
    <HomeMain/>
    </>
  )
}

export default Home