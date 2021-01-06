import React from 'react'
import { ImSpinner8 } from 'react-icons/im'

const ButtonSubmit = (props) => {
    return (
        <div className="input-group my-2">
        <button type="submit" className="btn-primary w-full ">
          {props.myUserStatus === "loading" ? (
            <ImSpinner8 className="text-2xl text-center mx-auto animate-spin" />
          ) : (
            <p>{props.value}</p>
          )}
        </button>
      </div>
    )
}

export default ButtonSubmit
