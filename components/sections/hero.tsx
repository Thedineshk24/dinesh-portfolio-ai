'use client';

import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, Mail } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-primary">
              Hi, I'm Dinesh Katariya
            </h1>
            <div className="text-xl lg:text-2xl text-secondary mb-6 h-[40px] font-semibold">
              <TypeAnimation
                sequence={[
                  'Frontend Developer',
                  2000,
                  'React.js enthusiastic',
                  2000,
                  'Next.js enthusiastic',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Seeking a challenging Frontend role to leverage expertise in React.js and Next.js, 
              with aims to improve web development performance and contribute to innovative projects 
              in Frontend, web3, and AI.
            </p>
            <div className="flex gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
                onClick={() => window.open('mailto:thedineshk24@gmail.com')}
              >
                <Mail className="mr-2 h-4 w-4" /> Contact Me
              </Button>
              <Button size="lg" variant="outline" className="border-accent">
                <Download className="mr-2 h-4 w-4" /> Download CV
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="flex-1 relative"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-72 h-72 lg:w-[500px] lg:h-[500px] mx-auto">
              <Image
                src="/profile.jpg"
                alt="Dinesh Katariya"
                fill
                className="object-cover rounded-full shadow-2xl"
                priority
                sizes="(max-width: 768px) 288px, 500px"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}