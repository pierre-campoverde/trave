import React from 'react'

const ProgramFilter = () => {
    return (
        <div className="h-full py-10 w-full hidden md:block md:w-4/12">
            <div className="shadow-md mx-auto w-8/12 rounded-md border p-4">
                <form action="">
                <label htmlFor="program" className="text-sm text-gray-500">Programa:</label>
                    <select name="Program" id="ProgramType" placeholder="Program" className="border-2 my-2 focus:outline-none focus:ring-2 focus:ring-blue-500 p-2 w-full bg-gray-50 rounded-lg ">
                        <option value="Bachelor">Bachelor</option>
                        <option value="Bachelor">Master</option>
                        <option value="Bachelor">PHD</option>
                    </select>
                    <label htmlFor="program" className="text-sm text-gray-500">Pais:</label>
                    <select name="Program" id="Country" placeholder="Country" className="border-2 p-2 my-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full bg-gray-50 rounded-lg ">
                        <option value="Bachelor">Russia</option>
                        <option value="Bachelor">Ukraine</option>
                        <option value="Bachelor">Poland</option>
                    </select>
                    <label htmlFor="program" className="text-sm text-gray-500">Area:</label>
                    <select name="Program" id="Area" placeholder="Area" className="border-2 p-2 my-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full bg-gray-50 rounded-lg ">
                        <option value="Bachelor">Laws</option>
                        <option value="Bachelor">Health</option>
                        <option value="Bachelor">Information Technology</option>
                    </select>
                    <label htmlFor="program" className="text-sm text-gray-500">Especialidad:</label>
                    <select name="Program" id="Speciality" placeholder="Area" className="border-2 p-2 my-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full bg-gray-50 rounded-lg ">
                        <option value="Bachelor">Computer science  </option>
                        <option value="Bachelor">Applied Mathematics</option>
                        <option value="Bachelor">Electronics & nanoelectronics</option>
                    </select>
                    <input type="submit" value="Buscar" className="w-full mx-0 my-2 btn-secondary"/>
                </form>
            </div>
        </div>
    )
}

export default ProgramFilter
