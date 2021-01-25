import React from 'react'
import { useSelector } from 'react-redux'
import ProgramTitle from '../Components/Organisms/ProgramPage/ProgramTitle'

const Testing = () => {
  const program = useSelector(state => state.programs.selectedProgram)
  return (
    <div className="min-h-screen">
            <section className="program sm:w-11/12 md:w-10/12 xl:w-8/12 mx-auto pt-10 md:pt-16 px-2">
               <ProgramTitle title={program.name}/>
            </section>
         
    </div>
  )
}

export default Testing
