'use client'

import Image from 'next/image'

export function Homebar() {

  return (
    <div className="bg-opacity-100 bg-black fixed top-0 w-full flex justify-center border-b border-orange-200 items-center">
      <button 
        className="text-orange-200 text-3xl border-r p-1 px-5 border-orange-200 hover:text-white"
      >
        About Me  
      </button>

      <button      
        className="text-orange-200 text-3xl border-r p-1 px-5 border-orange-200 hover:text-white"
      >
        Work  
      </button>

      <button 
        className="text-orange-200 text-3xl border-r p-1 px-5 border-orange-200 hover:text-white"
      >
        Clubs  
      </button>

      <button 
        className="text-orange-200 text-3xl border-r p-1 px-5 border-orange-200 hover:text-white"
      >
        Hackathons  
      </button>

      <button 
        className="text-orange-200 text-3xl border-r p-1 px-5 border-orange-200 hover:text-white"
      >
        Personal Projects  
      </button>

      <button 
        className="text-orange-200 text-3xl border-r p-1 px-5 border-orange-200 hover:text-white"
      >
        Coursework  
      </button>

      <button 
        className="text-orange-200 text-3xl p-1 px-5 border-orange-200 hover:text-white"
      >
        Boy Scouts  
      </button>
    </div>
  );
}
  
export function Socials() {
  return (
    <div className="fixed inset-x-0 bottom-0 flex justify-center space-x-2">
      <a href="https://linkedin.com/in/vikram-penumarti" target="_blank" rel="noopener noreferrer">
        <Image src="/linkedin.png" alt="Github" width="80" height="80"/>
      </a>
      <a href="https://github.com/vikram087" target="_blank" rel="noopener noreferrer">
        <Image src="/github.png" alt="Github" width="80" height="80"/>
      </a>
      {/* <a href="https://www.instagram.com/vikrampenumarti/" target="_blank" rel="noopener noreferrer">
        <Image src="/insta.png" alt="Github" width="80" height="80"/>
      </a> */}
    </div>
  );
}