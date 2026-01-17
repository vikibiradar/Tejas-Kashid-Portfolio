import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Target, Users, TrendingUp } from "lucide-react";

const highlights = [
  {
    icon: Target,
    title: "Strategic Vision",
    description: "Defining IT strategy and roadmaps that align with business objectives",
  },
  {
    icon: Users,
    title: "Team Leadership",
    description: "Leading high-performing cross-functional teams across multiple locations",
  },
  {
    icon: TrendingUp,
    title: "Delivery Excellence",
    description: "End-to-end project lifecycle management with consistent on-time delivery",
  },
  {
    icon: Award,
    title: "PMP® Certified",
    description: "Project Management Professional with proven PMI best practices",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-24 bg-background">
      <div className="container px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Results-driven IT Project Manager with over 12 years of experience in enterprise 
            project management, cloud platforms, and digital transformation. I specialize in 
            leading complex IT initiatives from conception to successful delivery, ensuring 
            alignment with business objectives and stakeholder expectations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              className="p-6 rounded-xl bg-card card-shadow hover:card-shadow-hover transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
            >
              <div className="w-12 h-12 rounded-lg gold-gradient flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;