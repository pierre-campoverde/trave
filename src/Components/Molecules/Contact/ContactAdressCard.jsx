import React from 'react'

const ContactAddressCard = (props) => {
    return (
        <div className="my-4">
        <h4 className="font-medium text-xl">{props.city}</h4>
        <address className="not-italic my-2 md:text-md text-base text-gray-500 sm:mt-5 sm:text-md md:mt-2 md:text-lg">
          <p
          >
            {props.street}
          </p>
          <p className="mt-1">{props.code}</p>
        </address>
      </div>
    )
}

export default ContactAddressCard
