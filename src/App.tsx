import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { 
  ArrowRight,
  Target,
  Smartphone,
  Video,
  BarChart3,
  CheckCircle2,
  TrendingUp
} from 'lucide-react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const heroImageY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.21, 0.47, 0.32, 0.98]
      }
    })
  };

  return (
    <div className="font-sans bg-black text-white min-h-screen relative">
      {/* Navigation */}
      <nav className="fixed w-full z-50 top-0 border-b border-zinc-900 bg-black/80 backdrop-blur-xl">
        <div className="max-w-[90rem] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 relative group cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <img 
              src="/logo.png" 
              alt="Elevante Media Logo" 
              className="h-8 md:h-10 w-auto invert brightness-0 opacity-90 transition-opacity duration-300 group-hover:opacity-100" 
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling!.classList.remove('hidden');
              }}
            />
            <div className="hidden font-semibold text-xl tracking-tight text-white items-center gap-1">
              Elevante<span className="text-zinc-500 font-normal">Media</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-10 text-sm tracking-wide text-zinc-400">
            <a href="#solution" className="hover:text-white transition-colors duration-300">Our Method</a>
            <a href="#work" className="hover:text-white transition-colors duration-300">Our Work</a>
            <a href="#services" className="hover:text-white transition-colors duration-300">Services</a>
            <a href="#contact" className="hover:text-white transition-colors duration-300">Contact</a>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://wa.me/233536106660?text=Hi,%20I’m%20interested%20in%20learning%20more%20about%20your%20marketing%20services%20for%20my%20business." 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-medium hover:bg-zinc-200 transition-colors duration-300"
            >
              Get Customers
            </a>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative px-6 lg:px-12 pt-12 pb-20 md:pt-20 md:pb-24 max-w-[90rem] mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 relative z-10 w-full md:w-1/2">
            <motion.div custom={0} initial="hidden" animate="visible" variants={fadeUp} className="mb-6">
              <span className="bg-zinc-900 border border-zinc-800 text-zinc-300 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase">
                Premium Marketing That Brings You Clients
              </span>
            </motion.div>
            
            <motion.h1 
              custom={1} initial="hidden" animate="visible" variants={fadeUp}
              className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-8"
            >
              We don't just create content.<br />
              <span className="text-gradient">We get you customers.</span>
            </motion.h1>
            
            <motion.p 
              custom={2} initial="hidden" animate="visible" variants={fadeUp}
              className="text-zinc-400 text-lg md:text-xl max-w-2xl font-light leading-relaxed mb-12"
            >
              Based in Accra, Elevante Media builds strategic short-form video and marketing systems that turn attention into actual revenue for premium brands.
            </motion.p>
            
            <motion.div 
              custom={3} initial="hidden" animate="visible" variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a 
                href="https://wa.me/233536106660?text=Hi,%20I’m%20interested%20in%20learning%20more%20about%20your%20marketing%20services%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white text-black px-8 py-4 rounded-full text-base font-medium overflow-hidden flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors"
              >
                Get More Customers
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#services"
                className="group border border-zinc-800 bg-zinc-950 hover:bg-zinc-900 text-white px-8 py-4 rounded-full text-base font-medium flex items-center justify-center transition-colors"
              >
                See How We Do It
              </a>
            </motion.div>
          </div>

          <motion.div 
            custom={4} initial="hidden" animate="visible" variants={fadeUp}
            className="flex-1 w-full relative md:-translate-y-8 lg:-translate-y-12"
          >
            <div className="aspect-[3/5] sm:aspect-[2/3] lg:aspect-[5/8] rounded-3xl overflow-hidden glass-panel relative z-10 w-full max-w-lg mx-auto">
                <div className="w-full h-full relative">
                    <motion.img 
                      src="https://elevantemedia.com/ceo.jpg"
                      alt="CEO"
                      className="absolute inset-0 w-full h-full object-cover object-[center_30%]" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                    
                    <div className="absolute bottom-0 left-0 p-8 w-full">
                        <div className="flex items-center gap-3 text-white mb-2">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <p className="text-sm font-medium tracking-wider uppercase">Generating Leads</p>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Minimalist Grid Pattern Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] -z-10 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
          </motion.div>
        </section>

        {/* Problem Section */}
        <section id="problem" className="pt-10 pb-12 md:pt-12 md:pb-16 border-t border-zinc-900">
          <div className="max-w-[90rem] mx-auto px-6 lg:px-12">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
              className="mb-10 md:mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-gradient">The Reality.</h2>
              <p className="text-zinc-400 text-lg max-w-xl">If you are a business owner operating today, you've likely experienced this frustration.</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  title: "Posting, but getting nowhere.", 
                  desc: "You have a great business. You post on Instagram. But your content isn't translating into daily inquiries or walk-ins." 
                },
                { 
                  title: "Inconsistent lead flow.", 
                  desc: "Some weeks are good, some are quiet. You rely entirely on referrals and word-of-mouth, which makes revenue unpredictable." 
                },
                { 
                  title: "Vanity metrics over sales.", 
                  desc: "You might be getting likes, comments, and views from random accounts, but your bank account isn't reflecting the attention." 
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                  className="glass-panel p-8 md:p-10 rounded-3xl"
                >
                  <h3 className="text-xl font-semibold mb-4 text-white">{item.title}</h3>
                  <p className="text-zinc-400 leading-relaxed font-light">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Solution Section (Elevante Method) */}
        <section id="solution" className="pt-16 pb-24 md:pt-20 md:pb-32 bg-zinc-950 border-t border-zinc-900 overflow-hidden relative">
           <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-zinc-900/40 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 opacity-50" />
           
           <div className="max-w-[90rem] mx-auto px-6 lg:px-12 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <div className="mb-6">
                  <span className="text-zinc-500 tracking-wider uppercase text-xs font-bold">The Blueprint</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
                  The Elevante<br /><span className="text-gradient">Method.</span>
                </h2>
                <p className="text-zinc-400 font-light leading-relaxed text-lg mb-12 max-w-lg">
                  We don't do "aesthetic only" content. We build an end-to-end client acquisition system that captures attention and turns it into paying customers.
                </p>
                
                <div className="space-y-10">
                  <div className="flex gap-6">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                      <span className="font-bold text-white">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Attention</h3>
                      <p className="text-zinc-400 font-light">Premium, short-form video that stops the scroll and positions your business as the highest authority in your market.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                      <span className="font-bold text-white">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Strategy</h3>
                      <p className="text-zinc-400 font-light">Targeted distribution to ensure your content is seen by the exact demographic that can afford and needs your services.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                      <span className="font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-white">Conversion</h3>
                      <p className="text-zinc-300 font-light">Frictionless systems that move viewers off social media directly into your WhatsApp inbox or booking calendar.</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="relative aspect-[4/3] rounded-3xl overflow-hidden glass-panel"
              >
                <img 
                  src="https://elevantemedia.com/meeting.jpg" 
                  alt="African business professionals in a meeting" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="glass-panel bg-black/60 backdrop-blur-xl p-6 rounded-2xl border-white/10 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                      <TrendingUp className="text-green-500" size={24} strokeWidth={2} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">Revenue Focus</h4>
                      <p className="text-zinc-400 text-sm">Every campaign is measured by ROI, not vanity metrics.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
           </div>
        </section>

        {/* Featured Work */}
        <section id="work" className="pt-12 pb-24 md:pt-16 md:pb-32 bg-black border-t border-zinc-900 relative">
          <div className="max-w-[90rem] mx-auto px-6 lg:px-12">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16 md:mb-24 flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
                Our Work
              </h2>
              <p className="text-zinc-400 font-light leading-relaxed text-lg max-w-2xl mx-auto">
                A selection of cinematic visual content designed to help businesses stand out, build trust, and attract customer attention.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { video: "/reel1.mp4", text: "Premium short-form content designed to attract attention" },
                { video: "/reel2.mp4", text: "Visual storytelling built for modern businesses" },
                { video: "/reel3.mp4", text: "Content focused on visibility and customer engagement" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                  className="group relative flex flex-col items-center text-center"
                >
                  <div className="w-full relative aspect-[9/16] rounded-[2rem] overflow-hidden glass-panel border border-zinc-800 mb-8 max-w-[320px] mx-auto">
                    <video 
                      src={item.video} 
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
                  </div>
                  <p className="text-zinc-400 font-light leading-relaxed max-w-[280px]">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Visual Showcase */}
        <section className="py-24 md:py-32 bg-black border-t border-zinc-900 relative">
          <div className="max-w-[90rem] mx-auto px-6 lg:px-12">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16 md:mb-24 flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
                Visual Showcase
              </h2>
              <p className="text-zinc-400 font-light leading-relaxed text-lg max-w-2xl mx-auto">
                Premium visuals crafted to capture attention and elevate brands.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  img: "https://elevantemedia.com/apartment.jpg.png", 
                  text: "High-end real estate visuals designed to attract premium clients." 
                },
                { 
                  img: "https://elevantemedia.com/food.jpg.png",
                  text: "Professional food content that makes brands stand out online." 
                },
                { 
                  img: "https://elevantemedia.com/gym.jpg.png", 
                  text: "Powerful fitness visuals built to capture attention and engagement." 
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                  className="group relative flex flex-col items-center text-center"
                >
                  <div className="w-full relative aspect-square sm:aspect-[4/5] rounded-[2rem] overflow-hidden glass-panel border border-zinc-800 mb-8 mx-auto">
                    <img 
                      src={item.img} 
                      alt="Visual showcase" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
                  </div>
                  <p className="text-zinc-400 font-light leading-relaxed px-2">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services / Outcomes */}
        <section id="services" className="py-24 md:py-32 border-t border-zinc-900 relative">
          <div className="max-w-[90rem] mx-auto px-6 lg:px-12">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16 md:mb-24 max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Built For Conversions.</h2>
              <p className="text-zinc-400 text-lg font-light">
                We do not sell generic "social media management." We implement outcome-based solutions designed to acquire customers.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <Video size={32} strokeWidth={1.5} />,
                  title: "Customer-Generating Content",
                  desc: "Studio-grade short-form video and photography that aggressively builds trust and drives intent to buy.",
                  highlight: true
                },
                {
                  icon: <Target size={32} strokeWidth={1.5} />,
                  title: "Social Positioning & Strategy",
                  desc: "Restructuring your profiles from a digital brochure into a highly optimized sales funnel.",
                  highlight: false
                },
                {
                  icon: <Smartphone size={32} strokeWidth={1.5} />,
                  title: "WhatsApp & Booking Funnels",
                  desc: "Automated systems that capture interest and direct high-quality leads straight to your sales channels.",
                  highlight: false
                }
              ].map((service, i) => (
                <motion.div 
                  key={i}
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                  className={`p-10 rounded-3xl border transition-all duration-300 ${
                    service.highlight 
                      ? "bg-zinc-900 border-zinc-700" 
                      : "glass-panel glass-panel-hover"
                  }`}
                >
                  <div className={`mb-6 ${service.highlight ? "text-white" : "text-zinc-400"}`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>
                  <p className="text-zinc-400 leading-relaxed font-light">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Who We Work With */}
        <section className="py-24 border-t border-zinc-900 bg-zinc-950">
          <div className="max-w-[90rem] mx-auto px-6 lg:px-12">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Who We Work With</h2>
                <p className="text-zinc-400 text-lg font-light leading-relaxed mb-8 max-w-xl">
                  We partner exclusively with premium and growth-focused businesses that want to scale, can handle more capacity, and command premium pricing.
                </p>
                <ul className="grid grid-cols-2 gap-4 max-w-lg">
                  {["Aesthetic Clinics", "Luxury Real Estate", "Boutique Hotels", "Premium Restaurants", "High-End Gyms", "Service Businesses"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-zinc-300">
                      <CheckCircle2 size={18} className="text-zinc-500" />
                      <span className="font-medium text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex-1 w-full flex justify-center md:justify-end">
                  <div className="grid grid-cols-2 gap-4 w-full max-w-lg">
                    <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=600" alt="Hotel Interior" className="rounded-2xl rounded-tr-[4rem] object-cover h-48 w-full" />
                    <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600" alt="Premium Gym" className="rounded-2xl object-cover h-48 w-full mt-8" />
                    <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600" alt="Restaurant interior" className="rounded-2xl object-cover h-48 w-full -mt-8" />
                    <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600" alt="Clinic interior" className="rounded-2xl rounded-bl-[4rem] object-cover h-48 w-full" />
                  </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results / Expected Outcomes */}
        <section className="py-24 md:py-32 border-t border-zinc-900">
          <div className="max-w-[90rem] mx-auto px-6 lg:px-12 text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-20">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Expected Outcomes.</h2>
              <p className="text-zinc-400 text-lg max-w-2xl mx-auto font-light">
                When you partner with Elevante Media, you are making an investment in tangible business growth.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Maximum Visibility", desc: "Dominate your local market. Become the most recognized and sought-after option in your industry within Accra." },
                { title: "Qualified Inquiries", desc: "Stop dealing with window shoppers. Attract customers who are pre-sold and ready to buy before they even message you." },
                { title: "Premium Positioning", desc: "Look so exceptionally good that prospects never question your pricing and choose you over cheaper competitors." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                  className="glass-panel p-10 rounded-3xl flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6">
                    <BarChart3 className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
                  <p className="text-zinc-400 leading-relaxed font-light">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Elevante Media */}
        <section className="py-24 md:py-32 border-t border-zinc-900 bg-zinc-950">
          <div className="max-w-[90rem] mx-auto px-6 lg:px-12 flex flex-col items-center text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-3xl">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">Creativity Meets <span className="text-zinc-500">Sales.</span></h2>
              <p className="text-zinc-300 text-lg md:text-xl font-light leading-relaxed mb-6">
                Most agencies just want to make pretty videos. We care about your bottom line.
              </p>
              <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed">
                Every piece of content, every ad, and every system we deploy is designed with one single, ruthless goal: to grow your revenue. We understand business, not just cameras.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Strong CTA Section */}
        <section id="contact" className="py-32 border-t border-zinc-900 relative overflow-hidden">
          {/* Subtle Background Accent */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900/50 via-black to-black -z-10" />

          <div className="max-w-[40rem] mx-auto px-6 text-center">
             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <span className="text-zinc-500 tracking-wider uppercase text-xs font-bold block mb-6">Limited Capacity</span>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
                  Let's Scale Your Business.
                </h2>
                <p className="text-zinc-400 font-light text-lg mb-12">
                  If you want more customers and a brand that commands respect, let's talk. We take on a limited number of clients per quarter to ensure we can deliver massive results for everyone we work with.
                </p>
                
                <a 
                  href="https://wa.me/233536106660?text=Hi,%20I’m%20interested%20in%20learning%20more%20about%20your%20marketing%20services%20for%20my%20business." 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black px-10 py-5 rounded-full text-lg font-bold hover:bg-zinc-200 transition-transform active:scale-95 inline-flex items-center gap-3 shadow-[0_0_40px_rgba(255,255,255,0.1)]"
                >
                  Book A Free Strategy Call
                  <ArrowRight size={20} />
                </a>
             </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-900 py-12 bg-black">
        <div className="max-w-[90rem] mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 relative opacity-50 grayscale">
              <img 
                src="/logo.png" 
                alt="Elevante Media Logo" 
                className="h-8 w-auto invert brightness-0" 
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling!.classList.remove('hidden');
                }}
              />
              <div className="hidden font-bold text-xl tracking-tight text-white items-center gap-1">
                Elevante<span className="text-zinc-500 font-normal">Media</span>
              </div>
            </div>
            
            <p className="text-zinc-600 text-sm font-light">
              © {new Date().getFullYear()} Elevante Media. Accra, Ghana.
            </p>
            
            <div className="flex gap-6 text-sm text-zinc-500">
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            </div>
        </div>
      </footer>
    </div>
  );
}
