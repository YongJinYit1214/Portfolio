import React from 'react'
import { motion } from 'framer-motion'
import { HiMail, HiPhone, HiLocationMarker, HiExternalLink } from 'react-icons/hi'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const Contact = () => {
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

  const contactInfo = [
    {
      icon: HiMail,
      title: "Email",
      value: "jinyit.yong@gmail.com",
      href: "mailto:jinyit.yong@gmail.com",
      color: "text-blue-600"
    },
    {
      icon: HiPhone,
      title: "Phone",
      value: "+60 10-876 6925",
      href: "tel:+60108766925",
      color: "text-green-600"
    },
    {
      icon: HiLocationMarker,
      title: "Location",
      value: "Puchong, Selangor",
      href: "#",
      color: "text-red-600"
    }
  ]

  const socialLinks = [
    {
      icon: FaLinkedin,
      name: "LinkedIn",
      href: "https://linkedin.com/in/yong-jin-yit-608a76360/",
      color: "text-blue-600 hover:text-blue-700"
    },
    {
      icon: FaGithub,
      name: "GitHub",
      href: "https://github.com/YongJinYit1214",
      color: "text-gray-800 hover:text-gray-900"
    }
  ]

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and interesting projects. Let's connect!
            </p>
          </motion.div>

          {/* Contact Information Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.href}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="card p-6 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className={`inline-flex p-4 rounded-full bg-gradient-to-r from-primary-50 to-primary-100 mb-4 ${info.color}`}>
                  <info.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">{info.title}</h3>
                <p className="text-secondary-600">{info.value}</p>
              </motion.a>
            ))}
          </div>

          {/* Call to Action Section */}
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <div className="card p-8 bg-gradient-to-r from-primary-50 to-blue-50 border-primary-100">
              <h3 className="text-2xl font-semibold text-secondary-900 mb-4">
                Ready to Connect?
              </h3>
              <p className="text-secondary-600 mb-6 max-w-2xl mx-auto">
                I'm actively seeking software engineering internship opportunities.
                Feel free to reach out via email or connect with me on LinkedIn to discuss potential collaborations.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="mailto:jinyit.yong@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <HiMail className="w-5 h-5" />
                  Send Email
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/yong-jin-yit-608a76360/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary inline-flex items-center gap-2"
                >
                  <FaLinkedin className="w-5 h-5" />
                  Connect on LinkedIn
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <h4 className="text-lg font-semibold text-secondary-900 mb-6">
              Follow My Work
            </h4>
            <div className="flex justify-center gap-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${social.color}`}
                >
                  <social.icon size={28} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
