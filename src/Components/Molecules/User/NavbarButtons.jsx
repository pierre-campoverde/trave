import React, { useState } from 'react'
import Button from '../../Atoms/Button'
import ButtonLoadingSkeleton from '../../Atoms/Buttons/ButtonLoadingSkeleton'
import UserMenu from './UserMenu'

const NavbarButtons = (props) => {
    
    if(props.userState===null){
        return <ButtonLoadingSkeleton/>
    }else if (props.userState===false){
        return <div className="hidden button-group sm:flex mr-5">
        <Button type={"secondary"} to={"/signup"} name={"Sign Up"} />
        <Button type={"primary"} to={"/login"} name={"Log in"} />
      </div>
    }else if(props.userState===true){
        return <UserMenu />
    }
}

export default NavbarButtons
