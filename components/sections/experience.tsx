"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const experiences = [
  {
    title: 'Frontend Developer',
    company: 'Docthub',
    period: 'Sep 2022 - Present',
    description: 'Led development of key features including subscription modal and PWA implementation. Improved performance through API caching and build optimization.',
    achievements: [
      'Developed subscription modal feature',
      'Implemented PWA, reducing page load times by 2X',
      'Reduced build size using pnpm and gzip compression',
      'Optimized user experience through API caching'
    ],
    technologies: ['React.js', 'Next.js', 'PWA', 'Redux']
  },
  {
    title: 'Frontend Developer',
    company: 'Freelance',
    period: 'Feb 2022 - Aug 2022',
    description: 'Worked on various projects including AI chatbot and Config Driven UI implementations.',
    achievements: [
      'Built AI chatbot using WebSocket and Next.js',
      'Developed Config Driven UI',
      'Implemented NextAuth authentication'
    ],
    technologies: ['Next.js', 'WebSocket', 'NextAuth', 'React.js']
  },
  {
    title: 'Junior Frontend Developer',
    company: 'Docthub',
    period: 'Feb 2022 - Aug 2022',
    description: 'Developed features for in-house dashboard and various platform modules.',
    achievements: [
      'Worked on dashboard using React.js class components',
      'Implemented API integration with Redux-Saga',
      'Developed features for Jobs, Courses, and Events'
    ],
    technologies: ['React.js', 'Redux-Saga', 'JavaScript', 'REST APIs']
  }
];

export function ExperienceSection() {
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
          <h2 className="text-3xl font-bold text-primary mb-4">Professional Experience</h2>
          <p className="text-muted-foreground">My journey in web development</p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-accent" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-12 lg:mb-24"
            >
              <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center`}>
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="w-4 h-4 rounded-full bg-accent-2 border-4 border-background"
                  />
                </div>

                <div className={`w-full lg:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'lg:mr-auto' : 'lg:ml-auto'}`}>
                  <Card className="p-6 lg:p-8 hover:shadow-lg transition-shadow">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-primary">{exp.title}</h3>
                        <h4 className="text-secondary font-semibold">{exp.company}</h4>
                        <p className="text-sm text-muted-foreground">{exp.period}</p>
                      </div>
                      <p className="text-foreground">{exp.description}</p>
                      <ul className="list-disc list-inside space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-muted-foreground">{achievement}</li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge 
                            key={tech} 
                            variant="secondary" 
                            className="bg-accent/20 text-accent-foreground hover:bg-accent/30 transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}