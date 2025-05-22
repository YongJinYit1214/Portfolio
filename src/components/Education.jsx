import React from 'react'
import { motion } from 'framer-motion'
import { HiAcademicCap, HiCalendar, HiStar } from 'react-icons/hi'

const Education = () => {
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

  return (
    <section id="education" className="section-padding bg-gradient-to-br from-slate-50 to-blue-50">
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
              <span className="gradient-text">Education</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Academic foundation in Computer Science with specialization in Software Engineering
            </p>
          </motion.div>

          {/* Education Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="max-w-4xl mx-auto"
          >
            <div className="card p-8 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-100 to-blue-200 rounded-full translate-y-12 -translate-x-12 opacity-50"></div>
              
              <div className="relative z-10">
                {/* University Header */}
                <div className="flex items-start gap-6 mb-6">
                  <div className="flex-shrink-0 p-4 bg-primary-100 rounded-xl">
                    <HiAcademicCap className="w-8 h-8 text-primary-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-secondary-900 mb-2">
                      Bachelor of Computer Science
                    </h3>
                    <p className="text-xl text-primary-600 font-semibold mb-2">
                      Multimedia University
                    </p>
                    <div className="flex items-center gap-4 text-secondary-600">
                      <div className="flex items-center gap-2">
                        <HiCalendar className="w-4 h-4" />
                        <span>Nov 2022 - Nov 2025 (Expected)</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Details Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Left Column */}
                  <div className="space-y-4">
                    <div className="p-4 bg-gradient-to-r from-primary-50 to-blue-50 rounded-lg border border-primary-100">
                      <h4 className="font-semibold text-secondary-900 mb-2 flex items-center gap-2">
                        <HiStar className="w-4 h-4 text-primary-600" />
                        Specialization
                      </h4>
                      <p className="text-secondary-700">Software Engineering</p>
                    </div>
                    
                    <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-100">
                      <h4 className="font-semibold text-secondary-900 mb-2 flex items-center gap-2">
                        <span className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                          <span className="w-2 h-2 bg-white rounded-full"></span>
                        </span>
                        Current CGPA
                      </h4>
                      <p className="text-2xl font-bold text-green-600">3.68</p>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-4">
                    <div className="p-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg border border-purple-100">
                      <h4 className="font-semibold text-secondary-900 mb-2">
                        Key Focus Areas
                      </h4>
                      <ul className="text-secondary-700 space-y-1">
                        <li>• Software Development Methodologies</li>
                        <li>• Database Design & Management</li>
                        <li>• Web Application Development</li>
                        <li>• System Analysis & Design</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg border border-orange-100">
                      <h4 className="font-semibold text-secondary-900 mb-2">
                        Academic Status
                      </h4>
                      <p className="text-secondary-700">
                        Currently in final year, expected graduation November 2025
                      </p>
                    </div>
                  </div>
                </div>

                {/* Achievement Highlight */}
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="mt-6 p-4 bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg text-white"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold mb-1">Academic Excellence</h4>
                      <p className="text-primary-100 text-sm">
                        Maintaining strong academic performance while gaining practical experience through projects
                      </p>
                    </div>
                    <div className="text-3xl font-bold opacity-80">
                      3.68
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
