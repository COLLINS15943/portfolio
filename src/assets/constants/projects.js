/**
 * projects.js
 * All project data in one place.
 * Update this file to add, remove, or reorder portfolio projects.
 */

/** @type {Project[]} */
export const PROJECTS = [
  {
    id:          'car-rental',
    name:        'DriveEase — Car Rental & Booking',
    description:
      'A responsive car rental web app with real-time vehicle filtering, pricing estimation, dynamic availability lookup, and a multi-step booking checkout flow.',
    image:       '/images/me/PORT1.png',
    alt:         'DriveEase car rental platform interface',
    tags:        ['React', 'SCSS', 'JavaScript'],
    repoUrl:     'https://github.com/cadsix/car-rental-website',
    liveUrl:     'https://collins-car-rentals.netlify.app/',
    featured:    true,
  },
  {
    id:          'triathlon',
    name:        'Perform — Triathlon Coaching',
    description:
      'A modern triathlon coaching website built for endurance athletes, featuring structured training packages, interactive pricing tiers, and clean responsive layouts.',
    image:       '/images/me/PORT4.png',
    alt:         'Perform triathlon coaching website interface',
    tags:        ['Next.js', 'CSS Modules', 'Responsive UI'],
    repoUrl:     'https://github.com/cadsix/triathlon',
    liveUrl:     'https://triathlon-zeta.vercel.app/',
    featured:    true,
  },
  {
    id:          'ecommerce',
    name:        'Aura — Minimalist Storefront',
    description:
      'A lightweight e-commerce storefront with real-time product filtering, a slide-out cart drawer, persistent state management, and an efficient checkout flow.',
    image:       '/images/me/PORT2.png',
    alt:         'Aura modern e-commerce storefront interface',
    tags:        ['React', 'State Management', 'CSS'],
    repoUrl:     'https://github.com/cadsix/basic-eCommerce/',
    liveUrl:     'https://collinsecommerce.netlify.app/',
    featured:    false,
  },
  {
    id:          'food-ecommerce',
    name:        'Tomato — Food Ordering App',
    description:
      'A food ordering web application with categorized menu browsing, real-time cart state calculation, dish customization, and a mobile-first checkout experience.',
    image:       '/images/me/PORT3.png',
    alt:         'Tomato food ordering web app interface',
    tags:        ['React', 'JavaScript', 'CSS'],
    repoUrl:     'https://github.com/cadsix/food-ecommerce',
    liveUrl:     'https://food-ecommerce-ia3d.vercel.app/',
    featured:    false,
  },
]

/** All unique tags across every project — used by ProjectFilters */
export const ALL_TAGS = ['All', ...new Set(PROJECTS.flatMap((p) => p.tags))]
