import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Factory, Award, Clock, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Call from '../components/CallButton'; // import the Call component
import Whatsapp from '@/components/Whatsapp'; // import the WhatsApp component

const WhyChooseUs = () => {
  const features = [
    {
      icon: Target,
      title: 'Precision Engineering',
      description: 'Advanced manufacturing processes and quality control systems ensure every fastener meets exact specifications with consistent precision.',
      highlights: ['±0.001" Tolerance', 'CNC Machining', 'Quality Testing', '100% Inspection']
    },
    {
      icon: Users,
      title: 'Cycle Parts Experts',
      description: 'Specialized expertise in bicycle industry fasteners with deep understanding of unique requirements and performance standards.',
      highlights: ['Industry Expertise', 'Custom Solutions', 'Performance Testing', 'OEM Partnerships']
    },
    {
      icon: Factory,
      title: 'Versatile Production',
      description: 'State-of-the-art manufacturing facilities capable of producing diverse fastener types across multiple industries and applications.',
      highlights: ['Multi-Industry Capability', 'Scalable Production', 'Modern Equipment', 'Flexible Manufacturing']
    },
    {
      icon: Award,
      title: 'Consistent Quality',
      description: 'Rigorous quality management systems and certifications ensure reliable performance and compliance with international standards.',
      highlights: ['ISO Certified', 'Quality Assurance', 'Material Testing', 'Standards Compliance']
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'Efficient production planning and logistics management ensure reliable delivery schedules that keep your projects on track.',
      highlights: ['Reliable Scheduling', 'Global Shipping', 'Inventory Management', 'Fast Turnaround']
    }
  ];

  const stats = [
    { number: '25+', label: 'Crore Bolts Served', icon: '🎯' },
    { number: '38+', label: 'Years Experience', icon: '📅' },
    { number: '100%', label: 'Quality Assured', icon: '✅' },
    { number: '10+', label: 'Product Variants', icon: '⚙️' }
  ];

  const certifications = [
    { name: 'ISO 9001:2015', description: 'Quality Management System' },
    { name: 'DIN Standards', description: 'German Industrial Standards' },
    { name: 'ANSI Compliance', description: 'American National Standards' },
    { name: 'Material Certificates', description: 'Traceability & Testing' }
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
              Why Choose Us
            </h1>
            <p className="text-xl md:text-2xl text-metallic-silver max-w-4xl mx-auto">
              Decades of experience, unwavering commitment to quality, and innovative solutions 
              make us the trusted partner for your fastener needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
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
              Our Competitive Advantages
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Five key differentiators that set Tuli Enterprise apart in the industry.
            </p>
          </motion.div>

          <div className="space-y-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
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
                      <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-industrial-blue to-accent rounded-xl shadow-glow">
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground industrial-heading">
                        {feature.title}
                      </h3>
                    </div>
                    
                    <p className="text-lg text-muted-foreground">
                      {feature.description}
                    </p>

                    {/* Highlights */}
                    <div className="grid grid-cols-2 gap-3">
                      {feature.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-industrial-blue rounded-full"></div>
                          <span className="text-muted-foreground font-medium">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Visual Element */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <Card className="bg-gradient-to-br from-muted/50 to-background border-2 border-industrial-blue/20 shadow-glow hover:shadow-lg transition-all duration-300 group">
                      <CardContent className="p-12 text-center">
                        <feature.icon className="w-24 h-24 text-industrial-blue mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="text-xl font-bold text-foreground mb-3 industrial-heading">
                          {feature.title}
                        </h4>
                        <div className="text-4xl font-bold text-industrial-blue mb-2">
                          {index === 0 ? '28+' : index === 1 ? '50+' : index === 2 ? '100%' : index === 3 ? 'ISO' : '24/7'}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {index === 0 ? 'Years Excellence' : index === 1 ? 'Product Types' : index === 2 ? 'Quality Rate' : index === 3 ? 'Certified' : 'Support'}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
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
              Numbers That Speak
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our track record of excellence demonstrated through measurable achievements.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="text-center shadow-metallic hover:shadow-glow transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                      {stat.icon}
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-industrial-blue mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      {/* <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 industrial-heading">
              Quality Certifications
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our commitment to quality is validated by international certifications and standards compliance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="h-full text-center shadow-metallic hover:shadow-glow transition-all duration-300 group">
                  <CardContent className="p-6">
                    <Shield className="w-12 h-12 text-industrial-blue mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-lg font-bold text-foreground mb-2 industrial-heading">
                      {cert.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {cert.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      <section className="py-20 bg-charcoal border-b border-metallic-silver/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-clean-white mb-6 industrial-heading">
              Ready to Experience the Difference?
            </h2>
            <p className="text-xl text-metallic-silver mb-8 max-w-3xl mx-auto">
              Join thousands of satisfied customers who trust Tuli Enterprises for their critical applications. 
              Let us show you why quality matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => window.location.href = '/contact'}
                className="bg-industrial-blue hover:bg-industrial-blue/90 text-white px-8 py-3 text-lg shadow-glow hover:shadow-lg transition-all duration-300"
              >
                 Contact Our Team
              </Button>
              {/* <Button 
                variant="outline" 
                size="lg"
                className="border-metallic-silver text-metallic-silver hover:bg-metallic-silver hover:text-charcoal px-8 py-3 text-lg transition-all duration-300"
              >
                Contact Our Team
              </Button> */}
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

export default WhyChooseUs;