import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  MapPin, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  Video, 
  Share2, 
  MousePointerClick, 
  TrendingUp, 
  Users, 
  Star,
  Activity,
  Award,
  Play
} from 'lucide-react';

const Noise = () => (
  <div 
    className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.02] mix-blend-overlay"
    style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 400 400%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
  />
);

export default function App() {
  const WHATSAPP_NUMBER = "233536106660";
  const PHONE_NUMBER = "0536106660";
  const EMAIL = "info@elevantemedia.com";

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom = 0) => ({
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, delay: custom * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }
    })
  };

  return (
    <div className="font-sans bg-luxury-black text-beige-100 min-h-screen relative selection:bg-beige-300 selection:text-black">
      <Noise />
      
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="fixed w-full z-50 top-0 border-b border-white/5 bg-luxury-black/60 backdrop-blur-xl"
      >
        <div className="max-w-[90rem] mx-auto px-6 lg:px-12 h-24 flex items-center justify-between">
          <div className="font-serif text-2xl tracking-wide text-beige-100 flex items-center gap-2 relative group">
            Elevante<span className="text-beige-300 italic font-medium">Media</span>
            <div className="absolute -bottom-2 left-0 w-0 h-[1px] bg-beige-300 transition-all duration-500 group-hover:w-full" />
          </div>
          <div className="hidden md:flex items-center gap-10 text-sm tracking-[0.1em] uppercase text-beige-200">
            <a href="#services" className="hover:text-beige-300 transition-colors duration-300">Services</a>
            <a href="#about" className="hover:text-beige-300 transition-colors duration-300">About Us</a>
            <a href="#contact" className="hover:text-beige-300 transition-colors duration-300">Contact</a>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden flex items-center gap-2 bg-beige-100 text-luxury-black px-6 py-3 rounded-full font-medium hover:bg-white transition-all text-sm"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
              <MessageCircle size={16} />
              <span className="hidden sm:inline relative z-10">WhatsApp Us</span>
            </a>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden px-6 lg:px-12">
        <div className="absolute inset-0 z-0">
           {/* Ambient Lighting */ }
           <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[60%] bg-beige-400/10 blur-[150px] rounded-full mix-blend-screen" />
           <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-beige-300/5 blur-[120px] rounded-full mix-blend-screen" />
           <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_var(--color-luxury-black)_100%)] opacity-80" />
        </div>
        
        {/* Enormous Background Typography */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.03] select-none z-0">
           <span className="font-serif text-[18vw] font-bold leading-none tracking-tighter">ELEVANTE</span>
        </div>
        
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 max-w-[80rem] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          <div className="lg:col-span-12 text-center flex flex-col items-center">
            <motion.div 
              custom={1} initial="hidden" animate="visible" variants={fadeUp}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-beige-300 animate-pulse" />
              <span className="text-beige-200 uppercase tracking-[0.15em] text-[10px] sm:text-xs">
                Premium Marketing Agency · Accra, Ghana
              </span>
            </motion.div>
            
            <motion.h1 
              custom={2} initial="hidden" animate="visible" variants={fadeUp}
              className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[1.05] tracking-tight mb-8"
            >
              Helping premium<br/> 
              <span className="text-gradient">businesses attract</span><br/>
              <span className="italic font-light text-beige-300">premium clients.</span>
            </motion.h1>
            
            <motion.p 
              custom={3} initial="hidden" animate="visible" variants={fadeUp}
              className="text-beige-200/80 text-lg md:text-xl lg:text-2xl max-w-3xl font-light leading-relaxed mb-12"
            >
              We use professional video content and targeted marketing to help you get more qualified leads, attract better clients, and ultimately make more money.
            </motion.p>
            
            <motion.div 
              custom={4} initial="hidden" animate="visible" variants={fadeUp}
              className="flex justify-center items-center relative z-20"
            >
              <div className="relative group inline-block">
                <div className="absolute -inset-1 bg-gradient-to-r from-beige-300 to-beige-200 rounded-full blur opacity-20 group-hover:opacity-60 transition duration-1000 group-hover:duration-200" />
                <a 
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex justify-center items-center gap-3 bg-beige-100 text-luxury-black px-10 py-5 rounded-full font-medium hover:bg-white transition-all overflow-hidden"
                >
                  <MessageCircle size={20} className="relative z-10" />
                  <span className="relative z-10 text-base tracking-wide uppercase">Message on WhatsApp</span>
                  <div className="absolute inset-0 h-full w-full scale-0 rounded-full transition-all duration-300 ease-out group-hover:scale-100 group-hover:bg-white/30" />
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Aesthetic Image & Reassurance Break */}
      <section id="about" className="py-32 relative bg-luxury-black border-y border-white/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-[50vw] h-full bg-gradient-to-l from-beige-400/5 to-transparent mix-blend-screen" />
        
        <div className="max-w-[90rem] mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            className="order-2 lg:order-1 relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-luxury-border to-transparent opacity-50 blur-xl transition-opacity duration-500 group-hover:opacity-100 rounded-3xl" />
            <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden glass-panel p-2">
                <div className="w-full h-full rounded-2xl overflow-hidden relative">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/90 via-luxury-black/20 to-transparent" />
                    
                    <div className="absolute bottom-0 left-0 p-8 sm:p-12 w-full">
                        <div className="w-14 h-14 rounded-full glass-panel flex items-center justify-center mb-6">
                            <Award size={24} className="text-beige-300" />
                        </div>
                        <h3 className="font-serif text-3xl mb-3 text-beige-100">Committed to Quality</h3>
                        <p className="text-beige-200/80 font-light text-lg">Delivering exceptional standards to Accra's finest businesses.</p>
                    </div>
                </div>
            </div>
          </motion.div>
          
          <div className="order-1 lg:order-2">
            <motion.div
               initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[1px] bg-beige-300" />
                <span className="text-beige-300 tracking-[0.2em] uppercase text-xs font-semibold">The Elevante Standard</span>
              </div>
              <h2 className="font-serif text-4xl md:text-6xl font-normal leading-[1.1] mb-8">
                Marketing designed to <br/><span className="text-gradient italic">grow your revenue.</span>
              </h2>
              <p className="text-beige-200/70 mb-8 font-light leading-relaxed text-lg md:text-xl">
                Based in Accra, Elevante Media partners with businesses that want more than just "likes." We help you look like the best in your industry so you can attract high-value, paying clients.
              </p>
              <p className="text-beige-200/70 mb-12 font-light leading-relaxed text-lg md:text-xl">
                We know that as a business owner, your main goal is growth. From shooting professional videos to setting up ads that send customers straight to your WhatsApp, everything we do is focused on giving you a clear return on your investment.
              </p>
              
              <div className="space-y-6">
                {[
                  "Make your business look premium so you can charge more",
                  "Build a predictable system that brings in new leads consistently",
                  "Create high-quality photos and videos that build instant trust"
                ].map((item, i) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (i * 0.1), duration: 0.5 }}
                    key={i} 
                    className="flex items-start gap-4 text-beige-100 group"
                  >
                    <div className="mt-1 w-6 h-6 rounded-full border border-beige-300/30 flex items-center justify-center bg-beige-300/5 group-hover:bg-beige-300/20 transition-colors">
                      <CheckCircle2 size={12} className="text-beige-300" />
                    </div>
                    <span className="text-lg font-light text-beige-200 group-hover:text-beige-100 transition-colors">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section - Bento Grid Style */}
      <section id="services" className="py-32 px-6 lg:px-12 bg-luxury-gray relative">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-beige-400/5 blur-[200px] rounded-full pointer-events-none" />
        
        <div className="max-w-[90rem] mx-auto relative z-10">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/5 pb-16 mb-16"
          >
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-[1px] bg-beige-300" />
                <span className="text-beige-300 tracking-[0.2em] uppercase text-xs font-semibold">Our Expertise</span>
              </div>
              <h2 className="font-serif text-4xl md:text-6xl font-normal leading-[1.1]">Marketing That Brings <br/><span className="italic text-beige-300">Real Results.</span></h2>
            </div>
            <p className="text-beige-200/70 font-light text-lg md:text-xl max-w-lg">
              Everything you need to get attention, build trust, and turn viewers into paying customers.
            </p>
          </motion.div>

          {/* Asymmetric Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[300px]">
            {/* Large Feature Card */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
               className="md:col-span-2 lg:col-span-2 row-span-2 glass-panel glass-panel-hover rounded-3xl p-10 flex flex-col justify-end relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-beige-300/10 to-transparent blur-3xl group-hover:opacity-100 opacity-0 transition-opacity duration-700" />
              <Video className="absolute top-10 left-10 text-beige-300/30 group-hover:text-beige-300/80 transition-colors duration-500" size={64} strokeWidth={1} />
              
              <div className="relative z-10">
                <h3 className="font-serif text-3xl md:text-4xl font-medium mb-4 group-hover:text-gradient transition-all duration-500">Professional Photo & Video</h3>
                <p className="text-lg font-light text-beige-200/80 leading-relaxed max-w-md">High-quality content that shows exactly how good your business is, making customers choose you over everyone else.</p>
              </div>
            </motion.div>

            {/* Standard Cards */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
               className="glass-panel glass-panel-hover rounded-3xl p-8 flex flex-col justify-between group"
            >
              <MessageCircle className="text-beige-300" size={32} strokeWidth={1.5} />
              <div>
                <h3 className="font-serif text-xl font-medium mb-2">WhatsApp Leads</h3>
                <p className="text-sm font-light text-beige-200/70 leading-relaxed">Making it incredibly easy for interested people to message you and book.</p>
              </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
               className="glass-panel glass-panel-hover rounded-3xl p-8 flex flex-col justify-between group"
            >
              <MousePointerClick className="text-beige-300" size={32} strokeWidth={1.5} />
              <div>
                <h3 className="font-serif text-xl font-medium mb-2">Targeted Ads</h3>
                <p className="text-sm font-light text-beige-200/70 leading-relaxed">Facebook and Instagram ads that bring in more money than they cost.</p>
              </div>
            </motion.div>

            {/* Medium Feature Card */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
               className="md:col-span-2 row-span-1 glass-panel glass-panel-hover rounded-3xl p-8 flex flex-col sm:flex-row sm:items-center gap-8 justify-between group"
            >
              <div className="flex-1">
                <h3 className="font-serif text-2xl font-medium mb-3">Premium Branding</h3>
                <p className="text-base font-light text-beige-200/70 leading-relaxed">Helping your business look so good that you can comfortably and confidently charge higher prices.</p>
              </div>
              <div className="w-16 h-16 rounded-full bg-luxury-black border border-white/10 flex items-center justify-center shrink-0 group-hover:border-beige-300/50 transition-colors">
                <TrendingUp className="text-beige-300" size={24} strokeWidth={1.5} />
              </div>
            </motion.div>

            {/* Remaining standard cards */}
            {[
              { icon: <Share2 className="text-beige-300" size={28} strokeWidth={1.5} />, title: "Social Media", desc: "Managing your pages so they build an audience of people who actually want to buy." },
              { icon: <Users className="text-beige-300" size={28} strokeWidth={1.5} />, title: "Local Influencers", desc: "Getting popular creators to effectively recommend your business to their followers." },
              { icon: <Star className="text-beige-300" size={28} strokeWidth={1.5} />, title: "5-Star Reviews", desc: "Getting you more Google reviews so new customers trust you immediately." },
              { icon: <Activity className="text-beige-300" size={28} strokeWidth={1.5} />, title: "Clear Reporting", desc: "Simple monthly updates showing exactly how many new leads you got." },
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 * i }}
                className="glass-panel glass-panel-hover rounded-3xl p-8 flex flex-col justify-between group"
              >
                {service.icon}
                <div>
                  <h3 className="font-serif text-xl font-medium mb-2">{service.title}</h3>
                  <p className="text-sm font-light text-beige-200/70 leading-relaxed">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust / Process Section */}
      <section className="py-32 px-6 lg:px-12 bg-luxury-black relative border-y border-white/5 overflow-hidden">
        {/* Subtle decorative lines */}
        <div className="absolute top-0 left-1/3 w-[1px] h-full bg-gradient-to-b from-transparent via-white/5 to-transparent hidden lg:block" />
        <div className="absolute top-0 right-1/3 w-[1px] h-full bg-gradient-to-b from-transparent via-white/5 to-transparent hidden lg:block" />
        
        <div className="max-w-[90rem] mx-auto relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-24">
            <h2 className="font-serif text-3xl md:text-5xl font-normal mb-6">Why business owners trust us to <span className="italic text-beige-300">grow their sales</span></h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-16 lg:gap-24 text-center md:text-left relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-[28px] left-[15%] w-[70%] h-[1px] bg-white/10" />

            {[
              { num: "01", title: "Focus on Revenue", desc: "We don't care about 'likes' or followers if they don't buy. We only focus on strategies that bring paying clients through your doors." },
              { num: "02", title: "We Know Accra", desc: "We understand what local customers want and combine that with world-class marketing so your business stands out." },
              { num: "03", title: "No Wasted Money", desc: "If an ad isn't bringing you a return, we fix it. We track every cedi spent to make sure your marketing is actually profitable." }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.2 }}
                className="relative"
              >
                <div className="flex flex-col md:items-start items-center">
                  <div className="w-14 h-14 rounded-full bg-luxury-black border border-beige-300/30 flex items-center justify-center text-xl font-serif text-beige-300 mb-8 relative z-10 glow-shadow">
                    {step.num}
                  </div>
                  <h4 className="text-2xl font-serif mb-4 text-beige-100">{step.title}</h4>
                  <p className="text-base text-beige-200/70 font-light leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - High End Form / CTA */}
      <section id="contact" className="py-32 px-6 lg:px-12 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-beige-300/5 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />
        
        <div className="max-w-[70rem] mx-auto">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="glass-panel p-10 md:p-20 rounded-[2.5rem] relative overflow-hidden border border-white/5 shadow-2xl"
          >
            {/* Soft inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />

            <div className="grid md:grid-cols-2 gap-16 relative z-10">
              <div className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-8 h-[1px] bg-beige-300" />
                    <span className="text-beige-300 tracking-[0.2em] uppercase text-xs font-semibold">Initiate Contact</span>
                  </div>
                  <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.1] mb-8">
                    Ready to <span className="italic text-gradient">get more</span> <br/>clients?
                  </h2>
                  <p className="text-beige-200/80 font-light text-lg mb-12 max-w-md">
                    Reach out today to discuss how we can improve your marketing to bring in a steady stream of ready-to-buy customers.
                  </p>
                </div>
                
                <div className="space-y-8">
                  <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-6 group">
                    <div className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center group-hover:border-beige-300/50 group-hover:bg-beige-300/10 transition-all duration-300">
                      <Phone size={20} className="text-beige-100 group-hover:text-beige-300 transition-colors" />
                    </div>
                    <div>
                      <div className="text-xs tracking-widest uppercase text-beige-200/50 mb-1">Direct Line</div>
                      <div className="text-xl font-light tracking-wide group-hover:text-beige-300 transition-colors">{PHONE_NUMBER}</div>
                    </div>
                  </a>
                  
                  <a href={`mailto:${EMAIL}`} className="flex items-center gap-6 group">
                    <div className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center group-hover:border-beige-300/50 group-hover:bg-beige-300/10 transition-all duration-300">
                      <Mail size={20} className="text-beige-100 group-hover:text-beige-300 transition-colors" />
                    </div>
                    <div>
                      <div className="text-xs tracking-widest uppercase text-beige-200/50 mb-1">Digital Correspondence</div>
                      <div className="text-xl font-light tracking-wide group-hover:text-beige-300 transition-colors">{EMAIL}</div>
                    </div>
                  </a>
                </div>
              </div>
              
              <div className="flex flex-col justify-center">
                 <div className="bg-luxury-black/50 border border-white/5 p-10 md:p-12 rounded-[2rem] backdrop-blur-md">
                   <h3 className="font-serif text-2xl mb-8 flex items-center gap-3">
                     <Clock className="text-beige-300" size={24} strokeWidth={1.5} /> 
                     Operating Hours
                   </h3>
                   <ul className="space-y-6 text-beige-200/80 font-light text-lg">
                     <li className="flex justify-between items-center border-b border-white/5 pb-6">
                       <span>Monday - Saturday</span>
                       <span className="text-beige-100 font-medium">9:00 AM – 6:00 PM</span>
                     </li>
                     <li className="flex justify-between items-center pb-2">
                       <span>Sunday</span>
                       <span className="text-beige-100 font-medium">Appointment Only</span>
                     </li>
                   </ul>
                   
                   <div className="mt-12 pt-10 border-t border-white/5">
                      <a 
                        href={`https://wa.me/${WHATSAPP_NUMBER}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative overflow-hidden w-full flex justify-center items-center gap-3 bg-beige-100 text-luxury-black px-8 py-5 rounded-full font-medium hover:bg-white transition-all text-lg"
                      >
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                        <MessageCircle size={22} className="relative z-10" />
                        <span className="relative z-10">Start a conversation</span>
                      </a>
                   </div>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-20 pb-10 bg-luxury-black border-t border-white/5 relative z-10">
        <div className="max-w-[90rem] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-10 items-end border-b border-white/5 pb-16 mb-10">
            <div>
              <div className="font-serif text-4xl mb-6">
                Elevante<span className="text-beige-300 italic">Media</span>
              </div>
              <p className="text-beige-200/60 font-light max-w-sm">
                Helping businesses get more clients and increase revenue through professional marketing.
              </p>
            </div>
            
            <div className="flex md:justify-end gap-12 text-sm tracking-widest uppercase font-medium text-beige-200">
              <a href="#services" className="hover:text-beige-300 transition-colors">Services</a>
              <a href="#about" className="hover:text-beige-300 transition-colors">About Us</a>
              <a href="#contact" className="hover:text-beige-300 transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-beige-200/40 text-sm font-light">
            <p>
              © {new Date().getFullYear()} Elevante Media. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
               <span className="flex items-center gap-2">
                 <MapPin size={14} /> Accra, Ghana
               </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
