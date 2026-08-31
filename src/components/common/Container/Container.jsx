/**
 * Container.jsx
 *
 * Centres content horizontally and constrains it to --max-width.
 * Every page section should wrap its inner content in a Container
 * so the layout is consistent across the site.
 */

import styles from './Container.module.css'
import { cn } from '../../../utils/helpers'

const Container = ({ children, className, ...rest }) => (
  <div className={cn(styles.container, className)} {...rest}>
    {children}
  </div>
)

export default Container
