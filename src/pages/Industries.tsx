import React from 'react';
import { motion } from 'framer-motion';
import { Bike, Car, Factory, Building2, Wrench, Settings } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import cycleParts from '@/assets/cycle-parts.jpg';
import Call from '../components/CallButton'; // import the Call component
import Whatsapp from '@/components/Whatsapp'; // import the WhatsApp component

const Industries = () => {
  const industries = [
    {
      title: 'Bicycle Industry',
      icon: Bike,
      image: cycleParts,
      description: 'Specialized fasteners for bicycle frames, components, and accessories. Our cycle parts bolts are engineered for lightweight strength and corrosion resistance.',
      applications: ['Frame Assembly', 'Brake Systems', 'Gear Mechanisms', 'Wheel Components'],
      benefits: ['Weight Optimization', 'Corrosion Resistance', 'High Tensile Strength', 'Precise Tolerances']
    },
    {
      title: 'Automotive Industry',
      icon: Car,
      image: 'https://media.istockphoto.com/id/1356114030/photo/steel-metal-bolts-and-other-fasteners.jpg?s=612x612&w=0&k=20&c=mo-Z8JtcT2u9m93wAFRV0D69yTl3tZvVnAAlemXwZ8A=',
      description: 'High-performance fasteners for automotive manufacturing and aftermarket applications. Meeting strict OEM specifications and quality standards.',
      applications: ['Engine Assembly', 'Chassis Components', 'Body Panels', 'Transmission Systems'],
      benefits: ['Temperature Resistance', 'Vibration Proof', 'OEM Quality', 'Durability']
    },
    {
      title: 'Heavy Machinery',
      icon: Factory,
      image: 'https://media.istockphoto.com/id/896029122/photo/mechanic-screws-big-bolt-with-large-and-heavy-wrench-key.jpg?s=612x612&w=0&k=20&c=n-RxKBraH2tkWmA2NJhp8KqahvtrVdTCm-kVSokd6OY=',
      description: 'Robust industrial fasteners designed for heavy-duty machinery and equipment. Built to withstand extreme loads and harsh operating conditions.',
      applications: ['Construction Equipment', 'Mining Machinery', 'Agricultural Equipment', 'Manufacturing Tools'],
      benefits: ['Heavy Load Capacity', 'Weather Resistance', 'Long Service Life', 'Maintenance Friendly']
    },
    {
      title: 'Construction',
      icon: Building2,
      image: 'https://www.shutterstock.com/image-photo/detail-steel-screw-bolts-connecting-600nw-2139169173.jpg',
      description: 'Reliable fastening solutions for construction and infrastructure projects. Ensuring structural integrity and safety in building applications.',
      applications: ['Steel Structures', 'Bridge Construction', 'Building Frameworks', 'Infrastructure'],
      benefits: ['Structural Strength', 'Code Compliance', 'Safety Standards', 'Easy Installation']
    }
  ];

  const capabilities = [
    {
      icon: Wrench,
      title: 'Custom Engineering',
      description: 'Tailored fastener solutions designed to meet specific industry requirements and applications.'
    },
    {
      icon: Settings,
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality control processes ensuring consistent performance across all industries.'
    }
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-charcoal via-charcoal to-industrial-blue/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-clean-white mb-6 industrial-heading">
              Industries We Serve
            </h1>
            <p className="text-xl md:text-2xl text-metallic-silver max-w-4xl mx-auto">
              From bicycles to heavy machinery, our precision fasteners provide 
              reliable solutions across diverse industrial applications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}>
                  {/* Content */}
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-industrial-blue to-accent rounded-lg shadow-glow">
                        <industry.icon className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-foreground industrial-heading">
                        {industry.title}
                      </h2>
                    </div>
                    
                    <p className="text-lg text-muted-foreground">
                      {industry.description}
                    </p>

                    {/* Applications */}
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3 industrial-heading">
                        Key Applications
                      </h3>
                      <div className="grid grid-cols-2 gap-2">
                        {industry.applications.map((app, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-industrial-blue rounded-full"></div>
                            <span className="text-muted-foreground">{app}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3 industrial-heading">
                        Product Benefits
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {industry.benefits.map((benefit, idx) => (
                          <span 
                            key={idx}
                            className="bg-industrial-blue/10 text-industrial-blue px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* <Button 
                      size="lg"
                      className="bg-industrial-blue hover:bg-industrial-blue/90 text-white shadow-glow hover:shadow-lg transition-all duration-300"
                    >
                      Learn More About Solutions
                    </Button> */}
                  </div>

                  {/* Image */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="relative overflow-hidden rounded-2xl shadow-metallic group">
                      <img
                        src={industry.image}
                        alt={industry.title}
                        className="w-full h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent"></div>
                      <div className="absolute bottom-6 left-6">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center justify-center w-10 h-10 bg-industrial-blue rounded-lg shadow-glow">
                            <industry.icon className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-clean-white font-semibold text-lg">
                            {industry.title}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 industrial-heading">
              Cross-Industry Capabilities
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our expertise and manufacturing capabilities enable us to serve diverse industries 
              with specialized solutions and consistent quality.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <Card className="h-full shadow-metallic hover:shadow-glow transition-all duration-300 group">
                  <CardContent className="p-8 text-center">
                    <capability.icon className="w-12 h-12 text-industrial-blue mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-semibold text-foreground mb-3 industrial-heading">
                      {capability.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {capability.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 industrial-heading">
              Don't See Your Industry?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              We work with companies across many sectors. Contact us to discuss how our 
              fastener solutions can meet your specific industry requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => window.location.href = '/contact'}
                className="bg-industrial-blue hover:bg-industrial-blue/90 text-white px-8 py-3 text-lg shadow-glow hover:shadow-lg transition-all duration-300"
              >
                Discuss Your Requirements
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.location.href = '/products'}
                className="border-metallic-silver text-foreground hover:bg-muted px-8 py-3 text-lg transition-all duration-300"
              >
                View All Products
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

        {/* Call and WhatsApp Buttons */}
           <Call/>
           <Whatsapp />
    </div>
  );
};

export default Industries;