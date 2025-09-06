import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Index from "./pages/Index";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Industries from "./pages/Industries";
import WhyChooseUs from "./pages/WhyChooseUs";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import Whatsapp from '@/components/Whatsapp';

const queryClient = new QueryClient();

const pageVariants = {
  initial: { opacity: 0, y: 10, scale: 0.995 },
  enter: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -8,
    scale: 0.995,
    transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
  },
};

// ✅ Wrap routes inside a component that has access to `useLocation`
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div initial="initial" animate="enter" exit="exit">
              <Index />
            </motion.div>
          }
        />
        <Route
          path="/about"
          element={
            <motion.div initial="initial" animate="enter" exit="exit" >
              <About />
            </motion.div>
          }
        />
        <Route
          path="/products"
          element={
            <motion.div initial="initial" animate="enter" exit="exit" >
              <Products />
            </motion.div>
          }
        />
        <Route
          path="/contact"
          element={
            <motion.div initial="initial" animate="enter" exit="exit" >
              <Contact />
            </motion.div>
          }
        />
        <Route
          path="/industries"
          element={
            <motion.div initial="initial" animate="enter" exit="exit" >
              <Industries />
            </motion.div>
          }
        />
        <Route
          path="/why-choose-us"
          element={
            <motion.div initial="initial" animate="enter" exit="exit" >
              <WhyChooseUs />
            </motion.div>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <AnimatedRoutes />
            {/* <Whatsapp /> */}
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
