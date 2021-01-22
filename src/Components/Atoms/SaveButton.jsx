import React, { useState } from "react";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom"
//import {saveProgramLocally} from '../../Store/Slices/UserSlice'
import { db } from "../../Api/config/fbConfig";
const SaveButton = ({ programID }) => {
  const dispatch = useDispatch()
  
  const [savedPrograms, setsavedPrograms] = useState({});
  const myUser = useSelector((state) => state.myUser);
  const [toggle, setToggle] = useState(false);
  const history = useHistory();
  const handleSave = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    //TODO Generar un metodo en redux que haga estado global los programas guardados

    if (myUser.userLoggedIn === false) {
      history.push("/login");
    } else {
       
       console.log(myUser.savedPrograms)
       try {
         await db
       .collection("Users")
       .doc(myUser.data.uid)
       .collection("extraData")
       .doc("savedPrograms")
       .set({...myUser.savedPrograms});
       } catch (error) {
         console.log(error)
       }
       setToggle(!toggle)
    }
  };

  return (
    <button onClick={handleSave} className="btn-save " title="Save Program">
      {toggle ? (
        <BsFillBookmarkFill className="my-auto text-2xl text-blue-600" />
      ) : (
        <BsBookmark className="my-auto text-2xl" />
      )}
    </button>
  );
};

export default SaveButton;
