import { useMemo } from 'react'
import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material'
import { motion } from 'framer-motion'
import { buildMuiTheme } from './styles/muiTheme'
import { useThemeMode } from './contexts/ThemeContext'
import { Layout } from './layout/Layout'
import { Navbar } from './layout/Navbar'
import { Footer } from './layout/Footer'
import { HeroSection } from './sections/HeroSection'
import { TrustedBySection } from './sections/TrustedBySection'
import { FeaturesSection } from './sections/FeaturesSection'
import { ProductDemoSection } from './sections/ProductDemoSection'
import { UseCasesSection } from './sections/UseCasesSection'
import { IntegrationsSection } from './sections/IntegrationsSection'
import { MetricsSection } from './sections/MetricsSection'
import { HowItWorksSection } from './sections/HowItWorksSection'
import { PricingSection } from './sections/PricingSection'
import { TestimonialsSection } from './sections/TestimonialsSection'
import { FaqSection } from './sections/FaqSection'
import { CtaSection } from './sections/CtaSection'

function App() {
  const { mode } = useThemeMode()
  const theme = useMemo(() => buildMuiTheme(mode), [mode])

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Navbar />
        <motion.main
          className="pt-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <HeroSection />
          <TrustedBySection />
          <FeaturesSection />
          <ProductDemoSection />
          <UseCasesSection />
          <IntegrationsSection />
          <MetricsSection />
          <HowItWorksSection />
          <PricingSection />
          <TestimonialsSection />
          <FaqSection />
          <CtaSection />
        </motion.main>
        <Footer />
      </Layout>
    </MuiThemeProvider>
  )
}

export default App
