import React from 'react'
import { motion } from 'framer-motion'
import { HiHeart } from 'react-icons/hi'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: FaLinkedin,
      href: "https://linkedin.com/in/yong-jin-yit-608a76360/",
      color: "hover:text-blue-600"
    },
    {
      icon: FaGithub,
      href: "https://github.com/YongJinYit1214",
      color: "hover:text-gray-900"
    }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left - Brand */}
          <div>
            <motion.h3
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold gradient-text cursor-pointer"
              onClick={scrollToTop}
            >
              Yong Jin Yit
            </motion.h3>
            <p className="text-secondary-300 mt-2">
              Computer Science Student & Software Developer
            </p>
          </div>

          {/* Center - Quick Links */}
          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-6">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ scale: 1.05 }}
                  className="text-secondary-300 hover:text-white transition-colors duration-200"
                  onClick={(e) => {
                    e.preventDefault()
                    const element = document.querySelector(`#${item.toLowerCase()}`)
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right - Social Links */}
          <div className="flex justify-center md:justify-end gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`p-3 bg-secondary-800 rounded-full text-secondary-300 ${social.color} transition-all duration-300 hover:bg-secondary-700`}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-secondary-400 text-sm">
              © {currentYear} Yong Jin Yit. All rights reserved.
            </p>
            
            <motion.p
              whileHover={{ scale: 1.02 }}
              className="text-secondary-400 text-sm flex items-center gap-1"
            >
              Made with <HiHeart className="text-red-500 w-4 h-4" /> using React & Tailwind CSS
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
