
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Github, ExternalLink, Mail, Phone, MapPin, Calendar, Code, Eye, User, Briefcase } from "lucide-react";

const Index = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e: any) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Message:', message);
    // Here you would typically handle the form submission, e.g., sending the data to a server
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero Section */}
        <section className="text-center py-20 mb-16">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Shaik Shafiya
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Full Stack Web Developer specializing in modern web technologies and user-centered design
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-gray-500">
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
        </section>

        {/* About Section */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <User className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-800">About Me</h2>
          </div>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <p className="text-lg text-gray-600 leading-relaxed">
                A passionate Full Stack Web Developer with expertise in Java, Python, JavaScript, and modern web technologies. 
                I enjoy creating seamless user experiences and building robust applications that solve real-world problems. 
                With a strong foundation in both frontend and backend development, I bring ideas to life through clean, 
                efficient code and thoughtful design.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Skills Section */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Code className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-800">Technical Skills</h2>
          </div>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="px-4 py-2 text-sm font-medium">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Projects Section */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-800">Featured Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl font-semibold text-gray-800">{project.title}</CardTitle>
                    <Badge variant="outline" className="text-xs">{project.date}</Badge>
                  </div>
                  <CardDescription className="text-blue-600 font-medium">{project.type}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Separator className="mb-4" />
                  <div className="flex gap-3">
                    <Button asChild variant="outline" size="sm" className="flex-1">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button asChild size="sm" className="flex-1">
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <Eye className="h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Mail className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-800">Get In Touch</h2>
          </div>
          <Card className="border-0 shadow-lg max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-center">Let's Work Together</CardTitle>
              <CardDescription className="text-center">
                Have a project in mind? I'd love to hear about it!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="your.email@example.com"
                    value={email}
                    onChange={handleEmailChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                    rows={5}
                    placeholder="Tell me about your project..."
                    value={message}
                    onChange={handleMessageChange}
                    required
                  />
                </div>
                <Button type="submit" className="w-full py-3 text-lg">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>

        {/* Footer Section */}
        <footer className="text-center py-8 border-t border-gray-200">
          <div className="mb-4">
            <a href="mailto:shaikshafiya06@gmail.com" className="text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-2">
              <Mail className="h-5 w-5" />
              shaikshafiya06@gmail.com
            </a>
          </div>
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Shaik Shafiya. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
