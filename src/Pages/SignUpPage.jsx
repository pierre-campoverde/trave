import React from 'react'
import SignUpForm from '../Components/Templates/SignUpSection'
const SignUpPage = () => {

    return (
        <main className="h-screen bg-white sm:flex">
        <SignUpForm/>
        <div className="hidden md:inline md:w-7/12   bg-gray-100"></div>
    </main>
    )
}

export default SignUpPage
