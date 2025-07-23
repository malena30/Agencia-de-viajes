"use client";

import { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Featured from '../components/Featured';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Featured />
      <Services />
      <Testimonials />
      <CallToAction />
      <Footer />
    </main>
  )
}
