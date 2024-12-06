'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/thedineshk24', label: 'GitHub' },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/dinesh-katariya',
      label: 'LinkedIn',
    },
    {
      icon: Twitter,
      href: 'https://twitter.com/thedineshk24',
      label: 'Twitter',
    },
    { icon: Mail, href: 'mailto:thedineshk24@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-muted/50 py-8">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="flex space-x-6 mb-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={social.label}
              >
                <social.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Dinesh Katariya. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
