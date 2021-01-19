import React from "react";
import ReactDom from "react-dom";
import useOnclickOutside from "react-cool-onclickoutside";
import { useDispatch } from "react-redux";
import { toggle, setToggleFalse } from "../../../Store/Slices/UiSlice";
import SubMenuLink from "./SubMenuLink";
import { useHistory } from "react-router-dom";
import { logOutUser } from "../../../Store/Slices/UserSlice";
import {
  IoExitOutline,
  IoCogOutline,
  IoBookmarkOutline,
  IoChatboxOutline,
  IoDocumentsOutline,
} from "react-icons/io5";
const MyUserMenu = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const ref = useOnclickOutside(() => {
    dispatch(toggle());
  });
  const handleLogOut = () => {
    dispatch(logOutUser());
    history.push("/");
    dispatch(setToggleFalse());
  };

  return ReactDom.createPortal(
    <div
      ref={ref}
      className=" border-2  right-5 top-20 p-2  fixed  h-auto w-52 bg-white rounded-xl divide-y-2"
    >
      <div>
        <SubMenuLink value={"Mensajes"} text={"font-medium"}>
          <IoChatboxOutline className="text-2xl mr-2" />
        </SubMenuLink>
        <SubMenuLink value={"Guardados"} text={"font-medium"}>
          <IoBookmarkOutline className="text-2xl mr-2" />
        </SubMenuLink>
        <SubMenuLink value={"Postulaciones"} text={"font-medium"}>
          <IoDocumentsOutline className="text-2xl mr-2" />
        </SubMenuLink>
      </div>
      <div>
        <SubMenuLink value={"Configuration"}>
          <IoCogOutline className="text-2xl mr-2" />
        </SubMenuLink>
        <SubMenuLink onClick={handleLogOut} value={"Cerrar sesión"}>
          <IoExitOutline className="text-2xl mr-2" />
        </SubMenuLink>
      </div>
    </div>,
    document.getElementById("portal-root")
  );
};

export default MyUserMenu;
