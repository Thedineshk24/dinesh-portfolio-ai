"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    degree: "Master of Computer Applications",
    institution: "Ganpat University",
    year: "2018 - 2020",
    description: "Advanced studies in Computer Applications and Software Development"
  },
  {
    degree: "Bachelor's Degree",
    institution: "Hemchandracharya North Gujarat University",
    year: "2015 - 2018",
    description: "Foundation in Computer Science and Programming"
  }
];

export function EducationSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-primary mb-4">Education</h2>
          <p className="text-muted-foreground">Academic Background and Qualifications</p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 relative">
                <div className="absolute -left-3 top-6 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                  <GraduationCap className="w-4 h-4 text-accent-foreground" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-primary">{edu.degree}</h3>
                  <p className="text-secondary font-semibold">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground mb-2">{edu.year}</p>
                  <p className="text-foreground">{edu.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}