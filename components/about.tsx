"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from "framer-motion";
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView("Über uns");
  
  
  return (
    <motion.section 
    ref={ref}
    className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
    initial={{ opacity: 0, y: 100}}
    animate={{ opacity: 1, y: 0}}
    transition={{ delay: 0.175 }}
    id='about'
    >
     <SectionHeading>Über uns</SectionHeading>
     <p className='mb-3'>
          <span className='font-semibold'>Willkommen </span>auf unserer Website. Wir sind das 
          <span className='font-semibold'> Team GTR. </span>
          Wir haben einen Robocup Roboter gebaut, der Fußball spielen kann.
     </p>
     <p>
          Diese Website dient als Übersicht für den Prozess des Bauens unseres Roboters.
     </p>
     <p>
        Alle Details zum Bau unseren Roboters finden Sie in der PDF-Datei, welche Sie sich hier herunterladen können.
     </p>
     <p>
        Zudem finden Sie den Code sowohl für unseren Roboter, als auch für diese Website auf Github.
     </p>
    </motion.section>
  )
}
