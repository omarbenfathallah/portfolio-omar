'use client';

import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ChevronDown, ArrowRight, Award, Briefcase, Code, GraduationCap } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) setActiveSection(current);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative overflow-hidden">
      {/* Ambient background effect */}
      <div 
        className="fixed inset-0 opacity-30 pointer-events-none transition-all duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(234, 179, 8, 0.15), transparent 80%)`
        }}
      />

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50 py-4' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <div className="font-playfair text-2xl font-bold tracking-tight">
            <span className="text-yellow-500">O</span>
            <span className="text-slate-100">BF</span>
          </div>
          <div className="hidden md:flex gap-10 font-dm-sans text-sm uppercase tracking-widest">
            {['home', 'about', 'experience', 'projects', 'skills', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`relative transition-colors duration-300 ${
                  activeSection === section ? 'text-yellow-500' : 'text-slate-400 hover:text-slate-100'
                }`}
              >
                {section}
                {activeSection === section && (
                  <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-yellow-500"></span>
                )}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative px-8">
        {/* Decorative elements */}
        <div className="absolute top-1/4 right-20 w-72 h-72 bg-yellow-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-20 w-96 h-96 bg-cyan-800/5 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left column */}
            <div className="space-y-8 opacity-0 animate-fadeInUp">
              <div className="inline-block">
                <span className="px-4 py-2 border border-yellow-500/30 rounded-full text-yellow-500 text-xs uppercase tracking-widest font-dm-sans">
                  Disponible pour opportunités
                </span>
              </div>
              
              <div>
                <h1 className="font-playfair text-7xl md:text-8xl font-black leading-none mb-4">
                  Omar
                  <br />
                  <span className="gradient-text">Ben Fathallah</span>
                </h1>
                <div className="flex items-center gap-4 mt-6">
                  <div className="h-px w-16 bg-yellow-500"></div>
                  <p className="font-cormorant text-2xl text-slate-300 italic">
                    Ingénieur en Génie Logiciel
                  </p>
                </div>
              </div>
              
              <p className="text-lg text-slate-400 leading-relaxed max-w-lg font-dm-sans">
                Développeur Full-Stack passionné par l&apos;architecture des systèmes et les technologies modernes. 
                Spécialisé en Spring Boot, Angular, ReactJS et DevOps.
              </p>
              
              <div className="flex gap-4 pt-4">
                <a 
                  href="mailto:benfathallah.omar@gmail.com" 
                  className="group px-8 py-4 bg-yellow-500 text-slate-950 font-dm-sans font-semibold rounded-none hover:bg-yellow-400 transition-all duration-300 flex items-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Me Contacter
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="https://github.com/omarbenfathallah" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-4 border border-slate-700 font-dm-sans font-semibold rounded-none hover:border-yellow-500 hover:text-yellow-500 transition-all duration-300"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* Right column - Contact info */}
            <div className="space-y-6 opacity-0 animate-fadeInUp stagger-2">
              <div className="glass rounded-none p-8 space-y-6 hover-lift">
                <h3 className="font-playfair text-3xl font-bold mb-6">Contact</h3>
                
                <a href="mailto:benfathallah.omar@gmail.com" className="flex items-start gap-4 group">
                  <Mail className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-sm text-slate-500 uppercase tracking-wider font-dm-sans">Email</div>
                    <div className="text-slate-200 group-hover:text-yellow-500 transition-colors">
                      benfathallah.omar@gmail.com
                    </div>
                  </div>
                </a>

                <a href="tel:+21627351545" className="flex items-start gap-4 group">
                  <Phone className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-sm text-slate-500 uppercase tracking-wider font-dm-sans">Téléphone</div>
                    <div className="text-slate-200 group-hover:text-yellow-500 transition-colors">
                      +216 27 351 545
                    </div>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-sm text-slate-500 uppercase tracking-wider font-dm-sans">Localisation</div>
                    <div className="text-slate-200">El Aouina, Tunisie</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <div className="flex gap-4">
                    <a 
                      href="https://linkedin.com/in/ben-fathallah-omar" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 border border-slate-700 hover:border-yellow-500 hover:bg-yellow-500/10 transition-all duration-300"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a 
                      href="https://github.com/omarbenfathallah" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 border border-slate-700 hover:border-yellow-500 hover:bg-yellow-500/10 transition-all duration-300"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div 
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
          onClick={() => scrollToSection('about')}
        >
          <ChevronDown className="w-8 h-8 text-yellow-500" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <span className="text-sm uppercase tracking-widest text-yellow-500 font-dm-sans">À Propos</span>
            <h2 className="font-playfair text-6xl font-black mt-4 mb-6">
              Qui suis-je ?
            </h2>
            <div className="h-1 w-24 bg-yellow-500"></div>
          </div>
          
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Profile */}
            <div className="lg:col-span-3 space-y-6">
              <div className="prose prose-invert prose-lg max-w-none">
                <p className="text-xl text-slate-300 leading-relaxed font-cormorant">
                  Diplômé en Génie Logiciel (août 2025) à ESPRIT, je suis passionné par le développement 
                  logiciel et l&apos;architecture des systèmes. Je possède une solide expérience en développement 
                  full-stack avec Spring Boot, Angular et ReactJS.
                </p>
                <p className="text-lg text-slate-400 leading-relaxed font-dm-sans">
                  Je maîtrise les environnements DevOps incluant Docker, CI/CD, GitHub Actions et les bonnes 
                  pratiques d&apos;architecture microservices. Curieux, rigoureux et orienté résultats, je conçois 
                  des solutions performantes et évolutives.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-4xl font-playfair font-bold text-yellow-500">3+</div>
                  <div className="text-sm text-slate-400 mt-2 font-dm-sans uppercase tracking-wider">Années d&apos;études</div>
                </div>
                <div className="text-center border-x border-slate-800">
                  <div className="text-4xl font-playfair font-bold text-yellow-500">10+</div>
                  <div className="text-sm text-slate-400 mt-2 font-dm-sans uppercase tracking-wider">Projets réalisés</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-playfair font-bold text-yellow-500">3</div>
                  <div className="text-sm text-slate-400 mt-2 font-dm-sans uppercase tracking-wider">Stages pro</div>
                </div>
              </div>
            </div>
            
            {/* Education & Languages */}
            <div className="lg:col-span-2 space-y-6">
              <div className="glass rounded-none p-8 hover-lift">
                <div className="flex items-center gap-3 mb-6">
                  <GraduationCap className="w-6 h-6 text-yellow-500" />
                  <h3 className="font-playfair text-2xl font-bold">Formation</h3>
                </div>
                <div className="space-y-6">
                  <div className="border-l-2 border-yellow-500 pl-4">
                    <div className="font-dm-sans font-semibold text-slate-200">Diplôme National d&apos;Ingénieur</div>
                    <div className="text-sm text-slate-400 mt-1">ESPRIT</div>
                    <div className="text-xs text-slate-500 mt-1">2022 - 2025 • Génie Logiciel</div>
                  </div>
                  <div className="border-l-2 border-slate-700 pl-4">
                    <div className="font-dm-sans font-semibold text-slate-200">Licence en Technologie</div>
                    <div className="text-sm text-slate-400 mt-1">ISET Siliana</div>
                    <div className="text-xs text-slate-500 mt-1">2019 - 2022</div>
                  </div>
                </div>
              </div>
              
              <div className="glass rounded-none p-8 hover-lift">
                <div className="flex items-center gap-3 mb-6">
                  <Award className="w-6 h-6 text-yellow-500" />
                  <h3 className="font-playfair text-2xl font-bold">Langues</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-300 font-dm-sans">Français</span>
                      <span className="text-xs text-yellow-500 uppercase tracking-wider">Professionnel</span>
                    </div>
                    <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full w-[90%] bg-yellow-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-300 font-dm-sans">Anglais</span>
                      <span className="text-xs text-yellow-500 uppercase tracking-wider">Intermédiaire</span>
                    </div>
                    <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full w-[70%] bg-yellow-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-300 font-dm-sans">Arabe</span>
                      <span className="text-xs text-yellow-500 uppercase tracking-wider">Maternel</span>
                    </div>
                    <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full w-full bg-yellow-500"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <span className="text-sm uppercase tracking-widest text-yellow-500 font-dm-sans">Parcours</span>
            <h2 className="font-playfair text-6xl font-black mt-4 mb-6">
              Expériences Professionnelles
            </h2>
            <div className="h-1 w-24 bg-yellow-500"></div>
          </div>
          
          <div className="space-y-12">
            {/* Experience 1 */}
            <div className="grid lg:grid-cols-12 gap-8 group">
              <div className="lg:col-span-4">
                <div className="sticky top-32">
                  <div className="text-sm text-yellow-500 uppercase tracking-widest font-dm-sans mb-2">
                    Déc. 2024 - Juin 2025
                  </div>
                  <h3 className="font-playfair text-3xl font-bold mb-3">Stage de fin d&apos;études</h3>
                  <p className="text-xl text-slate-400">Sharing Technologies</p>
                  <p className="text-slate-500 mt-1">BH Bank</p>
                </div>
              </div>
              <div className="lg:col-span-8">
                <div className="glass rounded-none p-8 hover-lift border-l-4 border-yellow-500">
                  <ul className="space-y-4 text-slate-300 font-dm-sans">
                    <li className="flex gap-4">
                      <ArrowRight className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                      <span>Développement complet d&apos;une application web de gestion électronique des documents (GED)</span>
                    </li>
                    <li className="flex gap-4">
                      <ArrowRight className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                      <span>Intégration à la GED existante (Alfresco) via le protocole CMIS</span>
                    </li>
                    <li className="flex gap-4">
                      <ArrowRight className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                      <span>Mise en place d&apos;une base de données dynamique avec gestion automatisée via interface admin</span>
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-slate-800">
                    {['Spring Boot', 'Angular', 'PostgreSQL', 'Tailwind CSS', 'Docker', 'JWT', 'REST API'].map(tech => (
                      <span key={tech} className="px-3 py-1.5 bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-xs font-dm-sans uppercase tracking-wider">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Experience 2 */}
            <div className="grid lg:grid-cols-12 gap-8 group">
              <div className="lg:col-span-4">
                <div className="sticky top-32">
                  <div className="text-sm text-yellow-500 uppercase tracking-widest font-dm-sans mb-2">
                    Juil. 2024 - Août 2024
                  </div>
                  <h3 className="font-playfair text-3xl font-bold mb-3">Stage d&apos;été</h3>
                  <p className="text-xl text-slate-400">Sharing Technologies</p>
                  <p className="text-slate-500 mt-1">Tunisair</p>
                </div>
              </div>
              <div className="lg:col-span-8">
                <div className="glass rounded-none p-8 hover-lift border-l-4 border-cyan-700">
                  <ul className="space-y-4 text-slate-300 font-dm-sans">
                    <li className="flex gap-4">
                      <ArrowRight className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                      <span>Développement d&apos;une application de gestion des opérations de maintenance des avions</span>
                    </li>
                    <li className="flex gap-4">
                      <ArrowRight className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                      <span>Suivi des enregistrements et génération de rapports techniques</span>
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-slate-800">
                    {['Spring Boot', 'Angular', 'REST API', 'MySQL'].map(tech => (
                      <span key={tech} className="px-3 py-1.5 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-dm-sans uppercase tracking-wider">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Experience 3 */}
            <div className="grid lg:grid-cols-12 gap-8 group">
              <div className="lg:col-span-4">
                <div className="sticky top-32">
                  <div className="text-sm text-yellow-500 uppercase tracking-widest font-dm-sans mb-2">
                    Juil. 2023 - Août 2023
                  </div>
                  <h3 className="font-playfair text-3xl font-bold mb-3">Stage d&apos;immersion</h3>
                  <p className="text-xl text-slate-400">ESPRIT</p>
                  <p className="text-slate-500 mt-1">Département SI</p>
                </div>
              </div>
              <div className="lg:col-span-8">
                <div className="glass rounded-none p-8 hover-lift border-l-4 border-slate-700">
                  <ul className="space-y-4 text-slate-300 font-dm-sans">
                    <li className="flex gap-4">
                      <ArrowRight className="w-5 h-5 text-slate-400 mt-1 flex-shrink-0" />
                      <span>Conception et implémentation des fonctionnalités CRUD</span>
                    </li>
                    <li className="flex gap-4">
                      <ArrowRight className="w-5 h-5 text-slate-400 mt-1 flex-shrink-0" />
                      <span>Développement du back-office pour une gestion efficace des données</span>
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-slate-800">
                    {['ReactJS', 'Spring Boot', 'MySQL'].map(tech => (
                      <span key={tech} className="px-3 py-1.5 bg-slate-500/10 border border-slate-500/20 text-slate-400 text-xs font-dm-sans uppercase tracking-wider">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <span className="text-sm uppercase tracking-widest text-yellow-500 font-dm-sans">Réalisations</span>
            <h2 className="font-playfair text-6xl font-black mt-4 mb-6">
              Projets Sélectionnés
            </h2>
            <div className="h-1 w-24 bg-yellow-500"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="glass rounded-none p-10 hover-lift group cursor-pointer">
              <div className="flex justify-between items-start mb-6">
                <div className="w-16 h-16 border border-yellow-500 flex items-center justify-center text-yellow-500 font-playfair text-2xl font-bold">
                  01
                </div>
                <Briefcase className="w-8 h-8 text-yellow-500 opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="font-playfair text-3xl font-bold mb-3 group-hover:text-yellow-500 transition-colors">
                Projet DevOps CI/CD
              </h3>
              <p className="text-slate-400 mb-4 font-dm-sans">Architecture Microservices • ESPRIT 2024</p>
              <ul className="space-y-3 mb-6 text-slate-300 font-dm-sans">
                <li className="flex gap-3">
                  <span className="text-yellow-500">→</span>
                  <span>Pipeline CI/CD automatisant build, tests et déploiement</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-yellow-500">→</span>
                  <span>Containerisation avec Docker et orchestration</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-yellow-500">→</span>
                  <span>Supervision avec Grafana et Prometheus</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-800">
                {['Jenkins', 'Docker', 'Microservices', 'GitHub Actions', 'SonarQube'].map(tech => (
                  <span key={tech} className="text-xs text-slate-400 font-dm-sans uppercase tracking-wider">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project 2 */}
            <div className="glass rounded-none p-10 hover-lift group cursor-pointer">
              <div className="flex justify-between items-start mb-6">
                <div className="w-16 h-16 border border-cyan-700 flex items-center justify-center text-cyan-500 font-playfair text-2xl font-bold">
                  02
                </div>
                <Code className="w-8 h-8 text-cyan-500 opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="font-playfair text-3xl font-bold mb-3 group-hover:text-cyan-500 transition-colors">
                Plateforme de gestion des stages
              </h3>
              <p className="text-slate-400 mb-4 font-dm-sans">ESPRIT 2024</p>
              <ul className="space-y-3 mb-6 text-slate-300 font-dm-sans">
                <li className="flex gap-3">
                  <span className="text-cyan-500">→</span>
                  <span>Gestion complète des utilisateurs avec opérations CRUD</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-500">→</span>
                  <span>Spring Security pour la gestion avancée des accès</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-800">
                {['Spring Boot', 'Spring Security', 'Angular', 'MySQL', 'TailwindCSS'].map(tech => (
                  <span key={tech} className="text-xs text-slate-400 font-dm-sans uppercase tracking-wider">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project 3 */}
            <div className="glass rounded-none p-10 hover-lift group cursor-pointer">
              <div className="flex justify-between items-start mb-6">
                <div className="w-16 h-16 border border-purple-700 flex items-center justify-center text-purple-500 font-playfair text-2xl font-bold">
                  03
                </div>
                <Code className="w-8 h-8 text-purple-500 opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="font-playfair text-3xl font-bold mb-3 group-hover:text-purple-500 transition-colors">
                Attack Of Zombie
              </h3>
              <p className="text-slate-400 mb-4 font-dm-sans">Jeu Mobile 3D • CGI Studio 2022</p>
              <ul className="space-y-3 mb-6 text-slate-300 font-dm-sans">
                <li className="flex gap-3">
                  <span className="text-purple-500">→</span>
                  <span>Conception et développement d&apos;un jeu mobile 3D immersif</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-500">→</span>
                  <span>Modélisation 3D et gameplay</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-800">
                {['C#', 'Unity', 'Blender', 'Animation 3D'].map(tech => (
                  <span key={tech} className="text-xs text-slate-400 font-dm-sans uppercase tracking-wider">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project 4 */}
            <div className="glass rounded-none p-10 hover-lift group cursor-pointer">
              <div className="flex justify-between items-start mb-6">
                <div className="w-16 h-16 border border-green-700 flex items-center justify-center text-green-500 font-playfair text-2xl font-bold">
                  04
                </div>
                <Code className="w-8 h-8 text-green-500 opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="font-playfair text-3xl font-bold mb-3 group-hover:text-green-500 transition-colors">
                Projet de recyclage municipal
              </h3>
              <p className="text-slate-400 mb-4 font-dm-sans">ESPRIT 2023</p>
              <ul className="space-y-3 mb-6 text-slate-300 font-dm-sans">
                <li className="flex gap-3">
                  <span className="text-green-500">→</span>
                  <span>Gestion des offres et achats pour projet de recyclage</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-500">→</span>
                  <span>Interfaces conviviales avec JavaFX et Scene Builder</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-800">
                {['JavaFX', 'Symfony', 'Bootstrap', 'PHP'].map(tech => (
                  <span key={tech} className="text-xs text-slate-400 font-dm-sans uppercase tracking-wider">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <span className="text-sm uppercase tracking-widest text-yellow-500 font-dm-sans">Expertise</span>
            <h2 className="font-playfair text-6xl font-black mt-4 mb-6">
              Compétences Techniques
            </h2>
            <div className="h-1 w-24 bg-yellow-500"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Frontend */}
            <div className="glass rounded-none p-8 border-l-4 border-yellow-500">
              <h3 className="font-playfair text-2xl font-bold mb-6 text-yellow-500">Frontend</h3>
              <div className="space-y-3">
                {['Angular', 'ReactJS', 'TypeScript', 'JavaScript', 'TailwindCSS', 'Bootstrap'].map(skill => (
                  <div key={skill} className="flex items-center justify-between group">
                    <span className="text-slate-300 font-dm-sans">{skill}</span>
                    <div className="h-px flex-1 mx-4 bg-slate-800 group-hover:bg-yellow-500/30 transition-colors"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="glass rounded-none p-8 border-l-4 border-cyan-700">
              <h3 className="font-playfair text-2xl font-bold mb-6 text-cyan-500">Backend</h3>
              <div className="space-y-3">
                {['Spring Boot', 'Node.js', 'Express.js', 'PHP', 'Symfony', 'JEE', '.NET', 'REST API'].map(skill => (
                  <div key={skill} className="flex items-center justify-between group">
                    <span className="text-slate-300 font-dm-sans">{skill}</span>
                    <div className="h-px flex-1 mx-4 bg-slate-800 group-hover:bg-cyan-500/30 transition-colors"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Databases */}
            <div className="glass rounded-none p-8 border-l-4 border-purple-700">
              <h3 className="font-playfair text-2xl font-bold mb-6 text-purple-500">Bases de données</h3>
              <div className="space-y-3">
                {['MySQL', 'PostgreSQL', 'MongoDB'].map(skill => (
                  <div key={skill} className="flex items-center justify-between group">
                    <span className="text-slate-300 font-dm-sans">{skill}</span>
                    <div className="h-px flex-1 mx-4 bg-slate-800 group-hover:bg-purple-500/30 transition-colors"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* DevOps */}
            <div className="glass rounded-none p-8 border-l-4 border-green-700">
              <h3 className="font-playfair text-2xl font-bold mb-6 text-green-500">DevOps & Architecture</h3>
              <div className="space-y-3">
                {['Docker', 'Jenkins', 'GitHub Actions', 'CI/CD', 'Microservices'].map(skill => (
                  <div key={skill} className="flex items-center justify-between group">
                    <span className="text-slate-300 font-dm-sans">{skill}</span>
                    <div className="h-px flex-1 mx-4 bg-slate-800 group-hover:bg-green-500/30 transition-colors"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tests */}
            <div className="glass rounded-none p-8 border-l-4 border-orange-700">
              <h3 className="font-playfair text-2xl font-bold mb-6 text-orange-500">Tests & Qualité</h3>
              <div className="space-y-3">
                {['JUnit', 'Mockito', 'Postman', 'Tests unitaires'].map(skill => (
                  <div key={skill} className="flex items-center justify-between group">
                    <span className="text-slate-300 font-dm-sans">{skill}</span>
                    <div className="h-px flex-1 mx-4 bg-slate-800 group-hover:bg-orange-500/30 transition-colors"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="glass rounded-none p-8 border-l-4 border-pink-700">
              <h3 className="font-playfair text-2xl font-bold mb-6 text-pink-500">Outils & Méthodologies</h3>
              <div className="space-y-3">
                {['Git', 'GitHub', 'Jira', 'Trello', 'Agile/Scrum'].map(skill => (
                  <div key={skill} className="flex items-center justify-between group">
                    <span className="text-slate-300 font-dm-sans">{skill}</span>
                    <div className="h-px flex-1 mx-4 bg-slate-800 group-hover:bg-pink-500/30 transition-colors"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-20">
            <span className="text-sm uppercase tracking-widest text-yellow-500 font-dm-sans">Contact</span>
            <h2 className="font-playfair text-6xl font-black mt-4 mb-6">
              Travaillons Ensemble
            </h2>
            <div className="h-1 w-24 bg-yellow-500 mx-auto"></div>
          </div>
          
          <p className="text-2xl text-slate-300 mb-16 max-w-2xl mx-auto font-cormorant italic">
            Intéressé par mon profil ? N&apos;hésitez pas à me contacter pour discuter de vos projets.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href="mailto:benfathallah.omar@gmail.com" 
              className="group px-10 py-5 bg-yellow-500 text-slate-950 font-dm-sans font-bold rounded-none hover:bg-yellow-400 transition-all duration-300 flex items-center justify-center gap-3"
            >
              <Mail className="w-6 h-6" />
              Envoyer un Email
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="https://github.com/omarbenfathallah" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-10 py-5 border-2 border-slate-700 font-dm-sans font-bold rounded-none hover:border-yellow-500 hover:text-yellow-500 transition-all duration-300 flex items-center justify-center gap-3"
            >
              <Github className="w-6 h-6" />
              Voir mon GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="font-playfair text-2xl font-bold">
              <span className="text-yellow-500">O</span>
              <span className="text-slate-100">BF</span>
            </div>
            <div className="text-slate-500 font-dm-sans text-sm">
              &copy; 2025 Omar Ben Fathallah. Tous droits réservés.
            </div>
            <div className="flex gap-6">
              <a 
                href="https://linkedin.com/in/ben-fathallah-omar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-yellow-500 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/omarbenfathallah" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-yellow-500 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="mailto:benfathallah.omar@gmail.com"
                className="text-slate-400 hover:text-yellow-500 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}