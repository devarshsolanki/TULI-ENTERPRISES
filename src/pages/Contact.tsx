import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import emailjs from "emailjs-com";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  // ✅ handle form submit with EmailJS
  const handleSubmit = (e) => {
     e.preventDefault();
 
     if (!formData.name || !formData.email || !formData.message) {
       toast({
         title: "Missing Information",
         description: "Please fill in all required fields.",
         variant: "destructive"
       });
       return;
     }
 
     emailjs.send(
       import.meta.env.VITE_EMAILJS_SERVICE_ID,   // from .env
       import.meta.env.VITE_EMAILJS_TEMPLATE_ID,  // from .env
       {
         from_name: formData.name,
         from_email: formData.email,
         phone: formData.phone,
         company: formData.company,
         message: formData.message,
       },
       import.meta.env.VITE_EMAILJS_PUBLIC_KEY    // from .env
     )
     .then(() => {
       toast({
         title: "Message Sent!",
         description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
       });
       setFormData({
         name: '',
         email: '',
         phone: '',
         company: '',
         message: ''
       });
     })
     .catch((error) => {
       console.error("EmailJS Error:", error);
       toast({
         title: "Error",
         description: "Failed to send message. Please try again later.",
         variant: "destructive"
       });
     });
   };
 
   const handleChange = (e) => {
     setFormData(prev => ({
       ...prev,
       [e.target.name]: e.target.value
     }));
   };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Location',
      details: [`Jaspal Bangar Road, Industrial Area C, Dhandari Kalan, Ludhiana,Punjab -141006`],
      link: 'https://maps.google.com'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 788 882 8694', '+91 941 748 8062'],
      link: 'tel:+917888828694'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['parampreetsinghwork@gmail.com'],
      link: 'mailto:parampreetsinghwork@gmail.com'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Saturday: 9:00 AM - 6:00 PM', 'Sunday: Closed'],
      link: null
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
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-metallic-silver max-w-4xl mx-auto">
              Get in touch with our team for quotes, technical support, or any questions 
              about our fastener solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="pt-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="h-full text-center shadow-metallic hover:shadow-glow transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-industrial-blue to-accent rounded-xl mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <info.icon className="w-6 h-6 text-white" onClick={ () => {info.link && window.open(info.link, '_blank')}} />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3 industrial-heading">
                      {info.title}
                    </h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-sm text-muted-foreground mb-1">
                        {info.link && idx === 0 ? (
                          <a 
                            href={info.link} 
                            className="hover:text-industrial-blue transition-colors"
                            target={info.link.startsWith('http') ? '_blank' : '_self'}
                            rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            {detail}
                          </a>
                        ) : (
                          detail
                        )}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="shadow-glow hover:shadow-lg transition-all duration-300 ">
                <CardContent className="p-8">
                  <h2 className="text-2xl md:text-3xl flex justify-center font-bold text-foreground mb-6 industrial-heading">
                    Send Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@company.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Company name"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your fastener requirements, quantities, specifications, or any questions you have..."
                        className="min-h-[120px]"
                        required
                      />
                    </div>

                    <Button 
                      type="submit"
                      size="lg"
                      className="w-full bg-industrial-blue hover:bg-industrial-blue/90 text-white shadow-glow hover:shadow-lg transition-all duration-300 group"
                    >
                      <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
              
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Google Maps embed preview */}
              <Card className="shadow-metallic">
                <CardContent className="p-0">
                  {/* increased height for better preview; responsive sizes for small/large screens */}
                  <div className="relative h-80 md:h-96 lg:h-[350px] rounded-lg overflow-hidden">
                    <iframe
                      title="Tuli Enterprise - Google Maps"
                      src="https://maps.google.com/maps?q=30.8504696,75.9118592&z=17&output=embed"
                      className="absolute inset-0 w-full h-full border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                    {/* overlay info/button (optional) */}
                    <div className="absolute left-4 bottom-4 bg-background/80 backdrop-blur px-3 py-2 rounded-md shadow-sm">
                      <h3 className="text-sm font-semibold text-foreground">Tuli Enterprise</h3>
                      <p className="text-xs text-muted-foreground">Jaspal Bangar Road, Industrial Area C, Dhandari Kalan</p>
                      <div className="mt-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            window.open(
                              'https://www.google.com/maps/place/Jaspal+Bangar+Road,+Punjab/@30.8504742,75.9092843,17z',
                              '_blank'
                            )
                          }
                        >
                          View on Google Maps
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Response Promise */}
              <Card className="shadow-metallic">
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold flex justify-center text-foreground mb-4 industrial-heading">
                    Quick Response Guarantee
                  </h3>

                  {/* 2x2 layout: responsive -> single column on very small, two columns otherwise */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-center gap-2 p-1">
                      <div className="w-2 h-2 bg-industrial-blue rounded-full" />
                      <span className="text-muted-foreground">Quotes within 24 hours</span>
                    </div>

                    <div className="flex items-center gap-2 p-1">
                      <div className="w-2 h-2 bg-industrial-blue rounded-full" />
                      <span className="text-muted-foreground">Technical support available</span>
                    </div>

                    <div className="flex items-center gap-2 p-1">
                      <div className="w-2 h-2 bg-industrial-blue rounded-full" />
                      <span className="text-muted-foreground">Custom solutions discussed</span>
                    </div>

                    <div className="flex items-center gap-2 p-1">
                      <div className="w-2 h-2 bg-industrial-blue rounded-full" />
                      <span className="text-muted-foreground">Sample requests processed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
            {/* Emergency Contact */}
            <div className="flex justify-center">
                <Card className="shadow-metallic w-[350px] lg:w-[650px] mt-5 flex justify-center bg-[#fff]  border-industrial-blue/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold justify-center flex text-foreground mb-4 industrial-heading">
                    Urgent Requirements?
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    For urgent orders or technical emergencies, contact our dedicated support line.
                  </p>
                  <Button 
                    className="w-full bg-industrial-blue hover:bg-industrial-blue/90 text-white shadow-glow hover:shadow-lg transition-all duration-300 group"
                    onClick={() => window.open('tel:+919876543210')}
                  >
                    <Phone className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                   
                    <a href="tel:+91 788 882 8694" aria-label="Contact sales"> Call Emergency Line</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
            
        </div>
        
      </section>
    </div>
  );
};

export default Contact;