import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Mail, Phone, MapPin, Calendar, Code, Eye } from "lucide-react";

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
      github: 'https://github.com/ShaikShafiya06/skecommerce',
      live: 'https://shaikshafiya06.github.io/skecommerce/',
      date: 'Dec 2024',
      type: 'Full Stack Project'
    },
    {
      title: 'Ice Cream Website',
      description: 'Responsive branding site featuring image gallery, video integration, navbar, and contact form.',
      tech: ['HTML', 'CSS', 'Responsive Design'],
      github: 'https://github.com/ShaikShafiya06/Ice-Cream-Website',
      live: 'https://shaikshafiya06.github.io/Ice-Cream-Website/',
      date: 'Jun 2025',
      type: 'Web Project'
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio showcasing projects, skills, and professional experience with modern design.',
      tech: ['React', 'TypeScript', 'Tailwind CSS'],
      github: 'https://github.com/ShaikShafiya06/portfolio',
      live: 'https://shaikshafiya06.github.io/portfolio/',
      date: 'Jan 2025',
      type: 'Frontend Project'
    }
  ];

  return (
    <div className="container mx-auto p-4">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">Shaik Shafiya</h1>
        <p className="text-lg text-gray-700">
          Full Stack Web Developer specializing in frontend development.
        </p>
      </section>

      {/* About Section */}
      <section className="py-8">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="text-gray-700">
          A passionate Full Stack Web Developer with expertise in Java, Python, JavaScript, and modern web technologies.
        </p>
      </section>

      {/* Skills Section */}
      <section className="py-8">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2">
          <Badge>JavaScript</Badge>
          <Badge>Java</Badge>
          <Badge>Python</Badge>
          <Badge>React</Badge>
          <Badge>HTML</Badge>
          <Badge>CSS</Badge>
          {/* Add more skills here */}
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-8">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.type} - {project.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <Badge key={i}>{tech}</Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button asChild variant="outline">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                  <Button asChild variant="outline">
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
      <section className="py-8">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="mt-1 p-2 w-full border rounded-md"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              className="mt-1 p-2 w-full border rounded-md"
              rows={4}
              value={message}
              onChange={handleMessageChange}
              required
            />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </section>

      {/* Footer Section */}
      <footer className="text-center py-4 text-gray-500">
        <div className="mb-2">
          <a href="mailto:shaikshafiya06@gmail.com" className="hover:underline flex items-center justify-center gap-1">
            <Mail className="h-4 w-4 mr-1 inline-block" />
            shaikshafiya06@gmail.com
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Shaik Shafiya. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
