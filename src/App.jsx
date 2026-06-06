/**
 * @description Ensambla el sitio completo de Focus Media en el flujo comercial solicitado.
 * @author Lincar Media Studio
 * @version 1.0.0
 */
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { ProblemSection } from './components/ProblemSection/ProblemSection';
import { PackagesSection } from './components/Packages/PackagesSection';
import { MarketingPackages } from './components/Marketing/MarketingPackages';
import { PlatformGrid } from './components/Platforms/PlatformGrid';
import { CombosSection } from './components/Combos/CombosSection';
import { PricingTable } from './components/PricingTable/PricingTable';
import { ConditionsAccordion } from './components/Conditions/ConditionsAccordion';
import { Footer } from './components/Footer/Footer';

/**
 * @returns {JSX.Element} Aplicación principal.
 */
const App = () => (
  <>
    <a className="skipLink" href="#hero">
      Saltar al contenido
    </a>
    <Navbar />
    <main>
      <Hero />
      <ProblemSection />
      <PackagesSection />
      <MarketingPackages />
      <PlatformGrid />
      <CombosSection />
      <PricingTable />
      <ConditionsAccordion />
    </main>
    <Footer />
  </>
);

export default App;
