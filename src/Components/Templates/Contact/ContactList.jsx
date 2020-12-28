import React from "react";
import ContactAddressCard from "../../Molecules/Contact/ContactAdressCard";
import ContactCard from "../../Molecules/Contact/ContactCard";
//Todo-Make it reusable
const ContactList = () => {
  return (
    <div className="p-4 px-8 divide-y-2 ">
      <div className=" my-4 md:flex justify-between w-full  ">
        <h3 className="text-2xl font-semibold sm:text-3xl ">Get in touch</h3>
        <div className="grid px-3 w-full md:w-9/12 md:mt-4 sm:grid-cols-2" >
          <ContactCard
            phone={"+1(555) 123-4567"}
            title={"Collaborate"}
            email={"example@gmail.com"}
          />
          <ContactCard
            phone={"+1(555) 123-4567"}
            title={"Collaborate"}
            email={"example@gmail.com"}
          />
          <ContactCard
            phone={"+1(555) 123-4567"}
            title={"Collaborate"}
            email={"example@gmail.com"}
          />
          <ContactCard
            phone={"+1(555) 123-4567"}
            title={"Collaborate"}
            email={"example@gmail.com"}
          />
        </div>
      </div>
      <div className=" my-6 md:flex justify-between w-full ">
        <h3 className="text-2xl font-semibold sm:text-3xl md:mt-4 mt-4 ">Locations</h3>
        <div className="grid px-3 w-full md:mt-4 md:w-9/12 sm:grid-cols-2">
          <ContactAddressCard
            city={"Los Angeles"}
            street={"4556 Brendan Ferry"}
            code={"Los Angeles, CA 90210"}
          />
          <ContactAddressCard
            city={"Los Angeles"}
            street={"4556 Brendan Ferry"}
            code={"Los Angeles, CA 90210"}
          />
          <ContactAddressCard
            city={"Los Angeles"}
            street={"4556 Brendan Ferry"}
            code={"Los Angeles, CA 90210"}
          />
          <ContactAddressCard
            city={"Los Angeles"}
            street={"4556 Brendan Ferry"}
            code={"Los Angeles, CA 90210"}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactList;
