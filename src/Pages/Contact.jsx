import React from 'react'
import Header from '../Components/Header'
import ContactForm from '../Components/contactComp/contactform'
import ContactBanner from '../Components/contactComp/contactBanner'
import Footer from '../Components/Footer'

const Contact = () => {
  return (
    <div className='h-screen w-screen overflow-x-hidden'>
        <Header/>
        <div className='flex flex-col justify-center items-center mt-10'>
            <div className='conatctheading text-3xl text-primary  mb-2'>CONTACT US</div>
            
            <div className='w-28 h-[1px] bg-primary m-4'></div>
            <p className='m-4 text-center'>Please fill the form below and we will get back to you as soon as possible.</p>
            <div className='contact-form  md:w-[720px]  sm:w-[375px]'>
                <ContactForm/>

            </div>
        </div>
        <ContactBanner/>
        <Footer/>

    </div>
  )
}

export default Contact