
import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Calendar, Award, Briefcase, User, Code, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Index = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const skills = [
    { name: 'Java', level: 90 },
    { name: 'Python', level: 85 },
    { name: 'JavaScript', level: 88 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Spring Boot', level: 80 },
    { name: 'Django', level: 75 },
    { name: 'SQL', level: 82 },
    { name: 'Git', level: 85 },
  ];

  const projects = [
    {
      title: 'Sudocode Match Puzzle',
      description: 'A mobile-friendly puzzle game using HTML, CSS, and JavaScript with animations, timers, and sound effects.',
      tech: ['JavaScript', 'HTML', 'CSS'],
      github: 'https://github.com/ShaikShafiya06/Sudecode-Match-Puzzle',
      date: 'Jun 2025',
      type: 'Solo Project'
    },
    {
      title: 'Ice Cream Website',
      description: 'Responsive branding site featuring image gallery, video integration, navbar, and contact form.',
      tech: ['HTML', 'CSS', 'Responsive Design'],
      github: 'https://github.com/ShaikShafiya06',
      live: 'http://127.0.0.1:5500/index.html',
      date: 'Jun 2025',
      type: 'Web Project'
    }
  ];

  const certifications = [
    { name: 'IBM Data Science', provider: 'Coursera', icon: '📊' },
    { name: 'Java Web Development', provider: 'TapAcademy', icon: '☕' },
    { name: 'Linux Fundamentals', provider: 'edX', icon: '🐧' }
  ];

  const internships = [
    {
      title: 'Python Full Stack Intern',
      company: 'Think Champ Pvt. Ltd.',
      period: 'May–Jun 2024',
      description: 'Used Django and frontend technologies to build and test web applications. Collaborated with teams and communicated with clients.'
    },
    {
      title: 'Web Development Intern',
      company: 'Tap Academy',
      period: 'May–Jun 2025',
      description: 'Built responsive UIs with HTML/CSS/JS. Enhanced interactivity with Java-based components.'
    }
  ];

  const achievements = [
    { title: 'Top 100 – Great AppSec Hackathon 2024', icon: '🥇', description: 'CTF Round' },
    { title: '2nd Prize – Electro Yantra Project Expo', icon: '🥈', description: 'Project Excellence' },
    { title: 'Event Host – College Event Coordinator', icon: '🎤', description: 'Leadership' }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navigationItems = [
    { id: 'home', label: 'Home', icon: User },
    { id: 'about', label: 'About', icon: FileText },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'experience', label: 'Experience', icon: Calendar },
    { id: 'achievements', label: 'Achievements', icon: Award },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Mobile Menu Toggle */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="bg-white/90 backdrop-blur-sm"
        >
          {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
      </div>

      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full w-80 bg-white/95 backdrop-blur-sm shadow-xl z-40 transform transition-transform duration-300 ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0`}>
        <div className="p-6 space-y-6">
          {/* Profile Section */}
          <div className="text-center space-y-4">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold">
              SS
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Shaik Shafiya</h1>
              <p className="text-lg text-blue-600 font-medium">Frontend Developer</p>
              <p className="text-sm text-gray-600 flex items-center justify-center gap-1">
                <MapPin className="h-3 w-3" />
                Kurnool, India
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 text-sm">
            <a href="tel:+919182932709" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors">
              <Phone className="h-4 w-4" />
              +91 9182932709
            </a>
            <a href="mailto:shaikshafiya4b2@gmail.com" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors">
              <Mail className="h-4 w-4" />
              shaikshafiya4b2@gmail.com
            </a>
            <a href="https://linkedin.com/in/shafiya-shaik-bb6a942b3" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors">
              <Linkedin className="h-4 w-4" />
              LinkedIn Profile
            </a>
            <a href="https://github.com/ShaikShafiya06" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors">
              <Github className="h-4 w-4" />
              GitHub Profile
            </a>
          </div>

          {/* Languages & Hobbies */}
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Languages</h3>
              <p className="text-sm text-gray-600">English, Hindi, Telugu, Urdu</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Hobbies</h3>
              <p className="text-sm text-gray-600">Music, Gardening, Dance, Photography</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg text-left transition-colors ${
                    activeSection === item.id
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:ml-80 min-h-screen">
        <div className="max-w-4xl mx-auto p-6 space-y-16">
          {/* Home Section */}
          <section id="home" className="pt-16 lg:pt-24">
            <div className="text-center space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 animate-fade-in">
                Welcome to My Portfolio
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 italic">
                "Turning designs into interactive experiences."
              </p>
              <Button 
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg"
              >
                View My Work
              </Button>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 border-b-2 border-blue-600 pb-2">About Me</h2>
            <Card>
              <CardContent className="p-6">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Detail-oriented and passionate Full Stack Web Developer with hands-on experience in building responsive web applications using Java, Spring Boot, Django, and modern front-end technologies. Strong communicator with excellent problem-solving skills and the ability to collaborate effectively with customers and team members. Committed to writing clean, scalable code with a focus on usability and design aesthetics.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Education</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">B.Tech in ECE</h4>
                      <p className="text-gray-600">Ashoka Women's Engineering College, Kurnool</p>
                      <p className="text-sm text-gray-500">CGPA: 7.5 (2021–2025)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Intermediate (MPC)</h4>
                      <p className="text-gray-600">DEEKSHA Junior College, Yemmiganur</p>
                      <p className="text-sm text-gray-500">CGPA: 7.5 (2019–2021)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">SSC</h4>
                      <p className="text-gray-600">AP Model School, Julekal</p>
                      <p className="text-sm text-gray-500">CGPA: 9.7 (2013–2019)</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Skills Section */}
          <section id="skills" className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 border-b-2 border-blue-600 pb-2">Skills</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-900">{skill.name}</span>
                    <span className="text-sm text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Certifications</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {certifications.map((cert) => (
                  <Card key={cert.name} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-4">
                      <div className="text-3xl mb-2">{cert.icon}</div>
                      <h4 className="font-semibold text-gray-900">{cert.name}</h4>
                      <p className="text-sm text-gray-600">{cert.provider}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 border-b-2 border-blue-600 pb-2">Projects</h2>
            <div className="grid gap-6">
              {projects.map((project) => (
                <Card key={project.title} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <div className="flex gap-2">
                        <Badge variant="outline">{project.type}</Badge>
                        <Badge variant="secondary">{project.date}</Badge>
                      </div>
                    </div>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline">{tech}</Badge>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          GitHub
                        </a>
                      </Button>
                      {project.live && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.live} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Preview
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 border-b-2 border-blue-600 pb-2">Experience</h2>
            <div className="space-y-6">
              {internships.map((internship) => (
                <Card key={internship.title}>
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <CardTitle className="text-xl">{internship.title}</CardTitle>
                      <Badge variant="secondary">{internship.period}</Badge>
                    </div>
                    <CardDescription className="text-lg font-medium text-blue-600">
                      {internship.company}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{internship.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Achievements Section */}
          <section id="achievements" className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 border-b-2 border-blue-600 pb-2">Achievements</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement) => (
                <Card key={achievement.title} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{achievement.icon}</div>
                    <h3 className="font-semibold text-gray-900 mb-2">{achievement.title}</h3>
                    <p className="text-sm text-gray-600">{achievement.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 border-b-2 border-blue-600 pb-2">Contact Me</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Get In Touch</CardTitle>
                  <CardDescription>
                    I'd love to hear from you! Send me a message and I'll get back to you soon.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <Textarea id="message" placeholder="Your message..." rows={4} />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Send Message
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-gray-600">+91 9182932709</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-600">shaikshafiya4b2@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-gray-600">Kurnool, India</p>
                    </div>
                  </div>
                  <div className="pt-4">
                    <p className="font-medium mb-3">Follow Me</p>
                    <div className="flex gap-4">
                      <Button variant="outline" size="icon" asChild>
                        <a href="https://github.com/ShaikShafiya06" target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button variant="outline" size="icon" asChild>
                        <a href="https://linkedin.com/in/shafiya-shaik-bb6a942b3" target="_blank" rel="noopener noreferrer">
                          <Linkedin className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8 mt-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p>&copy; 2025 Shaik Shafiya. All rights reserved.</p>
            <p className="text-gray-400 mt-2">Built with React & Tailwind CSS</p>
          </div>
        </footer>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default Index;
