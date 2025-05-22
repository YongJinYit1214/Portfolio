import React from 'react'
import { motion } from 'framer-motion'
import { HiExternalLink, HiCode, HiUsers, HiAcademicCap } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'

const Projects = () => {
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

  const projects = [
    {
      title: "FYP Management System",
      description: "Designed and developed a comprehensive web-based system to streamline the management of final year projects. The system features user authentication with role-based access control, project proposal submission and approval workflows, supervisor-student matching, assessment modules, and communication tools.",
      technologies: ["PHP", "MySQL", "JavaScript", "HTML/CSS", "XAMPP", "PHPMailer"],
      features: [
        "User Authentication & Role-based Access Control",
        "Project Proposal Submission & Approval Workflows",
        "Supervisor-Student Matching System",
        "Assessment & Evaluation Modules",
        "Real-time Communication Tools",
        "Document Management System"
      ],
      icon: HiAcademicCap,
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-indigo-50"
    },
    {
      title: "eLearning Platform",
      description: "Developed a comprehensive eLearning platform with real-time interactive features. Built with Spring Boot and Thymeleaf, the platform includes user authentication, course management, instructor applications, and a real-time whiteboard for virtual meetings.",
      technologies: ["Java", "Spring Boot", "Thymeleaf", "WebSocket", "HTML5 Canvas", "Tailwind CSS", "MySQL"],
      features: [
        "User Authentication & Profile Management",
        "Course Creation & Management",
        "Instructor Application System",
        "Real-time Interactive Whiteboard",
        "Virtual Meeting Capabilities",
        "Responsive Design with Tailwind CSS"
      ],
      icon: HiUsers,
      color: "from-green-500 to-green-600",
      bgColor: "from-green-50 to-emerald-50"
    }
  ]

  return (
    <section id="projects" className="section-padding bg-gradient-to-br from-slate-50 to-blue-50">
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
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Showcasing my experience in building scalable web applications with modern technologies
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.01 }}
                className="card p-8 relative overflow-hidden"
              >
                {/* Background Decoration */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.bgColor} rounded-full -translate-y-16 translate-x-16 opacity-50`}></div>
                
                <div className="relative z-10">
                  {/* Project Header */}
                  <div className="flex items-start gap-6 mb-6">
                    <div className={`flex-shrink-0 p-4 bg-gradient-to-r ${project.color} rounded-xl`}>
                      <project.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-secondary-900 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-secondary-600 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Project Content Grid */}
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Features */}
                    <div>
                      <h4 className="text-lg font-semibold text-secondary-900 mb-4 flex items-center gap-2">
                        <HiCode className="w-5 h-5 text-primary-600" />
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2 text-secondary-600">
                            <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-lg font-semibold text-secondary-900 mb-4">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium border border-primary-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* GitHub CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <div className="card p-8 bg-gradient-to-r from-secondary-800 to-secondary-900 text-white">
              <h3 className="text-2xl font-semibold mb-4">
                Explore More Projects
              </h3>
              <p className="text-secondary-200 mb-6 max-w-2xl mx-auto">
                Visit my GitHub profile to see more projects and contributions to the open-source community.
              </p>
              <motion.a
                href="https://github.com/YongJinYit1214"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-secondary-900 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300"
              >
                <FaGithub className="w-5 h-5" />
                View GitHub Profile
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
