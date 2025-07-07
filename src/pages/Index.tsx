
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Github, ExternalLink, Mail, Phone, MapPin, Calendar, Code, Eye, User, Briefcase } from "lucide-react";

const Index = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Message:', message);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setEmail('');
      setMessage('');
      setIsSubmitted(false);
    }, 3000);
  };

  const projects = [
    {
      title: 'SKEcommerce',
      description: 'Full-stack e-commerce platform with user authentication, product management, and secure payment integration.',
      tech: ['Java', 'Spring Boot', 'MySQL', 'Bootstrap'],
      github: 'https://github.com/ShaikShafiya06/SKEcommerce',
      live: 'https://shaikshafiya06.github.io/SKEcommerce/',
      date: 'Dec 2024',
      type: 'Full Stack Project'
    },
    {
      title: 'Ice Cream Website',
      description: 'Responsive branding site featuring image gallery, video integration, navbar, and contact form.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      github: 'https://github.com/ShaikShafiya06/Ice-Cream-Website',
      live: 'https://shaikshafiya06.github.io/Ice-Cream-Website/',
      date: 'Jun 2025',
      type: 'Web Project'
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio showcasing projects, skills, and professional experience with modern design.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Shadcn UI'],
      github: 'https://github.com/ShaikShafiya06/portfolio',
      live: 'https://shaikshafiya06.github.io/portfolio/',
      date: 'Jan 2025',
      type: 'Frontend Project'
    }
  ];

  const skills = [
    'JavaScript', 'Java', 'Python', 'React', 'HTML', 'CSS', 
    'Spring Boot', 'MySQL', 'Bootstrap', 'Tailwind CSS', 
    'TypeScript', 'Git', 'GitHub', 'Responsive Design'
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          className="w-full h-full object-cover opacity-30"
        >
          <source src="https://storage.googleapis.com/gpt-engineer-file-uploads/t7tm4T4X3RPyx5eElAvyiGlygTm2/8ad74d43-fffb-4244-b2f7-6543436a0511" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/80 to-slate-800/80"></div>
      </div>

      {/* Tech Network Background Pattern */}
      <div className="absolute inset-0 opacity-20 z-1">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-400/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center px-6 md:px-12 py-6">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">SS</span>
          </div>
          <span className="text-white font-semibold text-xl">SHAFIYA</span>
        </div>
        
        <div className="hidden md:flex space-x-8">
          <button onClick={() => scrollToSection('home')} className="text-white hover:text-cyan-400 transition-colors px-4 py-2 rounded-lg hover:bg-white/10">
            Home
          </button>
          <button onClick={() => scrollToSection('projects')} className="text-white hover:text-cyan-400 transition-colors px-4 py-2 rounded-lg hover:bg-white/10">
            Projects
          </button>
          <button onClick={() => scrollToSection('skills')} className="text-white hover:text-cyan-400 transition-colors px-4 py-2 rounded-lg hover:bg-white/10">
            Skills
          </button>
          <button onClick={() => scrollToSection('contact')} className="text-white hover:text-cyan-400 transition-colors px-4 py-2 rounded-lg hover:bg-white/10">
            Contact
          </button>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8 max-w-6xl relative z-10">
        {/* Hero Section */}
        <section id="home" className="py-20 mb-16">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Profile Photo - Left Side */}
            <div className="lg:w-1/3 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-gradient-to-r from-cyan-400 to-blue-500 shadow-2xl">
                  <img 
                    src="/lovable-uploads/profile-new.png" 
                    alt="Shaik Shafiya"
                    className="w-full h-full object-cover object-center"
                    style={{ imageRendering: 'crisp-edges' }}
                  />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400/20 to-blue-500/20"></div>
              </div>
            </div>

            {/* Content - Right Side */}
            <div className="lg:w-2/3 text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Full Stack Developer
              </h1>
              <p className="text-xl md:text-2xl text-blue-200 mb-12 max-w-3xl leading-relaxed">
                Building robust web applications with Java Spring & Modern Frontend Technologies
              </p>
              <Button 
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                View Projects
              </Button>
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-blue-200 mt-12">
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  <span>shaikshafiya06@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Github className="h-5 w-5" />
                  <span>ShaikShafiya06</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <User className="h-8 w-8 text-cyan-400" />
            <h2 className="text-3xl font-bold text-white">About Me</h2>
          </div>
          <Card className="border-0 shadow-2xl bg-white/10 backdrop-blur-lg">
            <CardContent className="p-8">
              <p className="text-lg text-blue-100 leading-relaxed">
                A passionate Full Stack Web Developer with expertise in Java, Python, JavaScript, and modern web technologies. 
                I enjoy creating seamless user experiences and building robust applications that solve real-world problems. 
                With a strong foundation in both frontend and backend development, I bring ideas to life through clean, 
                efficient code and thoughtful design.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Code className="h-8 w-8 text-cyan-400" />
            <h2 className="text-3xl font-bold text-white">Technical Skills</h2>
          </div>
          <Card className="border-0 shadow-2xl bg-white/20 backdrop-blur-lg">
            <CardContent className="p-8">
              <div className="flex flex-wrap gap-4">
                {skills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="px-6 py-3 text-base font-semibold bg-gradient-to-r from-cyan-500/30 to-blue-500/30 text-white border-2 border-cyan-400/50 hover:bg-cyan-400/40 hover:border-cyan-300 transition-all duration-300 shadow-lg"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="h-8 w-8 text-cyan-400" />
            <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 bg-white/10 backdrop-blur-lg hover:bg-white/15">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl font-semibold text-white">{project.title}</CardTitle>
                    <Badge variant="outline" className="text-xs text-cyan-400 border-cyan-400">{project.date}</Badge>
                  </div>
                  <CardDescription className="text-cyan-300 font-medium">{project.type}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-100 mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="text-xs bg-blue-500/20 text-blue-200 border-blue-400/30">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Separator className="mb-4 bg-blue-400/30" />
                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                      onClick={() => window.open(project.github, '_blank', 'noopener,noreferrer')}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </Button>
                    <Button 
                      size="sm" 
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                      onClick={() => window.open(project.live, '_blank', 'noopener,noreferrer')}
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Mail className="h-8 w-8 text-cyan-400" />
            <h2 className="text-3xl font-bold text-white">Get In Touch</h2>
          </div>
          <Card className="border-0 shadow-2xl max-w-2xl mx-auto bg-white/10 backdrop-blur-lg">
            <CardHeader>
              <CardTitle className="text-center text-white">Let's Work Together</CardTitle>
              <CardDescription className="text-center text-blue-200">
                Have a project in mind? I'd love to hear about it!
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="text-green-400 text-lg font-semibold mb-2">Message Sent Successfully!</div>
                  <p className="text-blue-200">Thank you for reaching out. I'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-cyan-200 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-3 border border-blue-400/30 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all bg-white/10 text-white placeholder-blue-300"
                      placeholder="your.email@example.com"
                      value={email}
                      onChange={handleEmailChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-cyan-200 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="w-full p-3 border border-blue-400/30 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all resize-none bg-white/10 text-white placeholder-blue-300"
                      rows={5}
                      placeholder="Tell me about your project..."
                      value={message}
                      onChange={handleMessageChange}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full py-3 text-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600">
                    Send Message
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </section>

        {/* Footer Section */}
        <footer className="text-center py-8 border-t border-blue-400/30">
          <div className="mb-4">
            <a href="mailto:shaikshafiya06@gmail.com" className="text-cyan-400 hover:text-cyan-300 transition-colors inline-flex items-center gap-2">
              <Mail className="h-5 w-5" />
              shaikshafiya06@gmail.com
            </a>
          </div>
          <p className="text-blue-200">
            &copy; {new Date().getFullYear()} Shaik Shafiya. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
