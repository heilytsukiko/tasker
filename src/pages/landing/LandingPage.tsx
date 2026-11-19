import { CatalogPreview } from './ui/CatalogPreview/CatalogPreview';
import { CompanyCta } from './ui/CompanyCta/CompanyCta';
import { Hero } from './ui/Hero/Hero';
import { HowItWorks } from './ui/HowItWorks/HowItWorks';
import { Trust } from './ui/Trust/Trust';

export function LandingPage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <CatalogPreview />
      <Trust />
      <CompanyCta />
    </>
  );
}
