import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter, FaFacebook, FaVk } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" px-4 py-8 bg-gray-900 relative bottom-0 text-gray-300 divide-y-2 divide-gray-700 min-w-full">
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-9 ">
          <div className="grid grid-cols-12 mb-5">
            <div className="col-span-6 md:col-span-3 my-2">
              <ul className="flex-1">
                <li>
                  <h3 className="font-semibold text-gray-400 text-sm">ACERCA DE</h3>
                </li>
                 <li className="mt-2">
                  <Link to="/bachelor" className="md:text-md hover:underline">
                    Como funciona trave
                  </Link>
                </li>
                <li className="mt-2">
                  <Link to="/bachelor" className="md:text-md hover:underline">
                    Sala de prensa
                  </Link>
                </li>
                <li className="mt-2">
                  <Link to="/bachelor" className="md:text-md hover:underline">
                    Inversionistas
                  </Link>
                </li>
                <li className="mt-2">
                  <Link to="/bachelor" className="md:text-md hover:underline">
                    Trave Communities
                  </Link>
                </li>
                <li className="mt-2">
                  <Link to="/bachelor" className="md:text-md hover:underline">
                    Contacto
                  </Link>
                </li> 
              </ul>
            </div>
            <div className="col-span-6 md:col-span-3 my-2">
              <ul className="flex-1">
                <li>
                  <h3 className="font-semibold text-gray-400 text-sm">PARA ESTUDIANTES</h3>
                </li>
                <li className="mt-2">
                  <Link to="/" className="md:text-md">
                    Countries
                  </Link>
                </li>
                <li className="mt-2">
                  <Link to="/" className="md:text-md">
                    Program finder
                  </Link>
                </li>
                <li className="mt-2">
                  <Link to="/" className="md:text-md">
                    Apptitudinal test
                  </Link>
                </li>
                <li className="mt-2">
                  <Link to="/" className="md:text-md">
                    Ukraine
                  </Link>
                </li> 
              </ul>
            </div>
            <div className="col-span-6 md:col-span-3 my-2">
              <ul className="flex-1">
                <li>
                  <h3 className="font-semibold text-gray-400 text-sm">PARA INSTITUCIONES</h3>
                </li>
                <li className="mt-2">
                  <Link to='/' className="md:text-md">Registrar institucion</Link>
                </li>
                <li className="mt-2">
                  <Link to='/' className="md:text-md">Terminos de uso</Link>
                </li>
                <li className="mt-2">
                  <Link to='/' className="md:text-md">Politica de privacidad</Link>
                </li>
              </ul>
            </div>
            <div className="col-span-6 md:col-span-3 my-2">
              <ul className="flex-1">
                <li>
                  <h3 className="font-semibold text-gray-400 text-sm">COMUNIDAD</h3>
                </li>
                <li className="mt-2">
                  <Link to="/" className="md:text-md">
                    Claim
                  </Link>
                </li>
                <li className="mt-2">
                  <Link to="/" className="md:text-md">
                    Privacy
                  </Link>
                </li>
                <li className="mt-2">
                  <Link to="/" className="md:text-md">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-3 my-2">
          <h3 className="font-semibold text-gray-400">LANGUAGE & CURRENCY</h3>
          <select
            name=""
            id=""
            placeholder="Currency"
            className="w-full sm:w-8/12 mt-4 ml-auto inline-block bg-gray-700 p-2 rounded "
          >
            <option value="Dollars">USD</option>
            <option value="Dollars">RUB</option>
            <option value="Dollars">MEX</option>
          </select>
          <select
            name=""
            id=""
            placeholder="Currency"
            className="w-full sm:w-8/12 mt-4  block bg-gray-700 p-2 rounded "
          >
            <option value="Dollars">Spanish</option>
            <option value="Dollars">Russian</option>
            <option value="Dollars">Portuguese</option>
          </select>
        </div>
      </div>
      <div className="md:flex justify-between py-4">
        <div className="my-4">
          <h4 className="font-semibold text-gray-400">
            SUSCRIBE TO OUR NEWSLETTER
          </h4>
          <p>
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
        </div>
        <div className="sm:flex">
          <input
            type="text"
            placeholder="Enter your email"
            className="appearance-none w-full sm:w-auto p-2 text-black px-3 focus:ring-4  focus:ring-gray-600 focus:outline-none   rounded  my-auto"
          />
          <input
            type="submit"
            value="Suscribe"
            className="w-full cursor-pointer mx-auto my-3 sm:w-30 bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:ring-gray-600 focus:outline-none transition-colors sm:my-auto  hover:shadow-md text-white font-normal py-2 px-4 rounded-md sm:mx-2"
          />
        </div>
      </div>
      <div className="  text-center flex flex-col-reverse sm:flex sm:flex-row  sm:justify-between py-4 ">
        <h4 className="mx-0 text-gray-400 my-2">
          ©2020 Trave,LLC. All rights reserved{" "}
        </h4>

        <ul className="flex mx-auto sm:mx-0 sm:ml-auto">
          <li className="text-2xl inline-block mx-4  align-middle p-0">
            <a href="www.intragram.com " className="inline-block align-bottom">
              <span>
                <FaInstagram className="align-middle  " />
              </span>
            </a>
          </li>
          <li className="text-2xl mx-4">
            <a href="www.intragram.com" className="inline-block align-bottom">
              <span>
                <FaTwitter />
              </span>
            </a>
          </li>
          <li className="text-2xl mx-4">
            <a href="www.intragram.com" className="inline-block align-bottom">
              <span>
                <FaFacebook />
              </span>
            </a>
          </li>
          <li className="text-2xl mx-4">
            <a href="www.intragram.com" className="inline-block align-bottom">
              <span>
                <FaVk />
              </span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
