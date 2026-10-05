/**
 * Single source of truth for practice details that appear across the site.
 * Items marked CONFIRM were pulled from public directories / the rack card and
 * should be verified with Dr. Tourk before launch.
 */
export const site = {
  name: 'Geriatric Professional Services',
  legalName: 'Geriatric Professional Services, S.C.',
  shortName: 'GPS',
  tagline: 'University Trained. Nationally Certified. Community Focused.',
  domain: 'gps.doctor',
  url: 'https://gps.doctor',

  phone: '800-353-4980',
  phoneHref: 'tel:+18003534980',
  email: 'Tourk@gps.doctor', // CONFIRM: public-facing inbox for the practice
  address: {
    street: '109 N 129th Infantry Dr', // CONFIRM
    city: 'Joliet',
    state: 'IL',
    zip: '60435',
  },
  serviceArea: 'Joliet, Will County and the southwest Chicago suburbs',
  hours: 'Monday to Friday, 9:00 AM to 5:00 PM', // CONFIRM

  abim: {
    badgeUrl: 'https://badges.abim.org/b28472b8-5773-42ee-b207-bc4fd039bb27#acc.M9uoSmW3',
    issued: 'July 14, 2026',
  },

  fullscript: {
    url: 'https://us.fullscript.com/welcome/ktourk?utm_medium=webreferral&utm_source=other&utm_campaign=abmwebbuttons_dark_500x500.svg&signup_source=website_buttons',
    buttonImg: 'https://assets.fullscript.com/buttons/dark_500x500.svg',
  },

  // Wired via environment so Stripe can be switched on without a code change.
  stripePaymentUrl: import.meta.env.VITE_STRIPE_PAYMENT_URL as string | undefined,
  billingSupportUrl: (import.meta.env.VITE_BILLING_SUPPORT_URL as string | undefined) || '/contact#billing',

  effectiveDate: 'October 5, 2026',
} as const

export const providers = [
  {
    slug: 'karim-tourk',
    name: 'Karim Tourk, MD',
    shortName: 'Dr. Tourk',
    role: 'Physician, Internal Medicine & Geriatrics',
    pronunciation: 'Tourk rhymes with "work"',
    credentials: [
      'Board Certified, American Board of Internal Medicine',
      'Member, American Geriatrics Society',
      'University of Chicago alumnus',
      'Internal Medicine, University of Illinois at Chicago',
      'Clinical Instructor, US Department of Veterans Affairs',
    ],
    bio: [
      'For over twenty years, Dr. Tourk has been actively involved in the management and treatment of complex geriatric patients across Joliet and the surrounding communities.',
      'Combining a unique blend of academic integrity, thoughtful oversight, and attention to detail, Dr. Tourk strives for the best possible outcomes while maintaining a humanistic touch.',
    ],
    photo: '/team/karim-tourk.jpg', // drop headshot here
  },
  {
    slug: 'amanda-jenkins',
    name: 'Amanda Jenkins, APN',
    shortName: 'Amanda',
    role: 'Board Certified Nurse Practitioner',
    credentials: [
      'Board Certified Nurse Practitioner',
      'Over 15 years in long-term care',
      'Assisted Living specialist',
      'Lifelong Joliet-area resident',
    ],
    bio: [
      'A lifelong area resident, Nurse Practitioner Amanda Jenkins has over 15 years of experience in long-term care and is an Assisted Living specialist.',
      'Working in coordination with your nurses and other healthcare providers, Amanda brings compassionate concierge healthcare directly to you.',
    ],
    photo: '/team/amanda-jenkins.jpg', // drop headshot here
  },
] as const

export const nav = [
  { to: '/about', label: 'Our Team' },
  { to: '/services', label: 'Services' },
  { to: '/chronic-care-management', label: 'Chronic Care Management' },
  { to: '/patients', label: 'For Patients' },
  { to: '/contact', label: 'Contact' },
] as const
