import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, GraduationCap, BookOpen } from "lucide-react";

const certifications = [
  {
    title: "Project Management Professional (PMP®)",
    issuer: "Project Management Institute (PMI)",
    credentialId: "4281179",
    validity: "Jan 2026 - Jan 2029",
    icon: Award,
  },
];

const education = [
  {
    degree: "MBA - IT",
    institution: "S B Patil Institute of Management",
    location: "Pune",
    period: "July 2010 - July 2012",
    grade: "First Class",
    icon: GraduationCap,
  },
  {
    degree: "BCS (Bachelor of Computer Science)",
    institution: "D Y Patil College",
    location: "Pune",
    period: "June 2006 - June 2010",
    grade: "First Class",
    icon: GraduationCap,
  },
];

const trainings = [
  "Problem Solving Techniques",
  "Stress Management",
  "Business Writing",
  "Six Sigma Yellow Belt",
  "Leadership Management",
];

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" ref={ref} className="py-24 bg-muted">
      <div className="container px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Certifications & <span className="text-gradient">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Certifications */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Award className="w-5 h-5 text-accent" />
              Professional Certification
            </h3>
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="p-6 rounded-xl bg-card card-shadow border-l-4 border-accent"
              >
                <div className="w-12 h-12 rounded-lg gold-gradient flex items-center justify-center mb-4">
                  <cert.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">{cert.title}</h4>
                <p className="text-muted-foreground text-sm mb-1">{cert.issuer}</p>
                <p className="text-muted-foreground text-sm mb-1">
                  Credential ID: {cert.credentialId}
                </p>
                <p className="text-accent text-sm font-medium">{cert.validity}</p>
              </div>
            ))}
          </motion.div>

          {/* Education */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-accent" />
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu) => (
                <div
                  key={edu.degree}
                  className="p-6 rounded-xl bg-card card-shadow"
                >
                  <h4 className="text-lg font-bold text-foreground mb-1">{edu.degree}</h4>
                  <p className="text-muted-foreground text-sm mb-1">{edu.institution}</p>
                  <p className="text-muted-foreground text-sm mb-2">{edu.period}</p>
                  <span className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-medium">
                    {edu.grade}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Corporate Trainings */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-accent" />
              Corporate Training Conducted
            </h3>
            <div className="p-6 rounded-xl bg-card card-shadow">
              <ul className="space-y-3">
                {trainings.map((training, index) => (
                  <li
                    key={training}
                    className="flex items-center gap-3 text-muted-foreground"
                  >
                    <span className="w-6 h-6 rounded-full gold-gradient flex items-center justify-center text-xs font-bold text-accent-foreground">
                      {index + 1}
                    </span>
                    {training}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;