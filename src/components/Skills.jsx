import React from 'react'
import { motion } from 'framer-motion'
import {
  SiJavascript, SiPhp, SiHtml5, SiCss3, SiMysql,
  SiSpringboot, SiJquery, SiTailwindcss, SiGit, SiGithub,
  SiXampp
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import { HiCode, HiCog, HiDatabase, HiDesktopComputer } from 'react-icons/hi'

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: HiCode,
      color: "from-blue-500 to-blue-600",
      skills: [
        { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
        { name: "PHP", icon: SiPhp, color: "text-purple-600" },
        { name: "Java", icon: FaJava, color: "text-red-600" },
        { name: "HTML5", icon: SiHtml5, color: "text-orange-600" },
        { name: "CSS3", icon: SiCss3, color: "text-blue-600" },
        { name: "SQL", icon: HiDatabase, color: "text-green-600" }
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: HiCog,
      color: "from-green-500 to-green-600",
      skills: [
        { name: "Spring Boot", icon: SiSpringboot, color: "text-green-600" },
        { name: "Thymeleaf", icon: HiDesktopComputer, color: "text-green-700" },
        { name: "jQuery", icon: SiJquery, color: "text-blue-600" },
        { name: "WebSocket", icon: HiCog, color: "text-purple-600" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: HiDesktopComputer,
      color: "from-purple-500 to-purple-600",
      skills: [
        { name: "XAMPP", icon: SiXampp, color: "text-orange-600" },
        { name: "Git", icon: SiGit, color: "text-red-600" },
        { name: "GitHub", icon: SiGithub, color: "text-gray-800" },
        { name: "PHPMailer", icon: HiCog, color: "text-blue-600" }
      ]
    },
    {
      title: "Databases & Other",
      icon: HiDatabase,
      color: "from-orange-500 to-orange-600",
      skills: [
        { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
        { name: "HTML5 Canvas", icon: HiDesktopComputer, color: "text-orange-600" }
      ]
    }
  ]

  return (
    <section id="skills" className="section-padding bg-white">
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
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Proficient in modern technologies and frameworks for full-stack development
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="card p-6 relative overflow-hidden"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color}`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-900">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-gray-50 to-gray-100 hover:from-primary-50 hover:to-primary-100 transition-all duration-300 border border-gray-200 hover:border-primary-200"
                    >
                      <skill.icon className={`w-5 h-5 ${skill.color}`} />
                      <span className="text-secondary-700 font-medium text-sm">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Background Decoration */}
                <div className={`absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br ${category.color} rounded-full opacity-10`}></div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills Summary */}
          <motion.div
            variants={itemVariants}
            className="mt-12 text-center"
          >
            <div className="card p-8 bg-gradient-to-r from-primary-50 to-blue-50 border-primary-100">
              <h3 className="text-2xl font-semibold text-secondary-900 mb-4">
                Core Competencies
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "Full-Stack Development",
                  "Database Design",
                  "RESTful APIs",
                  "Responsive Design",
                  "Version Control",
                  "Agile Development",
                  "Problem Solving",
                  "Code Optimization"
                ].map((competency, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-white rounded-full text-secondary-700 font-medium shadow-sm hover:shadow-md transition-all duration-300 border border-primary-200"
                  >
                    {competency}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
