import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Building2, Calendar, MapPin, Briefcase, ArrowRight, ChevronDown } from "lucide-react";
const experiences = [{
  title: "Project Manager - IT",
  company: "TÜV SÜD South Asia Pvt Ltd",
  location: "Pune",
  period: "June 2022 - Present",
  duration: "3+ Years",
  type: "Full-time",
  highlights: ["Led end-to-end delivery of enterprise IT projects managing full project lifecycle in alignment with PMP best practices", "Proactively managed project risks employing effective risk management strategies throughout the project life cycle", "Ensured high customer satisfaction through proactive communication and effective issue resolution", "Managed project financials including cost reviews and incorporated risks into project costing"],
  skills: ["PMP", "Risk Management", "Stakeholder Management", "Financial Planning"]
}, {
  title: "IT Team Lead",
  company: "Larsen & Toubro Limited",
  location: "Pune",
  period: "Sep 2016 - June 2022",
  duration: "6 Years",
  type: "Full-time",
  highlights: ["Managed Google Cloud Platform and Atlas MongoDB, overseeing implementation of cloud-based solutions", "Successfully implemented Smartdocs for Navoday Project integrating Vendor Collaboration System", "Led ITMS implementation for Invoice Tracking Management System ensuring accuracy in operations", "Contributed to SSC-IT budgeting and strategic planning for IT initiatives"],
  skills: ["GCP", "MongoDB", "Cloud Migration", "IT Infrastructure"]
}, {
  title: "Jr. Business Analyst",
  company: "Time Legend IT & HR Consulting",
  location: "Pune",
  period: "Feb 2016 - Aug 2016",
  duration: "7 Months",
  type: "Full-time",
  highlights: ["Defined comprehensive IT strategy and roadmap aligning with business objectives", "Implemented Agile methodology, managing SCRUM processes and product backlog", "Managed a team of 8 software developers providing support to 10+ countries"],
  skills: ["Agile", "SCRUM", "Team Leadership", "Strategy"]
}, {
  title: "System Analyst",
  company: "Syntel",
  location: "Pune",
  period: "July 2012 - Dec 2015",
  duration: "3.5 Years",
  type: "Full-time",
  highlights: ["Spearheaded Rapid Application Development (RAD) for various applications", "Defined SLAs, monitored pending tickets, and ensured timely resolution", "Prepared custom reports according to client requirements"],
  skills: ["RAD", "SLA Management", "Documentation", "Reporting"]
}];
const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  return <section id="experience" ref={ref} className="py-24 bg-muted relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-primary to-transparent" />
      </div>

      <div className="container px-6 relative">
        <motion.div className="text-center mb-20" initial={{
        opacity: 0,
        y: 30
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6
      }}>
          <motion.span className="inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20" initial={{
          opacity: 0,
          scale: 0.9
        }} animate={isInView ? {
          opacity: 1,
          scale: 1
        } : {}} transition={{
          duration: 0.5,
          delay: 0.1
        }}>
            Career Journey
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A proven track record of delivering complex IT projects across multiple industries
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-primary to-accent/30 md:-translate-x-1/2" />

          {/* Timeline Items */}
          {experiences.map((exp, index) => {
          const isLeft = index % 2 === 0;
          return <motion.div key={exp.title + exp.company} className={`relative flex items-center mb-12 last:mb-0 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`} initial={{
            opacity: 0,
            y: 50
          }} animate={isInView ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            duration: 0.6,
            delay: 0.2 + index * 0.15
          }}>
                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                  <motion.div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center shadow-lg border-4 border-background" whileHover={{
                scale: 1.1
              }} transition={{
                type: "spring",
                stiffness: 400,
                damping: 10
              }}>
                    <Briefcase className="w-5 h-5 text-accent-foreground" />
                  </motion.div>
                </div>

                {/* Duration Badge - Desktop */}
                <div className={`hidden md:block absolute left-1/2 top-3 ${isLeft ? "translate-x-4" : "-translate-x-full -ml-4"}`}>
                  
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-[calc(50%-40px)] ml-16 md:ml-0 ${isLeft ? "md:pr-8" : "md:pl-8"}`}>
                  <motion.div className={`group relative bg-card rounded-2xl card-shadow overflow-hidden transition-all duration-300 cursor-pointer ${expandedIndex === index ? "card-shadow-hover" : "hover:card-shadow-hover"}`} whileHover={{
                y: -3
              }} onClick={() => toggleExpand(index)}>
                    {/* Accent Border */}
                    <div className={`absolute top-0 ${isLeft ? "right-0" : "left-0"} w-1 h-full gold-gradient hidden md:block`} />
                    
                    {/* Card Header - Always Visible */}
                    <div className="p-5">
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                            {exp.title}
                          </h3>
                          <div className="flex items-center gap-2 mt-1">
                            <Building2 className="w-4 h-4 text-accent" />
                            <span className="text-primary font-medium text-sm">{exp.company}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-bold shrink-0">
                            {exp.duration}
                          </span>
                          <motion.div animate={{
                        rotate: expandedIndex === index ? 180 : 0
                      }} transition={{
                        duration: 0.2
                      }}>
                            <ChevronDown className="w-5 h-5 text-muted-foreground" />
                          </motion.div>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-3">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-accent/70" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-accent/70" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      {/* Skills Tags - Always Visible */}
                      <div className="flex flex-wrap gap-1.5">
                        {exp.skills.map(skill => <span key={skill} className="px-2.5 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium border border-primary/20">
                            {skill}
                          </span>)}
                      </div>
                    </div>

                    {/* Expandable Details */}
                    <AnimatePresence>
                      {expandedIndex === index && <motion.div initial={{
                    height: 0,
                    opacity: 0
                  }} animate={{
                    height: "auto",
                    opacity: 1
                  }} exit={{
                    height: 0,
                    opacity: 0
                  }} transition={{
                    duration: 0.3,
                    ease: "easeInOut"
                  }} className="overflow-hidden">
                          <div className="px-5 pb-5 pt-2 border-t border-border/50">
                            <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full gold-gradient" />
                              Key Achievements
                            </h4>
                            <ul className="space-y-2">
                              {exp.highlights.map((highlight, hIndex) => <motion.li key={hIndex} className="flex items-start gap-2 text-muted-foreground text-sm leading-relaxed" initial={{
                          opacity: 0,
                          x: -10
                        }} animate={{
                          opacity: 1,
                          x: 0
                        }} transition={{
                          duration: 0.2,
                          delay: hIndex * 0.05
                        }}>
                                  <ArrowRight className="w-3.5 h-3.5 text-accent shrink-0 mt-1" />
                                  <span>{highlight}</span>
                                </motion.li>)}
                            </ul>
                          </div>
                        </motion.div>}
                    </AnimatePresence>
                  </motion.div>
                </div>
              </motion.div>;
        })}

          {/* Timeline End Node */}
          <motion.div className="absolute left-4 md:left-1/2 -translate-x-1/2 -bottom-4" initial={{
          opacity: 0,
          scale: 0
        }} animate={isInView ? {
          opacity: 1,
          scale: 1
        } : {}} transition={{
          duration: 0.5,
          delay: 1
        }}>
            <div className="w-6 h-6 rounded-full bg-accent/30 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full gold-gradient" />
            </div>
          </motion.div>
        </div>

        {/* Stats Banner */}
        <motion.div className="mt-24 p-8 rounded-2xl bg-card card-shadow border border-border/50 relative overflow-hidden" initial={{
        opacity: 0,
        y: 30
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6,
        delay: 0.8
      }}>
          {/* Decorative gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
          
          <div className="relative flex flex-wrap justify-center gap-8 md:gap-16">
            {[{
            value: "12+",
            label: "Years Experience"
          }, {
            value: "4",
            label: "Companies"
          }, {
            value: "50+",
            label: "Projects Delivered"
          }, {
            value: "10+",
            label: "Countries Served"
          }].map((stat, index) => <motion.div key={stat.label} className="text-center" initial={{
            opacity: 0,
            y: 20
          }} animate={isInView ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            duration: 0.5,
            delay: 0.9 + index * 0.1
          }}>
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-1">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </motion.div>)}
          </div>
        </motion.div>
      </div>
    </section>;
};
export default Experience;