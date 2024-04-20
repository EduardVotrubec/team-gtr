"use client";

import React from 'react'
import SectionHeading from './section-heading';
import { projectsData } from '@/lib/data';
import Project from './project';
import { useSectionInView } from '@/lib/hooks';
import Link from 'next/link';

export default function Projects() {
  const { ref } = useSectionInView("Roboter", 0.5);

  return (
    <section ref={ref} id='roboter' className='scroll-mt-28 mb-28'>
          <SectionHeading>Über den Roboter</SectionHeading>
           <div>
            {
              projectsData.map((project, index) => (
                <React.Fragment key={index}>
                  <Project {...project} />
                </React.Fragment>
              ))
            }
           </div>
           <div className='flex justify-center items-center py-5'>
          <Link href="/view">
            <button className="relative overflow-hidden border border-transparent rounded-md shadow-md text-white bg-gradient-to-r from-purple-500 to-indigo-600 px-6 py-3 text-lg font-semibold hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-500 transition duration-500 ease-in-out transform hover:scale-105">Roboter in 3d ansehen</button>
          </Link>
           </div>
    </section>
  );
}

