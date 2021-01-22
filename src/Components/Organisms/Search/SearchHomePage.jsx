import React, { useState } from "react";
import InputLink from "../../Molecules/Search/InputLink";
import { HiOutlineSearch } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addQuery } from "../../../Store/Slices/ProgramsSlice";
const SearchHomePage = () => {
  const [query, setQuery] = useState({
    country: "",
    program: "",
    area: "",
    especiality: "",
  });
  const history = useHistory();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addQuery(query))    
    history.push(
      `/programs?country=${query.country}&program=${query.program}&area=${query.area}&especiality=${query.especiality}`
    );



  };
  return (
    <div>
      <div className="hidden md:block w-6/12 min-w-min mx-auto my-4">
        <form
          action="/programs"
          method="get"
          role="search"
          onSubmit={handleSubmit}
        >
          <div className="h-20 w-full rounded-3xl px-none shadow-md bg-white flex justify-around  divide-x-2">
            <div>
              <InputLink
                label={"Destino"}
                name={"country"}
                placeholder={"Agregar destino?"}
                handleChange={handleChange}
              />
            </div>
            <div>
              <InputLink
                label={"Programas"}
                name={"program"}
                placeholder={"Que quieres estudiar?"}
                handleChange={handleChange}
              />
            </div>
            <div>
              <InputLink
                label={"Area"}
                name={"area"}
                placeholder={"Escoger area"}
                handleChange={handleChange}
              />
            </div>
            <div>
              <InputLink
                label={"Especialidad"}
                name={"especiality"}
                placeholder={"Que quieres estudiar?"}
                handleChange={handleChange}
              />
            </div>
          </div>
          <div className="w-full flex justify-end">
            <button
              type="submit"
              className="h-14 text-white my-3 focus:outline-none transform bg-gradient-to-tr from-blue-400 to-indigo-600  rounded-full w-36 hover:shadow-xl transform-gpu hover:-translate-y-1	 transition-all	duration-500 ease-in-out"
            >
              <div className="flex justify-center">
                <HiOutlineSearch className="my-auto text-2xl" />
                <span className="my-auto text-lg">Buscar</span>
              </div>
            </button>
          </div>
        </form>
      </div>
      <div className="h-20 w-10/12 mx-auto border-2 md:hidden shadow-md flex  my-4 rounded-3xl py-1 bg-white">
        <input
          type="text"
          className="rounded-2xl w-10/12  focus:outline-none px-3"
          placeholder="Que quieres estudiar?"
        />
        <button className="h-auto w-20 border-2 rounded-full  text-center  bg-gradient-to-tr from-blue-400 to-indigo-600 text-white">
          <HiOutlineSearch className="mx-auto text-4xl" />
        </button>
      </div>
    </div>
  );
};

export default SearchHomePage;
