import React from 'react'
import { motion } from 'framer-motion'
import { HiAcademicCap, HiCode, HiUsers, HiLightBulb } from 'react-icons/hi'

const About = () => {
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

  const highlights = [
    {
      icon: HiAcademicCap,
      title: "Academic Excellence",
      description: "Maintaining a strong CGPA of 3.68 while specializing in Software Engineering"
    },
    {
      icon: HiCode,
      title: "Technical Proficiency",
      description: "Experienced in full-stack development with modern frameworks and technologies"
    },
    {
      icon: HiUsers,
      title: "Team Collaboration",
      description: "Strong communicator with proven ability to work effectively in team environments"
    },
    {
      icon: HiLightBulb,
      title: "Quality Focus",
      description: "Detail-oriented approach with strong interest in quality assurance and best practices"
    }
  ]

  const languages = ["English", "Malay", "Mandarin"]
  const softSkills = ["Fast Learner", "Responsible", "Good Communicator", "Detail-Oriented", "Quality Assurance"]

  return (
    <section id="about" className="section-padding bg-white">
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
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Passionate about creating innovative software solutions and continuously learning new technologies
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Column - Description */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-secondary-900 mb-6">
                My Journey in Software Development
              </h3>
              <div className="space-y-4 text-secondary-600 leading-relaxed">
                <p>
                  As a dedicated Computer Science student at Multimedia University, I've developed a strong 
                  foundation in software engineering principles and practical development skills. My academic 
                  journey has been complemented by hands-on experience in building real-world applications.
                </p>
                <p>
                  I specialize in full-stack web development, with expertise in creating scalable applications 
                  using modern technologies. My projects demonstrate proficiency in database design, secure 
                  authentication systems, and responsive user interfaces that provide excellent user experiences.
                </p>
                <p>
                  Currently seeking a software engineering internship where I can contribute to innovative 
                  projects while continuing to grow my technical expertise and professional skills.
                </p>
              </div>
            </motion.div>

            {/* Right Column - Highlights */}
            <motion.div variants={itemVariants}>
              <div className="grid gap-6">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start gap-4 p-4 rounded-lg bg-gradient-to-r from-primary-50 to-blue-50 border border-primary-100"
                  >
                    <div className="flex-shrink-0 p-2 bg-primary-100 rounded-lg">
                      <highlight.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary-900 mb-1">
                        {highlight.title}
                      </h4>
                      <p className="text-secondary-600 text-sm">
                        {highlight.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Languages and Soft Skills */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Languages */}
            <motion.div variants={itemVariants} className="card p-6">
              <h3 className="text-xl font-semibold text-secondary-900 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {languages.map((language, index) => (
                  <span key={index} className="skill-tag">
                    {language}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Soft Skills */}
            <motion.div variants={itemVariants} className="card p-6">
              <h3 className="text-xl font-semibold text-secondary-900 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
                Soft Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
