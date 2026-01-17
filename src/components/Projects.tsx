import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Folder, CheckCircle2, Cloud, Database, FileText, Users } from "lucide-react";
import TiltCard from "./TiltCard";

const projects = [
  {
    title: "Enterprise IT Project Delivery",
    company: "TÜV SÜD South Asia",
    description: "Led end-to-end delivery of enterprise IT projects managing full lifecycle from initiation to closure, ensuring alignment with PMP best practices.",
    impact: [
      "Achieved high customer satisfaction scores",
      "Delivered projects on time and within budget",
      "Implemented robust project governance",
    ],
    tags: ["Project Management", "Enterprise IT", "PMP"],
    icon: Folder,
  },
  {
    title: "Smartdocs - Navoday Project",
    company: "Larsen & Toubro Limited",
    description: "Successfully implemented Smartdocs integrating Vendor Collaboration Invoice Processing System to enhance operational efficiency.",
    impact: [
      "Streamlined vendor collaboration workflows",
      "Reduced invoice processing time by 40%",
      "Improved accuracy in financial operations",
    ],
    tags: ["Implementation", "Vendor Management", "Process Automation"],
    icon: FileText,
  },
  {
    title: "Cloud Platform & Database Management",
    company: "Larsen & Toubro Limited",
    description: "Managed Google Cloud Platform and Atlas MongoDB, overseeing implementation, optimization, and maintenance of cloud-based solutions.",
    impact: [
      "Migrated legacy systems to cloud",
      "Achieved 99.9% uptime",
      "Reduced infrastructure costs by 25%",
    ],
    tags: ["GCP", "MongoDB", "Cloud Migration"],
    icon: Cloud,
  },
  {
    title: "ITMS - Invoice Tracking Management System",
    company: "Larsen & Toubro Limited",
    description: "Led the implementation and provided ongoing support for ITMS, ensuring accuracy and efficiency in financial operations across all SSC locations.",
    impact: [
      "Centralized invoice tracking across 10+ locations",
      "Improved financial reporting accuracy",
      "Reduced resolution time for invoice queries",
    ],
    tags: ["System Implementation", "Financial Operations", "Support"],
    icon: Database,
  },
  {
    title: "Agile Transformation & Team Leadership",
    company: "Time Legend IT & HR Consulting",
    description: "Implemented Agile methodology and managed SCRUM processes while leading a team of 8 developers supporting branches in 10+ countries.",
    impact: [
      "Successfully transitioned to Agile practices",
      "Improved sprint velocity by 35%",
      "Enhanced cross-functional collaboration",
    ],
    tags: ["Agile", "SCRUM", "Team Leadership"],
    icon: Users,
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="py-24 bg-background">
      <div className="container px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Key <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Highlights of impactful projects delivered throughout my career
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ perspective: "1000px" }}>
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
            >
              <TiltCard className="h-full cursor-pointer">
                <div className="group p-6 rounded-xl bg-card card-shadow hover:card-shadow-hover transition-all duration-300 flex flex-col h-full border border-transparent hover:border-accent/20">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg gold-gradient flex items-center justify-center group-hover:scale-110 transition-transform">
                      <project.icon className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <span className="text-xs text-muted-foreground">{project.company}</span>
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">
                    {project.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    {project.impact.map((item) => (
                      <div key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 rounded-md bg-muted text-muted-foreground text-xs group-hover:bg-accent/10 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;