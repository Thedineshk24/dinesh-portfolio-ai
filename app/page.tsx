import { HeroSection } from '@/components/sections/hero';
import { AboutSection } from '@/components/sections/about';
import { ExperienceSection } from '@/components/sections/experience';
import { SkillsSection } from '@/components/sections/skills';
import { EducationSection } from '@/components/sections/education';
import { Footer } from '@/components/sections/footer';
import { ThemeToggle } from '@/components/theme-toggle';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <Footer />
    </main>
  );
}