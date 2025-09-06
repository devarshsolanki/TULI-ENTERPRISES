import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Award, Clock, Users, Target, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-industrial.jpg';
import About from '../assets/about.png'
import Call from '../components/CallButton'; // import the Call component
import Whatsapp from '@/components/Whatsapp'; // import the WhatsApp component
import p1 from '../assets/p1.png'
import p5 from '../assets/p5.png'
import p2 from '../assets/p2.png'
import p3 from '../assets/p3.png'

const Index = () => {
  const stats = [
    { label: 'Bolts Served', value: '25+ Crore', icon: Target },
    { label: 'Years of Excellence', value: 'Since 1986', icon: Clock },
    { label: 'Industries Served', value: 'Multi-Industry', icon: Users },
    { label: 'Quality Assured', value: '100%', icon: Award },
  ];

  // New: sample featured products (replace images/links with real assets later)
  const featuredProducts = [
    {
      id: 'p1',
      name: 'Seat Kmani Bolt (Makhi Bolt)',
      specs: 'Grade 8.8 | M6 - M24 | Zinc plated',
      img: { src: p5, alt: 'Seat Kmani Bolt (Makhi Bolt)' }, // replace with actual asset import if available
      link: '/products'
    },
    {
      id: 'p2',
      name: 'high-quality bolts',
      specs: 'Stainless Steel | ISO 4762 | Metric',
      img: { src: p2, alt: 'high-quality bolts' },
      link: '/products'
    },
    {
      id: 'p3',
      name: 'Seat Piller bolt (Hex)',
      specs: 'Custom sizes | Heat treated | OEM ready',
      img: { src: p3, alt: 'Seat Piller bolt (Hex)' },
      link: '/products'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  // added state to show/hide the sticky CTA
  const [showStrip, setShowStrip] = useState(true);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-charcoal">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Industrial Fasteners Manufacturing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/50"></div>
        </div>

        {/* Hero Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-clean-white mb-6 industrial-heading"
          >
            Precision Fasteners
            <span className="block text-industrial-blue">Since 1986</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-metallic-silver mb-8 max-w-3xl mx-auto"
          >
            Leading manufacturer of high-quality bolts, screws, and industrial fasteners.
            Trusted by industries worldwide for precision engineering and reliable solutions.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button
              asChild
              size="lg"
              className="bg-industrial-blue hover:bg-industrial-blue/90 text-white px-8 py-3 text-lg group shadow-glow hover:shadow-lg transition-all duration-300"
            >
              <Link to="/products">
                View Products
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-metallic-silver text-black hover:bg-metallic-silver hover:text-[#012b5c] px-8 py-3 text-lg transition-all duration-300"
            >
              <Link to="/contact">
                Request Quote
               
              </Link>
                
            </Button>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <Card className="bg-charcoal/50 border-metallic-silver/20 backdrop-blur-sm shadow-metallic hover:shadow-glow transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <stat.icon className="w-8 h-8 text-industrial-blue mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <div className="text-2xl font-bold text-clean-white mb-1">{stat.value}</div>
                    <div className="text-sm text-metallic-silver">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Floating Animation Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-industrial-blue/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </section>

      {/* Quick Overview Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 industrial-heading">
              Industry-Leading Fastener Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From bicycle components to heavy machinery, our precision-engineered fasteners
              meet the highest standards of quality and reliability.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Cycle Parts Expertise",
                description: "Specialized bolts and fasteners for the bicycle industry, ensuring perfect fit and durability.",
                icon: "🚴"
              },
              {
                title: "Industrial Solutions",
                description: "Heavy-duty fasteners for machinery, construction, and manufacturing applications.",
                icon: "🏭"
              },
              {
                title: "Custom Manufacturing",
                description: "Tailored fastener solutions designed to meet your specific requirements and specifications.",
                icon: "⚙️"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <Card className="h-full hover:shadow-glow transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-8 text-center">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3 industrial-heading">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* New Section: About Company */}
      <section className="py-16 bg-gradient-to-b from-background to-background/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold text-foreground industrial-heading mb-4">
                About Tuli Enterprise
              </h2>
              <p className="text-base text-muted-foreground mb-4 leading-relaxed text-justify">

                We specialize in manufacturing high-quality bolts designed specifically for bicycle parts. With a deep understanding of the cycling industry, we focus on producing durable, precise, and rust-resistant fasteners that ensure smooth and safe rides.
              </p>
              <p className="text-base text-muted-foreground mb-6 leading-relaxed text-justify">
                Tuli Enterprise is a trusted name in the
                world of bolt manufacturing. While webegan our journey producing high-precision bolts for bicycle parts, we’venow expanded to manufacture alltypes of bolts for various industries automotive, machinery, construction,and more.
              </p>
            </div>

            <div>
              <Card className="  border-metallic-silver/10 shadow-sm  w-[450px]  mx-auto ">
              <img src={About} alt="Capabilities Snapshot" className=" h-[300px]  object-cover rounded-lg shadow-md" />
                
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* New Section: Featured Products */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground industrial-heading">Featured Products</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-2">Select products designed for reliability and performance — quick specs shown below.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((p) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="h-full hover:shadow-glow transition-all duration-300 group">
                  <CardContent className="p-4">
                    <div className="h-[220px] bg-slate-50 rounded-md mb-4 flex items-center justify-center text-muted-foreground">
                      {p.img ? (
                        <img src={p.img.src} alt={p.img.alt} className="h-full w-full object-cover rounded-md" />
                      ) : (
                        <span className="text-sm">Image Placeholder</span>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">{p.name}</h3>
                    {/* <p className="text-sm text-muted-foreground mb-4">{p.specs}</p> */}
                    <div className="flex gap-3">
                     <Button asChild size="sm" className="bg-industrial-blue text-white px-4 py-2">
                        <Link
                          to="/products"
                          aria-label="View Products"
                          onClick={() => {
                            setTimeout(() => {
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }, 100); // delay to ensure navigation finishes
                          }}
                        >
                          View
                        </Link>
                      </Button>
                      <Button size="sm" variant="outline" className="px-4 py-2">
                        <Link
                          to="/contact"
                          aria-label={`Request quote for ${p.name}`}
                          onClick={() => {
                            setTimeout(() => {
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }, 100); // small delay to ensure navigation completes
                          }}
                        >
                          Request Quote
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    {/* Call and WhatsApp Buttons */}
     <Call/>
      <Whatsapp />
    </div>
  );
};

export default Index;