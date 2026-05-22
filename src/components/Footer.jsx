import React from 'react'
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
export default function Footer() {
  return (
    <div>
       <footer className="w-full bg-[#121212] text-white pt-16 font-sans">
      {/* Yuqori qism: Linklar va Aloqa */}
      <div className="max-w-300 mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 pb-16">
        
        {/* Services ustuni */}
        <div>
          <h3 className="text-base font-semibold mb-6 text-white tracking-wide">Services</h3>
          <ul className="space-y-4">
            {['SMM', 'Web development', 'Mobile apps', 'Branding', 'Graphic design'].map((item) => (
              <li key={item}>
                <a href="#" className="text-[#a0a0a0] text-sm hover:text-white transition-colors duration-300">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources ustuni */}
        <div>
          <h3 className="text-base font-semibold mb-6 text-white tracking-wide">Resources</h3>
          <ul className="space-y-4">
            {['About us', 'Showcase', 'Blog'].map((item) => (
              <li key={item}>
                <a href="#" className="text-[#a0a0a0] text-sm hover:text-white transition-colors duration-300">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect with us ustuni */}
        <div>
          <h3 className="text-base font-semibold mb-6 text-white tracking-wide">Connect with us</h3>
          <div className="space-y-4 text-sm text-[#a0a0a0]">
            <p>
              <a href="tel:2395550108" className="hover:text-white transition-colors duration-300">
                (239) 555-0108
              </a>
            </p>
            <p>
              <a href="mailto:hello@pixer.com" className="hover:text-white transition-colors duration-300">
                hello@pixer.com
              </a>
            </p>
            <p className="leading-relaxed max-w-65">
              4140 Parker Rd. Allentown, New Mexico 31134
            </p>
          </div>

          {/* Ijtimoiy tarmoq piktogrammalari */}
          <div className="flex items-center gap-5 mt-6">
            <a href="#" className="text-white text-lg hover:text-[#a0a0a0] hover:-translate-y-0.5 transition-all duration-300">
              <FaTwitter />
            </a>
            <a href="#" className="text-white text-lg hover:text-[#a0a0a0] hover:-translate-y-0.5 transition-all duration-300">
              <FaFacebookF />
            </a>
            <a href="#" className="text-white text-lg hover:text-[#a0a0a0] hover:-translate-y-0.5 transition-all duration-300">
              <FaLinkedinIn />
            </a>
            <a href="#" className="text-white text-lg hover:text-[#a0a0a0] hover:-translate-y-0.5 transition-all duration-300">
              <FaInstagram />
            </a>
          </div>
        </div>

      </div>

      {/* Pastki qism: Logo va Mualliflik huquqi */}
      <div className="border-t border-[#262626] py-8">
        <div className="max-w-300 mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-2xl font-bold tracking-tight">Pixer</div>
          <div className="text-[#a0a0a0] text-sm">Copyright © 2022 Pixer</div>
        </div>
      </div>
    </footer>
    </div>
  )
}
