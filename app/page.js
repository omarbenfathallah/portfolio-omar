"use client";
import { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  ArrowRight,
  Award,
  Briefcase,
  Code,
  GraduationCap,
  Download,
  Calendar,
} from "lucide-react";
import { useLanguage } from "./contexts/LanguageContext";
import { translations } from "./translations/translation";
import LanguageToggle from "./components/LanguageToggle";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = [
        "home",
        "about",
        "experience",
        "projects",
        "skills",
        "contact",
      ];
      const current = sections.find((section) => {
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

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative overflow-hidden">
      {/* Enhanced ambient background effect */}
      <div
        className="fixed inset-0 opacity-30 pointer-events-none transition-all duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(234, 179, 8, 0.15), transparent 80%)`,
        }}
      />

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-slate-950/95 backdrop-blur-xl border-b border-slate-800/50 py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center">
          <div
            className="font-playfair text-2xl font-bold tracking-tight cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            <span className="text-yellow-500">O</span>
            <span className="text-slate-100">BF</span>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex gap-10 font-dm-sans text-sm uppercase tracking-widest items-center">
            {Object.values(t.nav).map((section, index) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`relative transition-colors duration-300 ${
                  activeSection === section
                    ? "text-yellow-500"
                    : "text-slate-400 hover:text-slate-100"
                }`}
              >
                {section}
                {activeSection === section && (
                  <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-yellow-500"></span>
                )}
              </button>
            ))}
            <LanguageToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-3">
            <LanguageToggle />
            <button
              className="text-slate-100 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`block h-0.5 w-full bg-current transition-all ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
                ></span>
                <span
                  className={`block h-0.5 w-full bg-current transition-all ${isMenuOpen ? "opacity-0" : ""}`}
                ></span>
                <span
                  className={`block h-0.5 w-full bg-current transition-all ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-950/98 backdrop-blur-xl border-b border-slate-800">
            <div className="px-6 py-4 space-y-3">
              {Object.values(t.nav).map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left py-2 uppercase tracking-widest text-sm transition-colors ${
                    activeSection === section
                      ? "text-yellow-500"
                      : "text-slate-400"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative px-6 md:px-8 pt-20"
      >
        <div className="absolute top-1/4 right-20 w-72 h-72 bg-yellow-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-20 w-96 h-96 bg-cyan-800/5 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* LEFT COLUMN */}
            <div className="space-y-6 md:space-y-8 opacity-0 animate-fadeInUp">
              <span className="px-4 py-2 border border-yellow-500/30 rounded-full text-yellow-500 text-xs uppercase tracking-widest font-dm-sans inline-flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></span>
                {t.hero.available}
              </span>

              <div>
                <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-black leading-none mb-4">
                  {t.hero.name}
                  <br />
                  <span className="gradient-text">{t.hero.surname}</span>
                </h1>
                <div className="flex items-center gap-4 mt-6">
                  <div className="h-px w-16 bg-yellow-500"></div>
                  <p className="font-cormorant text-xl md:text-2xl text-slate-300 italic">
                    {t.hero.title}
                  </p>
                </div>
              </div>

              <p className="text-base md:text-lg text-slate-400 leading-relaxed max-w-lg font-dm-sans">
                {t.hero.description}
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Calendar className="w-4 h-4 text-yellow-500" />
                  <span>{t.hero.yearsStudy}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Briefcase className="w-4 h-4 text-yellow-500" />
                  <span>{t.hero.internships}</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=benfathallah.omar@gmail.com&su=Contact%20depuis%20portfolio&body=Bonjour%20Omar,"
                  className="group px-6 md:px-8 py-3 md:py-4 bg-yellow-500 text-slate-950 font-dm-sans font-semibold hover:bg-yellow-400 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  {t.hero.contactMe}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="/cv/CV_Omar_Ben_Fathallah.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-6 md:px-8 py-3 md:py-4 border border-slate-700 font-dm-sans font-semibold hover:border-yellow-500 hover:text-yellow-500 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  {t.hero.downloadCV}
                </a>
              </div>

              {/* Socials */}
              <div className="flex gap-3 pt-2">
                <a
                  href="https://linkedin.com/in/ben-fathallah-omar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 border border-slate-700 hover:border-yellow-500 hover:bg-yellow-500/10 transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com/omarbenfathallah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 border border-slate-700 hover:border-yellow-500 hover:bg-yellow-500/10 transition-all"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-6 opacity-0 animate-fadeInUp stagger-2">
              {/* Photo */}
              <div className="glass p-6 md:p-8 hover-lift">
                <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-cyan-700 transform rotate-6"></div>
                  <div className="relative w-full h-full overflow-hidden border-4 border-slate-950">
                    <img
                      src="/images/omar_cv_pic.PNG"
                      alt="Omar Ben Fathallah"
                      className="w-full h-full object-center transition-all duration-500"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="font-playfair text-2xl font-bold text-slate-100">
                    {t.hero.name} {t.hero.surname}
                  </h3>
                  <p className="text-yellow-500 font-dm-sans text-sm mt-2">
                    {t.hero.title}
                  </p>
                </div>
              </div>

              {/* Contact Card */}
              <div className="glass p-6 md:p-8 space-y-6 hover-lift">
                <h3 className="font-playfair text-2xl font-bold">
                  {t.hero.contact}
                </h3>
                <a
                  href="mailto:benfathallah.omar@gmail.com"
                  className="flex items-start gap-4 group"
                >
                  <Mail className="w-6 h-6 text-yellow-500" />
                  <div>
                    <div className="text-xs text-slate-500 uppercase">
                      {t.hero.email}
                    </div>
                    <div className="text-slate-200 group-hover:text-yellow-500">
                      benfathallah.omar@gmail.com
                    </div>
                  </div>
                </a>
                <a
                  href="tel:+21627351545"
                  className="flex items-start gap-4 group"
                >
                  <Phone className="w-6 h-6 text-yellow-500" />
                  <div>
                    <div className="text-xs text-slate-500 uppercase">
                      {t.hero.phone}
                    </div>
                    <div className="text-slate-200 group-hover:text-yellow-500">
                      +216 27 351 545
                    </div>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-yellow-500" />
                  <div>
                    <div className="text-xs text-slate-500 uppercase">
                      {t.hero.location}
                    </div>
                    <div className="text-slate-200">{t.hero.locationValue}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
          onClick={() => scrollToSection("about")}
        >
          <ChevronDown className="w-8 h-8 text-yellow-500" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 px-6 md:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:mb-20">
            <span className="text-xs md:text-sm uppercase tracking-widest text-yellow-500 font-dm-sans">
              {t.about.sectionTitle}
            </span>
            <h2 className="font-playfair text-4xl md:text-6xl font-black mt-4 mb-6">
              {t.about.title}
            </h2>
            <div className="h-1 w-20 md:w-24 bg-yellow-500"></div>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 md:gap-12">
            {/* Profile */}
            <div className="lg:col-span-3 space-y-6">
              <div className="prose prose-invert prose-lg max-w-none">
                <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-cormorant">
                  {t.about.description1}
                </p>
                <p className="text-base md:text-lg text-slate-400 leading-relaxed font-dm-sans">
                  {t.about.description2}
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 md:gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-playfair font-bold text-yellow-500">
                    3+
                  </div>
                  <div className="text-xs md:text-sm text-slate-400 mt-2 font-dm-sans uppercase tracking-wider">
                    {t.about.yearsStudy}
                  </div>
                </div>
                <div className="text-center border-x border-slate-800">
                  <div className="text-3xl md:text-4xl font-playfair font-bold text-yellow-500">
                    10+
                  </div>
                  <div className="text-xs md:text-sm text-slate-400 mt-2 font-dm-sans uppercase tracking-wider">
                    {t.about.completedProjects}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-playfair font-bold text-yellow-500">
                    3
                  </div>
                  <div className="text-xs md:text-sm text-slate-400 mt-2 font-dm-sans uppercase tracking-wider">
                    {t.about.internships}
                  </div>
                </div>
              </div>
            </div>

            {/* Education & Languages */}
            <div className="lg:col-span-2 space-y-6">
              <div className="glass rounded-none p-6 md:p-8 hover-lift">
                <div className="flex items-center gap-3 mb-6">
                  <GraduationCap className="w-5 md:w-6 h-5 md:h-6 text-yellow-500" />
                  <h3 className="font-playfair text-xl md:text-2xl font-bold">
                    {t.about.education}
                  </h3>
                </div>
                <div className="space-y-6">
                  <div className="border-l-2 border-yellow-500 pl-4">
                    <div className="font-dm-sans font-semibold text-sm md:text-base text-slate-200">
                      {t.about.degree}
                    </div>
                    <div className="text-sm text-slate-400 mt-1">
                      {t.about.university}
                    </div>
                    <div className="text-xs text-slate-500 mt-1">
                      {t.about.period}
                    </div>
                  </div>
                  <div className="border-l-2 border-slate-700 pl-4">
                    <div className="font-dm-sans font-semibold text-sm md:text-base text-slate-200">
                      {t.about.license}
                    </div>
                    <div className="text-sm text-slate-400 mt-1">
                      {t.about.university2}
                    </div>
                    <div className="text-xs text-slate-500 mt-1">
                      {t.about.period2}
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass rounded-none p-6 md:p-8 hover-lift">
                <div className="flex items-center gap-3 mb-6">
                  <Award className="w-5 md:w-6 h-5 md:h-6 text-yellow-500" />
                  <h3 className="font-playfair text-xl md:text-2xl font-bold">
                    {t.about.languages}
                  </h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm md:text-base text-slate-300 font-dm-sans">
                        {t.about.french}
                      </span>
                      <span className="text-xs text-yellow-500 uppercase tracking-wider">
                        {t.about.levelProfessional}
                      </span>
                    </div>
                    <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full w-[90%] bg-yellow-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm md:text-base text-slate-300 font-dm-sans">
                        {t.about.english}
                      </span>
                      <span className="text-xs text-yellow-500 uppercase tracking-wider">
                        {t.about.levelIntermediate}
                      </span>
                    </div>
                    <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full w-[70%] bg-yellow-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm md:text-base text-slate-300 font-dm-sans">
                        {t.about.arabic}
                      </span>
                      <span className="text-xs text-yellow-500 uppercase tracking-wider">
                        {t.about.levelNative}
                      </span>
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
      <section
        id="experience"
        className="py-20 md:py-32 px-6 md:px-8 bg-slate-900/30"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:mb-20">
            <span className="text-xs md:text-sm uppercase tracking-widest text-yellow-500 font-dm-sans">
              {t.experience.sectionTitle}
            </span>
            <h2 className="font-playfair text-4xl md:text-6xl font-black mt-4 mb-6">
              {t.experience.title}
            </h2>
            <div className="h-1 w-20 md:w-24 bg-yellow-500"></div>
          </div>

          <div className="space-y-8 md:space-y-12">
            {/* Experience 1 */}
            <div className="grid lg:grid-cols-12 gap-6 md:gap-8 group">
              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-32">
                  <div className="text-xs md:text-sm text-yellow-500 uppercase tracking-widest font-dm-sans mb-2">
                    {t.experience.exp1.period}
                  </div>
                  <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-3">
                    {t.experience.exp1.title}
                  </h3>
                  <p className="text-lg md:text-xl text-slate-400">
                    {t.experience.exp1.company}
                  </p>
                  <p className="text-sm md:text-base text-slate-500 mt-1">
                    {t.experience.exp1.client}
                  </p>
                </div>
              </div>
              <div className="lg:col-span-8">
                <div className="glass rounded-none p-6 md:p-8 hover-lift border-l-4 border-yellow-500">
                  <ul className="space-y-3 md:space-y-4 text-sm md:text-base text-slate-300 font-dm-sans">
                    <li className="flex gap-3 md:gap-4">
                      <ArrowRight className="w-4 md:w-5 h-4 md:h-5 text-yellow-500 mt-1 flex-shrink-0" />
                      <span>{t.experience.exp1.task1}</span>
                    </li>
                    <li className="flex gap-3 md:gap-4">
                      <ArrowRight className="w-4 md:w-5 h-4 md:h-5 text-yellow-500 mt-1 flex-shrink-0" />
                      <span>{t.experience.exp1.task2}</span>
                    </li>
                    <li className="flex gap-3 md:gap-4">
                      <ArrowRight className="w-4 md:w-5 h-4 md:h-5 text-yellow-500 mt-1 flex-shrink-0" />
                      <span>{t.experience.exp1.task3}</span>
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-slate-800">
                    {[
                      "Spring Boot",
                      "Angular",
                      "PostgreSQL",
                      "Tailwind CSS",
                      "Docker",
                      "JWT",
                      "REST API",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 md:px-3 py-1 md:py-1.5 bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-xs font-dm-sans uppercase tracking-wider"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Experience 2 */}
            <div className="grid lg:grid-cols-12 gap-6 md:gap-8 group">
              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-32">
                  <div className="text-xs md:text-sm text-yellow-500 uppercase tracking-widest font-dm-sans mb-2">
                    {t.experience.exp2.period}
                  </div>
                  <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-3">
                    {t.experience.exp2.title}
                  </h3>
                  <p className="text-lg md:text-xl text-slate-400">
                    {t.experience.exp2.company}
                  </p>
                  <p className="text-sm md:text-base text-slate-500 mt-1">
                    {t.experience.exp2.client}
                  </p>
                </div>
              </div>
              <div className="lg:col-span-8">
                <div className="glass rounded-none p-6 md:p-8 hover-lift border-l-4 border-cyan-700">
                  <ul className="space-y-3 md:space-y-4 text-sm md:text-base text-slate-300 font-dm-sans">
                    <li className="flex gap-3 md:gap-4">
                      <ArrowRight className="w-4 md:w-5 h-4 md:h-5 text-cyan-500 mt-1 flex-shrink-0" />
                      <span>{t.experience.exp2.task1}</span>
                    </li>
                    <li className="flex gap-3 md:gap-4">
                      <ArrowRight className="w-4 md:w-5 h-4 md:h-5 text-cyan-500 mt-1 flex-shrink-0" />
                      <span>{t.experience.exp2.task2}</span>
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-slate-800">
                    {["Spring Boot", "Angular", "REST API", "MySQL"].map(
                      (tech) => (
                        <span
                          key={tech}
                          className="px-2.5 md:px-3 py-1 md:py-1.5 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-dm-sans uppercase tracking-wider"
                        >
                          {tech}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Experience 3 */}
            <div className="grid lg:grid-cols-12 gap-6 md:gap-8 group">
              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-32">
                  <div className="text-xs md:text-sm text-yellow-500 uppercase tracking-widest font-dm-sans mb-2">
                    {t.experience.exp3.period}
                  </div>
                  <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-3">
                    {t.experience.exp3.title}
                  </h3>
                  <p className="text-lg md:text-xl text-slate-400">
                    {t.experience.exp3.company}
                  </p>
                  <p className="text-sm md:text-base text-slate-500 mt-1">
                    {t.experience.exp3.client}
                  </p>
                </div>
              </div>
              <div className="lg:col-span-8">
                <div className="glass rounded-none p-6 md:p-8 hover-lift border-l-4 border-slate-700">
                  <ul className="space-y-3 md:space-y-4 text-sm md:text-base text-slate-300 font-dm-sans">
                    <li className="flex gap-3 md:gap-4">
                      <ArrowRight className="w-4 md:w-5 h-4 md:h-5 text-slate-400 mt-1 flex-shrink-0" />
                      <span>{t.experience.exp3.task1}</span>
                    </li>
                    <li className="flex gap-3 md:gap-4">
                      <ArrowRight className="w-4 md:w-5 h-4 md:h-5 text-slate-400 mt-1 flex-shrink-0" />
                      <span>{t.experience.exp3.task2}</span>
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-slate-800">
                    {["ReactJS", "Spring Boot", "MySQL"].map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 md:px-3 py-1 md:py-1.5 bg-slate-500/10 border border-slate-500/20 text-slate-400 text-xs font-dm-sans uppercase tracking-wider"
                      >
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
      <section id="projects" className="py-20 md:py-32 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:mb-20">
            <span className="text-xs md:text-sm uppercase tracking-widest text-yellow-500 font-dm-sans">
              {t.projects.sectionTitle}
            </span>
            <h2 className="font-playfair text-4xl md:text-6xl font-black mt-4 mb-6">
              {t.projects.title}
            </h2>
            <div className="h-1 w-20 md:w-24 bg-yellow-500"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Project 1 */}
            <div className="glass rounded-none p-6 md:p-10 hover-lift group cursor-pointer">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 border border-yellow-500 flex items-center justify-center text-yellow-500 font-playfair text-xl md:text-2xl font-bold">
                  01
                </div>
                <Briefcase className="w-6 md:w-8 h-6 md:h-8 text-yellow-500 opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-3 group-hover:text-yellow-500 transition-colors">
                {t.projects.project1.title}
              </h3>
              <p className="text-sm md:text-base text-slate-400 mb-4 font-dm-sans">
                {t.projects.project1.subtitle}
              </p>
              <ul className="space-y-2 md:space-y-3 mb-6 text-sm md:text-base text-slate-300 font-dm-sans">
                <li className="flex gap-2 md:gap-3">
                  <span className="text-yellow-500">→</span>
                  <span>{t.projects.project1.task1}</span>
                </li>
                <li className="flex gap-2 md:gap-3">
                  <span className="text-yellow-500">→</span>
                  <span>{t.projects.project1.task2}</span>
                </li>
                <li className="flex gap-2 md:gap-3">
                  <span className="text-yellow-500">→</span>
                  <span>{t.projects.project1.task3}</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-800">
                {[
                  "Jenkins",
                  "Docker",
                  "Microservices",
                  "GitHub Actions",
                  "SonarQube",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs text-slate-400 font-dm-sans uppercase tracking-wider"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project 2 */}
            <div className="glass rounded-none p-6 md:p-10 hover-lift group cursor-pointer">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 border border-cyan-700 flex items-center justify-center text-cyan-500 font-playfair text-xl md:text-2xl font-bold">
                  02
                </div>
                <Code className="w-6 md:w-8 h-6 md:h-8 text-cyan-500 opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-3 group-hover:text-cyan-500 transition-colors">
                {t.projects.project2.title}
              </h3>
              <p className="text-sm md:text-base text-slate-400 mb-4 font-dm-sans">
                {t.projects.project2.subtitle}
              </p>
              <ul className="space-y-2 md:space-y-3 mb-6 text-sm md:text-base text-slate-300 font-dm-sans">
                <li className="flex gap-2 md:gap-3">
                  <span className="text-cyan-500">→</span>
                  <span>{t.projects.project2.task1}</span>
                </li>
                <li className="flex gap-2 md:gap-3">
                  <span className="text-cyan-500">→</span>
                  <span>{t.projects.project2.task2}</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-800">
                {[
                  "Spring Boot",
                  "Spring Security",
                  "Angular",
                  "MySQL",
                  "TailwindCSS",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs text-slate-400 font-dm-sans uppercase tracking-wider"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project 3 */}
            <div className="glass rounded-none p-6 md:p-10 hover-lift group cursor-pointer">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 border border-purple-700 flex items-center justify-center text-purple-500 font-playfair text-xl md:text-2xl font-bold">
                  03
                </div>
                <Code className="w-6 md:w-8 h-6 md:h-8 text-purple-500 opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-3 group-hover:text-purple-500 transition-colors">
                {t.projects.project3.title}
              </h3>
              <p className="text-sm md:text-base text-slate-400 mb-4 font-dm-sans">
                {t.projects.project3.subtitle}
              </p>
              <ul className="space-y-2 md:space-y-3 mb-6 text-sm md:text-base text-slate-300 font-dm-sans">
                <li className="flex gap-2 md:gap-3">
                  <span className="text-purple-500">→</span>
                  <span>{t.projects.project3.task1}</span>
                </li>
                <li className="flex gap-2 md:gap-3">
                  <span className="text-purple-500">→</span>
                  <span>{t.projects.project3.task2}</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-800">
                {["C#", "Unity", "Blender", "Animation 3D"].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs text-slate-400 font-dm-sans uppercase tracking-wider"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project 4 */}
            <div className="glass rounded-none p-6 md:p-10 hover-lift group cursor-pointer">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 border border-green-700 flex items-center justify-center text-green-500 font-playfair text-xl md:text-2xl font-bold">
                  04
                </div>
                <Code className="w-6 md:w-8 h-6 md:h-8 text-green-500 opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-3 group-hover:text-green-500 transition-colors">
                {t.projects.project4.title}
              </h3>
              <p className="text-sm md:text-base text-slate-400 mb-4 font-dm-sans">
                {t.projects.project4.subtitle}
              </p>
              <ul className="space-y-2 md:space-y-3 mb-6 text-sm md:text-base text-slate-300 font-dm-sans">
                <li className="flex gap-2 md:gap-3">
                  <span className="text-green-500">→</span>
                  <span>{t.projects.project4.task1}</span>
                </li>
                <li className="flex gap-2 md:gap-3">
                  <span className="text-green-500">→</span>
                  <span>{t.projects.project4.task2}</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-800">
                {["JavaFX", "Symfony", "Bootstrap", "PHP"].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs text-slate-400 font-dm-sans uppercase tracking-wider"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 md:py-32 px-6 md:px-8 bg-slate-900/30"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:mb-20">
            <span className="text-xs md:text-sm uppercase tracking-widest text-yellow-500 font-dm-sans">
              {t.skills.sectionTitle}
            </span>
            <h2 className="font-playfair text-4xl md:text-6xl font-black mt-4 mb-6">
              {t.skills.title}
            </h2>
            <div className="h-1 w-20 md:w-24 bg-yellow-500"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Frontend */}
            <div className="glass rounded-none p-6 md:p-8 border-l-4 border-yellow-500">
              <h3 className="font-playfair text-xl md:text-2xl font-bold mb-6 text-yellow-500">
                {t.skills.frontend}
              </h3>
              <div className="space-y-3">
                {[
                  "Angular",
                  "ReactJS",
                  "TypeScript",
                  "JavaScript",
                  "TailwindCSS",
                  "Bootstrap",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center justify-between group"
                  >
                    <span className="text-sm md:text-base text-slate-300 font-dm-sans">
                      {skill}
                    </span>
                    <div className="h-px flex-1 mx-4 bg-slate-800 group-hover:bg-yellow-500/30 transition-colors"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="glass rounded-none p-6 md:p-8 border-l-4 border-cyan-700">
              <h3 className="font-playfair text-xl md:text-2xl font-bold mb-6 text-cyan-500">
                {t.skills.backend}
              </h3>
              <div className="space-y-3">
                {[
                  "Spring Boot",
                  "Node.js",
                  "Express.js",
                  "PHP",
                  "Symfony",
                  "JEE",
                  ".NET",
                  "REST API",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center justify-between group"
                  >
                    <span className="text-sm md:text-base text-slate-300 font-dm-sans">
                      {skill}
                    </span>
                    <div className="h-px flex-1 mx-4 bg-slate-800 group-hover:bg-cyan-500/30 transition-colors"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Databases */}
            <div className="glass rounded-none p-6 md:p-8 border-l-4 border-purple-700">
              <h3 className="font-playfair text-xl md:text-2xl font-bold mb-6 text-purple-500">
                {t.skills.databases}
              </h3>
              <div className="space-y-3">
                {["MySQL", "PostgreSQL", "MongoDB"].map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center justify-between group"
                  >
                    <span className="text-sm md:text-base text-slate-300 font-dm-sans">
                      {skill}
                    </span>
                    <div className="h-px flex-1 mx-4 bg-slate-800 group-hover:bg-purple-500/30 transition-colors"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* DevOps */}
            <div className="glass rounded-none p-6 md:p-8 border-l-4 border-green-700">
              <h3 className="font-playfair text-xl md:text-2xl font-bold mb-6 text-green-500">
                {t.skills.devops}
              </h3>
              <div className="space-y-3">
                {[
                  "Docker",
                  "Jenkins",
                  "GitHub Actions",
                  "CI/CD",
                  "Microservices",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center justify-between group"
                  >
                    <span className="text-sm md:text-base text-slate-300 font-dm-sans">
                      {skill}
                    </span>
                    <div className="h-px flex-1 mx-4 bg-slate-800 group-hover:bg-green-500/30 transition-colors"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tests */}
            <div className="glass rounded-none p-6 md:p-8 border-l-4 border-orange-700">
              <h3 className="font-playfair text-xl md:text-2xl font-bold mb-6 text-orange-500">
                {t.skills.testing}
              </h3>
              <div className="space-y-3">
                {["JUnit", "Mockito", "Postman", "Tests unitaires"].map(
                  (skill) => (
                    <div
                      key={skill}
                      className="flex items-center justify-between group"
                    >
                      <span className="text-sm md:text-base text-slate-300 font-dm-sans">
                        {skill}
                      </span>
                      <div className="h-px flex-1 mx-4 bg-slate-800 group-hover:bg-orange-500/30 transition-colors"></div>
                    </div>
                  ),
                )}
              </div>
            </div>

            {/* Tools */}
            <div className="glass rounded-none p-6 md:p-8 border-l-4 border-pink-700">
              <h3 className="font-playfair text-xl md:text-2xl font-bold mb-6 text-pink-500">
                {t.skills.tools}
              </h3>
              <div className="space-y-3">
                {["Git", "GitHub", "Jira", "Trello", "Agile/Scrum"].map(
                  (skill) => (
                    <div
                      key={skill}
                      className="flex items-center justify-between group"
                    >
                      <span className="text-sm md:text-base text-slate-300 font-dm-sans">
                        {skill}
                      </span>
                      <div className="h-px flex-1 mx-4 bg-slate-800 group-hover:bg-pink-500/30 transition-colors"></div>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 px-6 md:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-12 md:mb-20">
            <span className="text-xs md:text-sm uppercase tracking-widest text-yellow-500 font-dm-sans">
              {t.contact.sectionTitle}
            </span>
            <h2 className="font-playfair text-4xl md:text-6xl font-black mt-4 mb-6">
              {t.contact.title}
            </h2>
            <div className="h-1 w-20 md:w-24 bg-yellow-500 mx-auto"></div>
          </div>

          <p className="text-lg md:text-2xl text-slate-300 mb-12 md:mb-16 max-w-2xl mx-auto font-cormorant italic">
            {t.contact.description}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=benfathallah.omar@gmail.com&su=Contact%20depuis%20portfolio&body=Bonjour%20Omar,"
              className="group px-8 md:px-10 py-4 md:py-5 bg-yellow-500 text-slate-950 font-dm-sans font-bold rounded-none hover:bg-yellow-400 transition-all duration-300 flex items-center justify-center gap-3 text-sm md:text-base cursor-pointer"
            >
              <Mail className="w-5 md:w-6 h-5 md:h-6" />
              {t.contact.sendEmail}
              <ArrowRight className="w-4 md:w-5 h-4 md:h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://github.com/omarbenfathallah"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 md:px-10 py-4 md:py-5 border-2 border-slate-700 font-dm-sans font-bold rounded-none hover:border-yellow-500 hover:text-yellow-500 transition-all duration-300 flex items-center justify-center gap-3 text-sm md:text-base"
            >
              <Github className="w-5 md:w-6 h-5 md:h-6" />
              {t.contact.viewGithub}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 md:py-12 px-6 md:px-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="font-playfair text-2xl font-bold">
              <span className="text-yellow-500">O</span>
              <span className="text-slate-100">BF</span>
            </div>
            <div className="text-slate-500 font-dm-sans text-xs md:text-sm text-center">
              &copy; 2025 Omar Ben Fathallah. {t.footer.rights}
            </div>
            <div className="flex gap-4 md:gap-6">
              <a
                href="https://linkedin.com/in/ben-fathallah-omar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-yellow-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/omarbenfathallah"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-yellow-500 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=benfathallah.omar@gmail.com&su=Contact%20depuis%20portfolio&body=Bonjour%20Omar,"
                className="text-slate-400 hover:text-yellow-500 transition-colors cursor-pointer"
                aria-label="Envoyer un email"
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
