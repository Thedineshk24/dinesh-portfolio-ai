"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const skills = [
  'React.js', 'Next.js', 'TypeScript', 'JavaScript',
  'Tailwind CSS', 'Material-UI', 'Redux', 'Zustand',
  'Web3.js', 'GraphQL', 'REST APIs', 'HTML/CSS',
  'Git', 'CI/CD', 'AWS', 'Docker'
];

export function AboutSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
          <Card className="p-6 lg:p-8 mb-8">
            <p className="text-lg text-muted-foreground mb-6">
              Hi, I'm Dinesh Katariya, a frontend developer with 3 years of experience building modern websites 
              and web applications. I work with React.js, Next.js, JavaScript, TypeScript, HTML, and CSS to 
              create simple and user-friendly designs.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              I have worked with tools like Material-UI, Redux, and Zustand to make my projects fast and 
              efficient. I've also built web3 frontend and blockchain-based websites that handle complex tasks.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Currently, I'm exploring the exciting world of AI to understand how it can improve web development 
              and make smarter applications.
            </p>
            <p className="text-lg text-muted-foreground">
              I enjoy learning new skills and taking on challenges to create better websites and applications.
            </p>
          </Card>
          
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-center mb-6">Skills & Technologies</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Badge variant="secondary" className="text-sm py-1 px-3">
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}