import React from 'react'

export default function Footer() {
  return (
    <footer className='mb-10 px-4 text-center text-gray-500 dark:text-gray-300'>
     <small className='mb-2 block text-xs'>
          &copy; {new Date().getFullYear()} {' '} Eduard Votrubec. All rights reserved.
     </small>
     <p className='text-xs'>
          <span className='font-semibold'>About this website: </span> Built with React & Next.js (App Router & Server Actions), Three.js, Typescript, Tailwind CSS, Framer Motion, React Email & Resend, Vercel hosting.
     </p>
    </footer>
  )
}
