/**
 * projects.js
 * All project data in one place.
 * Update this file to add, remove, or reorder portfolio projects.
 */

/** @type {Project[]} */
export const PROJECTS = [
  {
    id:          'car-rental',
    name:        'Car Rental',
    description:
      'An online platform that allows users to search, compare, and reserve cars for personal or business use. Features a clean UI and responsive design.',
    image:       '/images/PORT1.png',
    alt:         'Car Rental project screenshot',
    tags:        ['React', 'SCSS'],
    repoUrl:     'https://github.com/cadsix/car-rental-website',
    liveUrl:     'https://collins-car-rentals.netlify.app/',
    featured:    true,
  },
  {
    id:          'triathlon',
    name:        'Triathlon',
    description:
      'A coaching website for athletes of all levels. Features tiered coaching packages, personalised training plans, client testimonials, and a conversion-focused layout.',
    image:       '/images/PORT4.png',
    alt:         'Triathlon coaching website screenshot',
    tags:        ['Next.js', 'CSS', 'JavaScript'],
    repoUrl:     'https://github.com/cadsix/triathlon',
    liveUrl:     'https://triathlon-zeta.vercel.app/',
    featured:    true,
  },
  {
    id:          'ecommerce',
    name:        'E-Commerce Store',
    description:
      'A modern e-commerce platform with a product catalogue, shopping cart, and checkout flow. Optimised for performance and responsive across all devices.',
    image:       '/images/PORT2.png',
    alt:         'E-Commerce store screenshot',
    tags:        ['React', 'CSS', 'JavaScript'],
    repoUrl:     'https://github.com/cadsix/basic-eCommerce/',
    liveUrl:     'https://collinsecommerce.netlify.app/',
    featured:    false,
  },
  {
    id:          'food-ecommerce',
    name:        'Food E-Commerce',
    description:
      'A food ordering platform where users browse menus, add items to a cart, and place orders. Designed with a clean UI and smooth cross-device experience.',
    image:       '/images/PORT3.png',
    alt:         'Food E-Commerce project screenshot',
    tags:        ['React', 'CSS', 'JavaScript'],
    repoUrl:     'https://github.com/cadsix/food-ecommerce',
    liveUrl:     'https://food-ecommerce-ia3d.vercel.app/',
    featured:    false,
  },
]

/** All unique tags across every project — used by ProjectFilters */
export const ALL_TAGS = ['All', ...new Set(PROJECTS.flatMap((p) => p.tags))]
