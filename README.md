# Eighty Eight Hotel — Landing Page

A clean, responsive landing page for Eighty Eight Hotel built with Next.js, React and Tailwind CSS.

## Overview

This repository contains a polished marketing site for Eighty Eight Hotel. The UI focuses on a high-conversion landing experience with sections for hero, features/amenities, room listings, gallery lightbox, booking links modal, and location map.

The main component used for the page is provided in the repository root as EightyEight.jsx and the project uses the Next.js app directory alongside Tailwind CSS for styling.

## Features

- Responsive hero with call-to-action buttons
- Booking modal with external booking provider links
- Rooms listing with price and amenities
- Gallery with lightbox
- Reviews carousel and social proof strip
- Embedded Google map, contact and policy info

## Tech Stack

- Next.js (App router)
- React
- Tailwind CSS
- lucide-react (icons)

## Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

## Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open http://localhost:3000 in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Project Structure (important files)

- EightyEight.jsx — main page component used for the landing experience
- app/ — Next.js app directory with routes and global styles
- public/images/ — image assets used by the page
- tailwind.config.js, postcss.config.js — styling setup

## Development Notes

- The booking modal is powered by static links in the component and opens external booking pages in new tabs.
- Gallery images live under `public/images/` and are referenced from the component using relative paths.
- The page uses client-side React features (state, effects) — EightyEight.jsx is declared with `'use client'` at the top.

If you want to extract the component into a Next.js page, move `EightyEight.jsx` into `app/page.jsx` (or import it from there) and ensure images exist under `public/images/`.

## Contributing

Contributions are welcome. Please open issues or pull requests for bug fixes, accessibility improvements, or content updates.

## License

This project is provided as-is. Add a LICENSE file if you wish to apply a specific license (MIT, Apache-2.0, etc.).

## Contact

For questions about the site or content updates, contact the project owner or maintainers listed in the repository.
