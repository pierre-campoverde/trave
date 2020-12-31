import React from "react";
import { logOutUser } from "../Store/Slices/UserSlice";
import { useDispatch } from "react-redux";
import {useHistory} from 'react-router-dom'
const UserProfile = () => {
  const dispatch = useDispatch();
  const history=useHistory()
  const handleClick = () => {
    dispatch(logOutUser())
    history.push('/login')
  };
  return (
    <div>
      <button
        onClick={handleClick}
        className="bg-gray-200 h-10 w-20 rounded border-2 border-black"
      >
        Log Out
      </button>
    </div>
  );
};

export default UserProfile;
