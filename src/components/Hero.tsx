import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Linkedin, Mail, MapPin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.png";
import { useRef } from "react";
import { useTypingEffect } from "@/hooks/useTypingEffect";

const Hero = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const typedTitle = useTypingEffect({
    texts: ["IT Project Manager", "PMP® Certified", "Agile Leader", "Delivery Expert"],
    typingSpeed: 80,
    deletingSpeed: 40,
    pauseDuration: 2500,
  });

  // Parallax transforms for different elements
  const backgroundY1 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const backgroundY2 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const backgroundY3 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={sectionRef} className="relative min-h-screen hero-gradient flex items-center justify-center overflow-hidden">
      {/* Parallax background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main floating orb - slowest parallax */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 rounded-full bg-accent/10 blur-3xl"
          style={{ y: backgroundY1 }}
          animate={{ x: [0, 50, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Secondary orb - medium parallax */}
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-secondary/10 blur-3xl"
          style={{ y: backgroundY2 }}
          animate={{ x: [0, -30, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Additional subtle orb - fastest parallax */}
        <motion.div
          className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full bg-accent/5 blur-3xl"
          style={{ y: backgroundY3 }}
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Decorative grid pattern with parallax */}
        <motion.div
          className="absolute inset-0 opacity-[0.02]"
          style={{ y: backgroundY1 }}
        >
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--accent)) 1px, transparent 0)`,
            backgroundSize: '50px 50px',
          }} />
        </motion.div>
      </div>

      <motion.div 
        className="container relative z-10 px-6 py-20"
        style={{ y: contentY, opacity }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="inline-block px-4 py-2 mb-6 text-sm font-medium rounded-full bg-accent/20 text-accent border border-accent/30">
                  PMP® Certified Professional
                </span>
              </motion.div>

              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Tejas Kashid
              </motion.h1>

              <motion.div
                className="text-xl md:text-2xl text-primary-foreground/80 mb-4 font-medium h-8 md:h-10"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <span className="text-accent">{typedTitle}</span>
                <motion.span
                  className="inline-block w-0.5 h-6 md:h-7 bg-accent ml-1 align-middle"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
                />
              </motion.div>

              <motion.p
                className="text-lg text-primary-foreground/60 mb-8 max-w-xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Transforming complex IT initiatives into successful deliveries with{" "}
                <span className="text-accent font-semibold">12+ years</span> of experience 
                in enterprise project management
              </motion.p>

              <motion.div
                className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8 text-primary-foreground/70"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span>Pune, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-accent" />
                  <span>tejas.kashid@yahoo.com</span>
                </div>
              </motion.div>

              <motion.div
                className="flex flex-wrap items-center justify-center lg:justify-start gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <Button
                  size="lg"
                  className="gold-gradient text-accent-foreground font-semibold px-6 hover:opacity-90 transition-opacity"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get In Touch
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/50 text-white bg-white/10 hover:bg-white/20 px-6 backdrop-blur-sm"
                  asChild
                >
                  <a href="/Tejas_Kashid_Resume.pdf" download="Tejas_Kashid_Resume.pdf">
                    <Download className="w-5 h-5 mr-2" />
                    Download CV
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/50 text-white bg-white/10 hover:bg-white/20 px-6 backdrop-blur-sm"
                  asChild
                >
                  <a href="https://www.linkedin.com/in/tejas-kashid-b670b078" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </a>
                </Button>
              </motion.div>
            </div>

            {/* Profile Image */}
            <motion.div
              className="flex justify-center lg:justify-end order-1 lg:order-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative">
                {/* Decorative ring */}
                <div className="absolute -inset-4 rounded-full gold-gradient opacity-20 blur-sm" />
                <div className="absolute -inset-2 rounded-full border-2 border-accent/30" />
                
                {/* Image container */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-accent/50 shadow-2xl">
                  <img
                    src={profilePhoto}
                    alt="Tejas Kashid - IT Project Manager"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Floating badge */}
                <motion.div
                  className="absolute -bottom-2 -right-2 md:bottom-4 md:right-0 px-4 py-2 rounded-full gold-gradient shadow-lg"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span className="text-accent-foreground font-bold text-sm">12+ Years</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ opacity }}
      >
        <ArrowDown className="w-6 h-6 text-primary-foreground/50" />
      </motion.div>
    </section>
  );
};

export default Hero;