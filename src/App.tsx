/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Rooms from './components/Rooms';
import Equipment from './components/Equipment';
import Artists from './components/Artists';
import Membership from './components/Membership';
import Economics from './components/Economics';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ManifestoGenerator from './components/ManifestoGenerator';

export default function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="flex flex-col min-h-screen selection:bg-brand-primary selection:text-brand-bg relative bg-[var(--brand-bg)] overflow-x-hidden transition-colors duration-500">
      <div className="noise-overlay" />
      <Navbar isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />
      <main className="flex-grow flex flex-col gap-12 pb-32">
        <Hero />
        <About />
        <Rooms />
        <Equipment />
        <ManifestoGenerator />
        <Artists />
        <Membership />
        <Economics />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

