import { motion, AnimatePresence, useInView } from "framer-motion";
import { Quote } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import TiltCard from "./TiltCard";

const reviews = [
  {
    id: 1,
    name: "Vikram Biradar",
    title: "CEO",
    company: "Sajvee Pvt. Ltd",
    avatar: "VB",
    testimonial:
      "Working with Tejas has been an exceptional experience. His project management skills and ability to coordinate cross-functional teams made our complex deliverables seamless. A true professional who delivers results.",
  },
  {
    id: 2,
    name: "Akshay Dhumal",
    title: "Co-Founder",
    company: "Larsen & Toubro Limited",
    avatar: "AD",
    testimonial:
      "Tejas brings a unique blend of technical expertise and leadership. His proactive communication and stakeholder management ensured our project milestones were consistently met ahead of schedule.",
  },
  {
    id: 3,
    name: "Tushar Mhaske",
    title: "Nagar Sevak",
    company: "Uruli Kanchan Madar Sangh",
    avatar: "TM",
    testimonial:
      "I've collaborated with many project managers, but Tejas stands out for his attention to detail and commitment to excellence. He transforms challenging projects into success stories.",
  },
  {
    id: 4,
    name: "Lalit Sinker",
    title: "महाराष्ट्र भूषण,ललित (आप्पा) सिनकर ",
    company: "PCMC Madar Sangh",
    avatar: "LS",
    testimonial:
      "Tejas's strategic thinking and problem-solving abilities are remarkable. He consistently delivers high-quality results while maintaining excellent relationships with all stakeholders.",
  },
  {
    id: 5,
    name: "Chetan magar",
    title: "आधारवड डॉ.चेतन (तात्या) मगर",
    company: "Magar Enterprises",
    avatar: "CM",
    testimonial:
      "An outstanding professional who combines technical knowledge with exceptional leadership. Tejas has a natural ability to motivate teams and drive projects to successful completion.",
  },
];

const Reviews = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section id="reviews" className="py-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What People{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Say About Me
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Testimonials from colleagues and collaborators I've had the pleasure of working with.
          </p>
        </motion.div>

        {/* Desktop View - Show all cards */}
        <div
          className="hidden md:grid md:grid-cols-3 gap-8"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <TiltCard className="h-full">
                <div className="bg-card rounded-2xl p-6 h-full border border-border/50 card-shadow hover:card-shadow-hover transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                      <Quote className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>

                  <p className="text-muted-foreground text-center mb-6 leading-relaxed">"{review.testimonial}"</p>

                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent p-0.5 mb-3">
                      <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                        <span className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                          {review.avatar}
                        </span>
                      </div>
                    </div>
                    <h4 className="font-semibold text-foreground">{review.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {review.title}, {review.company}
                    </p>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Mobile View - Carousel */}
        <div className="md:hidden" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.4 }}
              >
                <TiltCard>
                  <div className="bg-card rounded-2xl p-6 border border-border/50 card-shadow">
                    <div className="flex justify-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                        <Quote className="w-6 h-6 text-primary-foreground" />
                      </div>
                    </div>

                    <p className="text-muted-foreground text-center mb-6 leading-relaxed">
                      "{reviews[currentIndex].testimonial}"
                    </p>

                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent p-0.5 mb-3">
                        <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                          <span className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                            {reviews[currentIndex].avatar}
                          </span>
                        </div>
                      </div>
                      <h4 className="font-semibold text-foreground">{reviews[currentIndex].name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {reviews[currentIndex].title}, {reviews[currentIndex].company}
                      </p>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentIndex
                  ? "bg-gradient-to-r from-primary to-accent w-6"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
