/**
 * App.jsx — Root application component
 *
 * Wraps the entire app in <ThemeProvider> so every component can access
 * theme state via useThemeContext() without prop drilling.
 *
 * Layout (Header + Footer) is applied by the Layout component.
 * Page sections are composed here in document order.
 */

import { ThemeProvider }  from './contexts/ThemeContext'
import Layout             from './components/layout/Layout'
import Hero               from './components/sections/Hero'
import About              from './components/sections/About'
import Projects           from './components/sections/Projects'
import Contact            from './components/sections/Contact'

const App = () => (
  <ThemeProvider>
    <Layout>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </Layout>
  </ThemeProvider>
)

export default App
