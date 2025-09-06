import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Target, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Call from '../components/CallButton'; // import the Call component
import Whatsapp from '@/components/Whatsapp'; // import the WhatsApp component

const About = () => {

  const values = [
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'Uncompromising commitment to precision and quality in every fastener we manufacture.'
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Building lasting relationships through exceptional service and tailored solutions.'
    },
    {
      icon: Target,
      title: 'Precision Engineering',
      description: 'State-of-the-art manufacturing processes ensuring perfect specifications every time.'
    },
    {
      icon: TrendingUp,
      title: 'Continuous Innovation',
      description: 'Investing in technology and processes to stay ahead of industry demands.'
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
              About Tuli Enterprise
            </h1>
            <p className="text-xl md:text-2xl text-metallic-silver max-w-4xl mx-auto">
              Nearly three decades of excellence in precision fastener manufacturing,
              built on the foundation of quality, innovation, and customer satisfaction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className=""
            >
              <h2 className="text-3xl md:text-4xl  text-justify font-bold text-foreground mb-6 industrial-heading">
                Founded by Visionary Leadership
              </h2>
              <p className="text-lg text-justify text-muted-foreground mb-6">
                Tuli Enterprise was founded by Mr. Gurbax Singh, a visionary entrepreneur with a deep-rooted passion for manufacturing excellence. With years of experience and dedication, he transformed a small setup into a growing enterprise known for producing high-quality bolts, especially for cycle parts. His strong values, eye for detail, and focus on customer satisfaction continue to drive the company forward.
              </p>
              <p className="text-lg text-justify text-muted-foreground mb-6">
                Today, under his continued leadership, Tuli Enterprise has achieved remarkable milestones,
                serving over 25 crore bolts annually and maintaining an unwavering commitment to excellence
                that has earned the trust of customers across various sectors.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-industrial-blue/10 to-metallic-silver/10 p-8 rounded-2xl shadow-metallic">
                <div className="text-6xl mb-4 text-center">👨‍💼</div>
                <h3 className="text-2xl font-bold text-center text-foreground mb-2">Mr. Gurbax Singh</h3>
                <p className="text-center text-muted-foreground mb-4">Founder & Visionary Leader</p>
                <blockquote className="text-center italic text-muted-foreground">
                  "Quality is not just what we deliver, it's who we are. Every bolt we manufacture carries
                  our commitment to excellence and our customer's trust."
                </blockquote>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="h-full shadow-glow hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 industrial-heading">Our Mission</h3>
                  <p className="text-muted-foreground text-lg text-justify">
                    To deliver reliable, high-qualityfasteners that power progressacross industries. We aim to bethe trusted partner for precisionbolts especially in cycle parts bycombining innovation, efficiency,and customer-first service.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="h-full shadow-glow hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">🔮</div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 industrial-heading">Our Vision</h3>
                  <p className="text-muted-foreground text-lg text-justify">
                    At Tuli Enterprise, our vision is tobe recognized as a leading forcein the global fastener industry bysetting new benchmarks inquality, reliability, andinnovation. We strive to becomethe preferred choice for clientsacross sectors—especially incycle manufacturing—bycontinuously evolving ourtechnology, expanding ourproduct range, and maintaininguncompromised standards. Ourgoal is to contribute to India'sindustrial growth and make TuliEnterprise a trusted name bothnationally and internationally.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Values Section */}
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
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do and define who we are as a company.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="h-full text-center shadow-metallic hover:shadow-glow transition-all duration-300 group">
                  <CardContent className="p-8">
                    <value.icon className="w-12 h-12 text-industrial-blue mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-semibold text-foreground mb-3 industrial-heading">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
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

export default About;