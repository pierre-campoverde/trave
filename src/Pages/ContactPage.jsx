import React from 'react'
import ContactForm from '../Components/Organisms/Contact/ContactForm'
import ContactList from "../Components/Templates/Contact/ContactList";

const ContactPage = () => {
    return (
        <main className="py-16">
      <h2 className="text-4xl font-semibold text-center">Contact Sales</h2>
      <p className="md:text-xl  my-3 text-base text-gray-500 sm:mt-5 sm:text-lg text-center md:mt-2 md:text-xl">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
        Repudiandae, necessitatibus.
      </p>
      <ContactForm />
      <ContactList/>
    </main>)
}

export default ContactPage
