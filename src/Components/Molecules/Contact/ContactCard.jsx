import React from 'react'

const ContactCard = (props) => {
    return (
        <div className="my-4 md:my-0 md:mb-6">
            <h4 className="font-medium text-xl">{props.title}</h4>
            <address className="not-italic my-2 md:text-md text-base text-gray-500 sm:mt-5 sm:text-md md:mt-2 md:text-lg">
              <a
                href={`mailto:${props.email}`}
                className="appearance-none not-italic hover:text-gray-900 cursor-pointer"
              >
                {props.email}
              </a>
              <p className="mt-1">{props.phone}</p>
            </address>
          </div>
    )
}

export default ContactCard
