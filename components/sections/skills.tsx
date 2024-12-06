"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const skillCategories = [
  {
    title: 'Frontend Development',
    skills: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Material-UI']
  },
  {
    title: 'State Management & APIs',
    skills: ['Redux', 'Zustand', 'RTK Query', 'REST APIs', 'GraphQL', 'Web3.js', 'vercel ai']
  },
  {
    title: 'Testing & Tools',
    skills: ['Cypress', 'Git', 'pnpm', 'Webpack', 'Vite', 'bun']
  },
  {
    title: 'DevOps & Cloud',
    skills: ['CI/CD', 'Docker', 'Vercel', 'Netlify']
  },
  {
    title: 'Best Practices',
    skills: ['Responsive Design', 'Performance Optimization', 'PWA', 'Semantic HTML', 'Clean Code']
  }
];

export function SkillsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-primary mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground">Technologies and methodologies I work with</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-accent/20 text-accent-foreground hover:bg-accent/30 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}