import React from 'react'

export default function NimaIsh() {
  return (
<div className="bg-white py-16 px-4 max-w-6xl mx-auto font-sans">
  
  {/* Sarlavha qismi */}
  <div className="text-center max-w-2xl mx-auto mb-20">
    <h2 className="text-3xl font-bold text-gray-900 mb-4">
      How do we work?
    </h2>
    <p className="text-gray-500 text-sm leading-relaxed">
      Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis 
      lacinia ex, eget sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar.
    </p>
  </div>

  {/* Bloklar ro'yxati */}
  <div className="space-y-24">
    
    {/* 1-Blok: Rasm chapda, Matn o'ngda */}
    <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
      <div className="w-full md:w-1/2">
        <img 
          src="https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Rasim 1" 
          className="w-full h-[350px] object-cover rounded-lg"
        />
      </div>
      <div className="w-full md:w-1/2 text-left">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 tracking-tight">
          Let's clarify the requirements
        </h3>
        <p className="text-gray-500 text-sm md:text-base leading-relaxed">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </p>
      </div>
    </div>

    {/* 2-Blok: Rasm o'ngda, Matn chapda */}
    <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20">
      <div className="w-full md:w-1/2">
        <img 
          src="https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Rasim 2" 
          className="w-full h-[350px] object-cover rounded-lg"
        />
      </div>
      <div className="w-full md:w-1/2 text-left">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 tracking-tight">
          Let's clarify the requirements
        </h3>
        <p className="text-gray-500 text-sm md:text-base leading-relaxed">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </p>
      </div>
    </div>

    {/* 3-Blok: Rasm chapda, Matn o'ngda */}
    <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
      <div className="w-full md:w-1/2">
        <img 
          src="https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Rasim 3" 
          className="w-full h-[350px] object-cover rounded-lg"
        />
      </div>
      <div className="w-full md:w-1/2 text-left">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 tracking-tight">
          Let's clarify the requirements
        </h3>
        <p className="text-gray-500 text-sm md:text-base leading-relaxed">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </p>
      </div>
    </div>

  </div>
</div>

  )
}
