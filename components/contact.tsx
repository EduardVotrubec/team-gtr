"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';

export default function Contact() {
     const { ref } = useSectionInView("Kontakt");

     return (
    <section id='kontakt' ref={ref} className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'>
          <SectionHeading>Kontaktieren Sie uns</SectionHeading>
          <p className='text-gray-700 -mt-6 dark:text-gray-400'>Kontaktieren Sie uns direkt durch dieses Formular.</p>
          <form className='mt-10 flex flex-col' 
          action={async (formData) => {
               const { data, error } = await sendEmail(formData);

               if (error) {
                    toast.error(error);
                    return;
               }

               toast.success("Email gesendet");
          }}>
               <input className='h-14 px-4 rounded-lg borderBlack dark:bg-gray-700' name='senderEmail' type="email" required maxLength={500} placeholder='Ihre Email'/>
               <textarea className='h-52 my-3 rounded-lg borderBlack p-4 dark:bg-gray-700' name='message' required maxLength={5000} placeholder='Ihre Nachricht'/>
               <SubmitBtn />
          </form>
    </section>
  )
}
