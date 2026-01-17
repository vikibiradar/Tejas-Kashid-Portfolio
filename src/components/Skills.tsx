import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Project Management",
    skills: [
      { name: "Project Lifecycle Management", level: 95 },
      { name: "Risk Management", level: 90 },
      { name: "Stakeholder Management", level: 92 },
      { name: "Agile/Scrum", level: 88 },
      { name: "Change Management", level: 85 },
      { name: "Budget Management", level: 87 },
    ],
  },
  {
    title: "Technical Platforms",
    skills: [
      { name: "Azure DevOps", level: 85 },
      { name: "JIRA", level: 90 },
      { name: "Google Cloud Platform", level: 80 },
      { name: "Microsoft Power Platform", level: 75 },
      { name: "SAP", level: 70 },
      { name: "MongoDB", level: 75 },
    ],
  },
];

const softSkills = [
  "Leadership",
  "Communication",
  "Problem Solving",
  "Decision Making",
  "Team Building",
  "Negotiation",
  "Strategic Thinking",
  "Conflict Resolution",
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={ref} className="py-24 bg-background">
      <div className="container px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for delivering successful IT projects
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              className="p-8 rounded-xl bg-card card-shadow"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + catIndex * 0.1 }}
            >
              <h3 className="text-xl font-bold text-foreground mb-6">{category.title}</h3>
              <div className="space-y-5">
                {category.skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full gold-gradient rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.3 + catIndex * 0.2 + index * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="p-8 rounded-xl bg-primary"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-xl font-bold text-primary-foreground mb-6 text-center">
            Core Competencies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {softSkills.map((skill, index) => (
              <motion.span
                key={skill}
                className="px-4 py-2 rounded-full bg-accent/20 text-accent border border-accent/30 text-sm font-medium"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;