/**
 * Layout.jsx
 *
 * Wraps every page with the fixed Header and Footer.
 * All page sections are rendered as children between them.
 */

import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
)

export default Layout
