
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
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-200/30 to-yellow-200/30 rounded-full blur-3xl -translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-200/30 to-purple-200/30 rounded-full blur-3xl translate-x-48 translate-y-48"></div>
      
      {/* Mobile Menu Toggle */}
      <div className="lg:hidden fixed top-6 left-6 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="bg-white/90 backdrop-blur-sm shadow-lg border-orange-200"
        >
          {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
      </div>

      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full w-80 bg-white/95 backdrop-blur-md shadow-2xl z-40 transform transition-transform duration-300 border-r border-orange-100 ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0`}>
        <div className="p-8 space-y-8 h-full overflow-y-auto">
          {/* Profile Section */}
          <div className="text-center space-y-6">
            <div className="relative">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-2xl ring-4 ring-orange-200/50 relative">
                <img 
                  src="/lovable-uploads/2cfda9f9-bbe6-49eb-9ad9-cff40a9ec421.png" 
                  alt="Shaik Shafiya - Frontend Developer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 to-transparent"></div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-4 border-white shadow-lg animate-pulse"></div>
              <div className="absolute -top-1 -left-1 w-4 h-4 bg-orange-400 rounded-full border-2 border-white"></div>
              <div className="absolute top-2 right-0 w-3 h-3 bg-yellow-400 rounded-full border-2 border-white"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Shaik Shafiya</h1>
              <p className="text-lg text-orange-600 font-semibold">Frontend Developer</p>
              <p className="text-sm text-gray-600 flex items-center justify-center gap-1 mt-2">
                <MapPin className="h-3 w-3" />
                Kurnool, India
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 text-sm">
            <a href="tel:+919182932709" className="flex items-center gap-3 text-gray-700 hover:text-orange-600 transition-colors p-2 rounded-lg hover:bg-orange-50">
              <Phone className="h-4 w-4 text-orange-500" />
              +91 9182932709
            </a>
            <a href="mailto:shaikshafiya4b2@gmail.com" className="flex items-center gap-3 text-gray-700 hover:text-orange-600 transition-colors p-2 rounded-lg hover:bg-orange-50">
              <Mail className="h-4 w-4 text-orange-500" />
              shaikshafiya4b2@gmail.com
            </a>
            <a href="https://linkedin.com/in/shafiya-shaik-bb6a942b3" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-700 hover:text-orange-600 transition-colors p-2 rounded-lg hover:bg-orange-50">
              <Linkedin className="h-4 w-4 text-orange-500" />
              LinkedIn Profile
            </a>
            <a href="https://github.com/ShaikShafiya06" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-700 hover:text-orange-600 transition-colors p-2 rounded-lg hover:bg-orange-50">
              <Github className="h-4 w-4 text-orange-500" />
              GitHub Profile
            </a>
          </div>

          {/* Languages & Hobbies */}
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-4 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">Languages</h3>
              <p className="text-sm text-gray-600">English, Hindi, Telugu, Urdu</p>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-xl">
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
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-lg'
                      : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'
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
        <div className="max-w-5xl mx-auto p-8 space-y-20">
          {/* Home Section */}
          <section id="home" className="pt-20 lg:pt-32">
            <div className="text-center space-y-8 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-10 w-24 h-24 bg-gradient-to-br from-orange-300 to-yellow-300 rounded-full opacity-20 blur-xl"></div>
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 animate-fade-in">
                Hey There,
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-600">
                  I'm Shafiya
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 italic max-w-2xl mx-auto">
                "I design beautifully simple things, and I love what I do."
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  onClick={() => scrollToSection('projects')}
                  className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  View My Work
                </Button>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex flex-col items-center">
                    <span className="text-2xl font-bold text-orange-500">15+</span>
                    <span>Projects</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-2xl font-bold text-orange-500">2+</span>
                    <span>Internships</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="space-y-12">
            <h2 className="text-4xl font-bold text-gray-900 text-center">
              What do I <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">help?</span>
            </h2>
            <Card className="border-0 shadow-2xl bg-white/70 backdrop-blur-sm">
              <CardContent className="p-8">
                <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                  Detail-oriented and passionate Full Stack Web Developer with hands-on experience in building responsive web applications using Java, Spring Boot, Django, and modern front-end technologies. Strong communicator with excellent problem-solving skills and the ability to collaborate effectively with customers and team members. Committed to writing clean, scalable code with a focus on usability and design aesthetics.
                </p>
                
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Education Journey</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-6 p-4 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl">
                    <div className="w-3 h-3 bg-orange-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">B.Tech in ECE</h4>
                      <p className="text-gray-600">Ashoka Women's Engineering College, Kurnool</p>
                      <p className="text-sm text-orange-600 font-medium">CGPA: 7.5 (2021–2025)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Intermediate (MPC)</h4>
                      <p className="text-gray-600">DEEKSHA Junior College, Yemmiganur</p>
                      <p className="text-sm text-blue-600 font-medium">CGPA: 7.5 (2019–2021)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
                    <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">SSC</h4>
                      <p className="text-gray-600">AP Model School, Julekal</p>
                      <p className="text-sm text-green-600 font-medium">CGPA: 9.7 (2013–2019)</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Skills Section */}
          <section id="skills" className="space-y-12">
            <h2 className="text-4xl font-bold text-gray-900 text-center">My Expertise</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-4 p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-900 text-lg">{skill.name}</span>
                    <span className="text-sm text-orange-600 font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-orange-500 to-yellow-500 h-3 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="mt-16">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Certifications</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {certifications.map((cert, index) => (
                  <Card key={cert.name} className="text-center hover:shadow-2xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm hover:scale-105">
                    <CardContent className="p-6">
                      <div className="text-4xl mb-4">{cert.icon}</div>
                      <h4 className="font-semibold text-gray-900">{cert.name}</h4>
                      <p className="text-sm text-gray-600">{cert.provider}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="space-y-12">
            <h2 className="text-4xl font-bold text-gray-900 text-center">My Latest Works</h2>
            <div className="grid gap-8">
              {projects.map((project, index) => (
                <Card key={project.title} className="hover:shadow-2xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm hover:scale-[1.02]">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <CardTitle className="text-2xl text-gray-900">{project.title}</CardTitle>
                      <div className="flex gap-2">
                        <Badge variant="outline" className="border-orange-300 text-orange-700 bg-orange-50">{project.type}</Badge>
                        <Badge variant="secondary" className="bg-gray-100">{project.date}</Badge>
                      </div>
                    </div>
                    <CardDescription className="text-gray-600 text-base">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-3 mb-6">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="border-blue-300 text-blue-700 bg-blue-50">{tech}</Badge>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <Button variant="outline" size="sm" asChild className="border-orange-300 text-orange-700 hover:bg-orange-50">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          GitHub
                        </a>
                      </Button>
                      {project.live && (
                        <Button variant="outline" size="sm" asChild className="border-green-300 text-green-700 hover:bg-green-50">
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
          <section id="experience" className="space-y-12">
            <h2 className="text-4xl font-bold text-gray-900 text-center">My Work Experience</h2>
            <div className="space-y-8">
              {internships.map((internship, index) => (
                <Card key={internship.title} className="border-0 bg-white/70 backdrop-blur-sm shadow-lg">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <CardTitle className="text-2xl text-gray-900">{internship.title}</CardTitle>
                      <Badge variant="secondary" className="bg-orange-100 text-orange-700">{internship.period}</Badge>
                    </div>
                    <CardDescription className="text-lg font-medium text-orange-600">
                      {internship.company}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed">{internship.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Achievements Section */}
          <section id="achievements" className="space-y-12">
            <h2 className="text-4xl font-bold text-gray-900 text-center">Achievements</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <Card key={achievement.title} className="text-center hover:shadow-2xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm hover:scale-105">
                  <CardContent className="p-8">
                    <div className="text-5xl mb-6">{achievement.icon}</div>
                    <h3 className="font-semibold text-gray-900 mb-3 text-lg">{achievement.title}</h3>
                    <p className="text-sm text-gray-600">{achievement.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="space-y-12">
            <h2 className="text-4xl font-bold text-gray-900 text-center">
              Let's make something <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">amazing together.</span>
            </h2>
            <div className="grid lg:grid-cols-2 gap-12">
              <Card className="border-0 shadow-2xl bg-white/70 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl">Get In Touch</CardTitle>
                  <CardDescription className="text-base">
                    I'd love to hear from you! Send me a message and I'll get back to you soon.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" className="border-gray-300" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="your.email@example.com" className="border-gray-300" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea id="message" placeholder="Your message..." rows={4} className="border-gray-300" />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white py-3 rounded-xl">
                    Send Message
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-2xl bg-white/70 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-xl">
                    <Phone className="h-6 w-6 text-orange-600" />
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <p className="text-gray-600">+91 9182932709</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl">
                    <Mail className="h-6 w-6 text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-gray-600">shaikshafiya4b2@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-green-50 rounded-xl">
                    <MapPin className="h-6 w-6 text-green-600" />
                    <div>
                      <p className="font-medium text-gray-900">Location</p>
                      <p className="text-gray-600">Kurnool, India</p>
                    </div>
                  </div>
                  <div className="pt-6">
                    <p className="font-medium mb-4 text-gray-900">Follow Me</p>
                    <div className="flex gap-4">
                      <Button variant="outline" size="icon" asChild className="border-gray-300 hover:bg-gray-50">
                        <a href="https://github.com/ShaikShafiya06" target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button variant="outline" size="icon" asChild className="border-gray-300 hover:bg-gray-50">
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
        <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 mt-20">
          <div className="max-w-4xl mx-auto px-8 text-center">
            <p className="text-lg">&copy; 2025 Shaik Shafiya. All rights reserved.</p>
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
