import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { queryClient } from "./lib/queryClient";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";
import { SplashScreen } from "./components/splash-screen";
import Home from "./pages/home";
import Catalog from "./pages/catalog";
import About from "./pages/about";
import Contact from "./pages/contact";
import NotFound from "./pages/not-found";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/catalog" component={Catalog} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <AnimatePresence mode="wait">
        {showSplash && (
          <SplashScreen onComplete={() => {}} />
        )}
      </AnimatePresence>
      <div style={{ 
        opacity: showSplash ? 0 : 1,
        transition: 'opacity 0.5s ease-in-out',
        transitionDelay: '0.3s'
      }}>
        <Router />
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}

export default App;
