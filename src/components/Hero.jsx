import React from 'react'
import { motion } from 'framer-motion'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToProjects = () => {
    const element = document.querySelector('#projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding pt-24">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Profile Image Placeholder */}
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-xl">
              YJY
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold text-secondary-900 mb-4"
          >
            Yong Jin Yit
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-secondary-600 mb-6"
          >
            Computer Science Student & Software Developer
          </motion.p>

          {/* Contact Info */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center items-center gap-6 mb-8 text-secondary-600"
          >
            <div className="flex items-center gap-2">
              <HiLocationMarker className="text-primary-600" />
              <span>Puchong, Selangor</span>
            </div>
            <div className="flex items-center gap-2">
              <HiMail className="text-primary-600" />
              <a href="mailto:jinyit.yong@gmail.com" className="hover:text-primary-600 transition-colors">
                jinyit.yong@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <HiPhone className="text-primary-600" />
              <span>+60 10-876 6925</span>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-4 mb-8"
          >
            <motion.a
              href="https://linkedin.com/in/yong-jin-yit-608a76360/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-primary-600 hover:text-primary-700"
            >
              <FaLinkedin size={24} />
            </motion.a>
            <motion.a
              href="https://github.com/YongJinYit1214"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-secondary-700 hover:text-secondary-900"
            >
              <FaGithub size={24} />
            </motion.a>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-secondary-600 max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            Detail-oriented Computer Science student with software engineering skills and experience in 
            full-stack web development. Proficient in designing and implementing scalable applications 
            using modern technologies and frameworks. Seeking a software engineering internship to apply 
            my technical skills and contribute to innovative software solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              onClick={scrollToProjects}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              View My Work
            </motion.button>
            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
