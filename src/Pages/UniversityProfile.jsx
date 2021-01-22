import React, { useState } from "react";
import { db } from "../Api/config/fbConfig";
const UniversityProfile = () => {
  const [program, setProgram] = useState({
    univeristyID: "bCF1ayCX5JI8X0VAobOs",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProgram((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(program);
    try {
       await db.collection("Programs").add(program);
      console.log('Programa creado existosamente');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="h-screen flex">
      <div className="border-2 m-auto p-4 h-auto md:w-10/12 lg:w-6/12 border-gray-200 rounded-xl shadow-lg">
        <h2 className="text-center h3">Create a program</h2>
        <form onSubmit={handleSubmit} className="flex justify-around">
          <div className="w-5/12">
            <select
              name="program"
              className="border-2 my-2 w-full bg-gray-100 rounded-lg p-3 text-gray-400"
              onChange={handleChange}
            >
              <option>Program</option>
              <option value="Bachelor">Bachelor</option>
              <option value="Master">Master</option>
              <option value="PHD">PHD</option>
            </select>
            <input
              type="text"
              name="name"
              className="border-2 my-2 w-full bg-gray-100 rounded-lg p-3"
              placeholder="Name"
              onChange={handleChange}
            />
            <input
              type="text"
              name="city"
              className="border-2 my-2 w-full bg-gray-100 rounded-lg p-3"
              placeholder="City"
              onChange={handleChange}
            />
            <input
              type="text"
              name="country"
              className="border-2 my-2 w-full bg-gray-100 rounded-lg p-3"
              placeholder="Country"
              onChange={handleChange}
            />
             <input
              type="text"
              name="university"
              className="border-2 my-2 w-full bg-gray-100 rounded-lg p-3"
              placeholder="University"
              onChange={handleChange}
            />
            <input
              type="text"
              name="language"
              className="border-2 my-2 w-full bg-gray-100 rounded-lg p-3"
              placeholder="Language"
              onChange={handleChange}
            />
          </div>
          <div className="w-5/12">
            <input
              type="number"
              name="duration"
              min="1"
              className="border-2 my-2 w-full bg-gray-100 rounded-lg p-3"
              placeholder="Duration"
              onChange={handleChange}
            />
            <input
              type="number"
              name="fee"
              min="0"
              className="border-2 my-2 w-full bg-gray-100 rounded-lg p-3"
              placeholder="Fee"
              onChange={handleChange}
            />
            <select
              name="format"
              className="border-2 my-2 w-full bg-gray-100 rounded-lg p-3 text-gray-400"
              onChange={handleChange}
            >
              <option>Format</option>
              <option value="Full time">Full -time</option>
              <option value="Part time">Part-time</option>
            </select>
            <select
              name="attendace"
              className="border-2 my-2 w-full bg-gray-100 rounded-lg p-3 text-gray-400"
              onChange={handleChange}
            >
              <option>Attendance</option>
              <option value="Presencial">Presencial</option>
              <option value="Semipresencial">Semipresencial</option>
              <option value="A distancia">A distancia</option>
            </select>
            <input
              type="submit"
              value="Crear"
              className="gradient p-3 w-full my-2 rounded-xl text-white cursor-pointer"
              onChange={handleChange}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UniversityProfile;
