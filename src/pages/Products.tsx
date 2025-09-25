import React, { useMemo, useState } from 'react';
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Brochure from '../assets/B.S. Fasteners.pdf'
import Call from '../components/CallButton'; // import the Call component
import Whatsapp from '@/components/Whatsapp'; // import the WhatsApp component
import p1 from '@/assets/p1.png';
import p2 from '@/assets/p2.png';
import p3 from '@/assets/p3.png';
import p4 from '@/assets/p4b.jpg';
import p5 from '@/assets/p5.png';
import p6 from '@/assets/p6.png';
import p7 from '@/assets/p7.png';
import p8 from '@/assets/p8.png';
import p9 from '@/assets/p9.jpg';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Cycle Parts', 'Industrial', 'machinery', 'Custom'];

  const products = [
    {
      id: 1,
      name: 'Ghori Bolts',
      categories: ['Cycle Parts'],
      image: p1,
      description: 'Hex bolts with coarse threads forshallow fastening applications.Also used in Cycle PartsAllen.',
      sizes: ['M4', 'M5', 'M6', 'M8'],
      features: ['Corrosion Resistant', 'Lightweight', 'High Tensile Strength']
    },
    {
      id: 2,
      name: 'Seat Piller bolt',
      categories: ['Cycle Parts'],
      image: p2,
      description: 'Round head bolt with nut and washer, commonly used in cycle seat. Also available in thin Threading',
      sizes: ['M8', 'M10', 'M12', 'M16', 'M20'],
      features: ['High Grade Steel', 'Zinc Plated', 'DIN Standards']
    },
    {
      id: 3,
      name: 'Seat Piller bolt (Hex)',
      categories: ['Industrial', 'Cycle Parts'],
      image: p3,
      description: 'High-quality hex bolt with nut andwasher, ideal for industrial and cycle part applications. ',
      sizes: ['M6', 'M8', 'M10', 'M12'],
      features: ['Temperature Resistant', 'Vibration Proof', 'OEM Quality']
    },
    {
      id: 4,
      name: 'Allen Bolt (L-Key Bolt)',
      categories: ['Industrial','Cycle Parts'],
      image: p4,
      description: 'Socket Head Cap Bolt Offers High Strength and is commonly used in machine parts, tools, clutches etc. where space is limited.',
      sizes: ['M6', 'M8', 'M10', 'M12', 'M16'],
      features: ['Galvanized', 'Weather Resistant', 'Easy Installation']
    },
    {
      id: 5,
      name: 'Seat Kmani Bolt (Makhi Bolt)',
      categories: ['Cycle Parts', 'machinery'],
      image: p5,
      description: 'Makhi bolt with round head, ideal for cycle and light machinery fittings. Available in many sizes usually 1" and 1.5"',
      sizes: ['M3', 'M4', 'M5', 'M6', 'M8', 'M10'],
      features: ['Alloy Steel', 'Black Oxide', 'High Torque']
    },
    {
      id: 6,
      name: 'Carriage bolt (3/4",1")',
      categories: ['Cycle Parts','Custom'],
      image: p6,
      description: 'Carrlage bolt with a smooth round head and square neck. Avallable in many sizes.',
      sizes: ['Custom Sizes Available'],
      features: ['Made to Order', 'Various Materials', 'Special Coatings']
    },
    {
      id: 7,
      name: 'Fan Bolt',
      categories: ['machinery','Cycle Parts'],
      image: p7,
      description: 'A hex head bolt with partial threading and a cross-drilled hole near the threaded end, used in fans. Available in many sizes.',
      sizes: ['Custom Sizes Available'],
      features: ['Made to Order', 'Various Materials', 'Special Coatings']
    },
    {
      id: 8,
      name: 'Screws',
      categories: ['Cycle Parts','Custom'],
      image: p8,
      description: 'Fully threaded with sharp points and wide, rounded heads featuring a single slot drive or double slot.',
      sizes: ['Custom Sizes Available'],
      features: ['Made to Order', 'Various Materials', 'Special Coatings']
    },
    {
      id: 9,
      name: '2 Soot Screw',
      categories: ['machinery','Cycle Parts'],
      image: p9,
      description: 'Slotted round head machine screw : Fully threaded with a rounded top and a single slot drive. Available in many sizes',
      sizes: ['Custom Sizes Available'],
      features: ['Made to Order', 'Various Materials', 'Special Coatings']
    }
  ];

 const filteredProducts = useMemo(() => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase().trim();
    return products.filter(product => {
      const matchesCategory = selectedCategory === 'All' || (product.categories && product.categories.includes(selectedCategory));
      const matchesSearch = product.name.toLowerCase().includes(lowerCaseSearchTerm) ||
        product.description.toLowerCase().includes(lowerCaseSearchTerm);
      return matchesCategory && matchesSearch;
    });
  }, [products, selectedCategory, searchTerm]);

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
              Our Products
            </h1>
            <p className="text-xl md:text-2xl text-metallic-silver max-w-4xl mx-auto">
              Comprehensive range of precision-engineered fasteners for every industry need.
              Quality, reliability, and performance in every bolt.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-12 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Filter className="w-4 h-4" />
                <span>Filter by:</span>
              </div>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ?
                    "bg-industrial-blue hover:bg-industrial-blue/90" :
                    "hover:bg-muted"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="group overflow-hidden shadow-metallic hover:shadow-glow transition-all duration-300 cursor-pointer h-full flex flex-col">
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-[280px] object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 flex flex-col gap-1">
                      {product.categories?.map((cat, i) => (
                        <span
                          key={i}
                          className="bg-industrial-blue text-white px-2 py-1 rounded-full text-xs font-medium"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>

                  <CardContent className="p-6 flex flex-col justify-between flex-1">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-3 industrial-heading group-hover:text-industrial-blue transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {product.description}
                      </p>

                      {/* Sizes */}
                      {/* <div className="mb-6">
                        <h4 className="text-sm font-semibold text-foreground mb-2">Available Sizes:</h4>
                        <div className="flex flex-wrap gap-1">
                          {product.sizes.map((size, idx) => (
                            <span 
                              key={idx}
                              className="bg-industrial-blue/10 text-industrial-blue px-2 py-1 rounded text-xs font-medium"
                            >
                              {size}
                            </span>
                          ))}
                        </div>
                      </div> */}
                    </div>

                    <Button
                      asChild
                      className="w-full bg-industrial-blue hover:bg-industrial-blue/90 text-white group-hover:shadow-glow transition-all duration-300"
                    >
                      <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                        Request Quote
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">No products found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search terms or category filters.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Custom Solutions CTA */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
          // initial={{ opacity: 0, y: 40 }}
          // whileInView={{ opacity: 1, y: 0 }}
          // viewport={{ once: true }}
          // transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 industrial-heading">
              Need Custom Solutions?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 px-2 md:max-w-3xl mx-auto text-justify md:text-center">
              Can't find exactly what you're looking for? Our engineering team specializes in
              creating custom fastener solutions tailored to your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Contact Button */}
              <Button
                asChild
                size="lg"
                className="bg-industrial-blue hover:bg-industrial-blue/90 text-white px-8 py-3 text-lg shadow-glow hover:shadow-lg transition-all duration-300"
              >
                <Link
                  to="/contact"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                  Contact Engineering Team
                </Link>
              </Button>

              {/* Download Catalog */}
              <a href={Brochure} download className="inline-block">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-metallic-silver text-foreground hover:bg-muted px-8 py-3 text-lg transition-all duration-300"
                >
                  Download Catalog
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call and WhatsApp Buttons */}
      <Call />
      <Whatsapp />
    </div>
  );
};

export default Products;
