import { Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-primary border-t border-primary-foreground/10">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Tejas Kashid. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/tejas-kashid-b670b078"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/60 hover:text-accent transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:tejas.kashid@yahoo.com"
              className="text-primary-foreground/60 hover:text-accent transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <div className="flex items-center gap-1 text-primary-foreground/60 text-sm">
            Built with <Heart className="w-4 h-4 text-white fill-white" /> by Viki
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
