import React from 'react'

const ProgramStructure = () => {
    return (
        //!TODO:Estilizar apropiadamente la altura
        <article >
            <h4 className="text-lg font-medium">Program Structure</h4>
            <div className="flex my-6">
                <div className="w-3/12 ">
                    <ul className="rounded-l-xl divide-y-2 bg-gray-100">
                        <li className="px-2 py-3">1 Semester</li>
                        <li className="px-2 py-3">1 Semester</li>
                        <li className="px-2 py-3">1 Semester</li>
                        <li className="px-2 py-3">1 Semester</li>
                        <li className="px-2 py-3">1 Semester</li>
                        <li className="px-2 py-3">1 Semester</li>
                    </ul>
                </div>
                <div className="w-9/12 h-80 overflow-y-auto rounded-r-xl border-2 bg-gray-100">
                    <ul className="divide-y-2 ">
                        <li className="bg-white px-2 py-3">Mathematicas aplicadas</li>
                        <li className="bg-white px-2 py-3">Mathematicas aplicadas</li>
                        <li className="bg-white px-2 py-3">Mathematicas aplicadas</li>
                        <li className="bg-white px-2 py-3">Mathematicas aplicadas</li>
                        <li className="bg-white px-2 py-3">Mathematicas aplicadas</li>
                        <li className="bg-white px-2 py-3">Mathematicas aplicadas</li>
                        <li className="bg-white px-2 py-3">Mathematicas aplicadas</li>
                    </ul>
                </div>
            </div>
        </article>
    )
}

export default ProgramStructure
