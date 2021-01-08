import React  from "react";
import SocialMediaButton from "../Atoms/SocialMediaButton";
import { FaFacebookSquare, FaTwitter, FaGoogle } from "react-icons/fa";
import {
  logInUserFacebook,
  logInUserGoogle,
} from "../../Store/Slices/UserSlice";
import SignInForm from '../Organisms/Auth/SignInForm'
import { useDispatch } from "react-redux";

//*FORMIK VALIDATION

const SignUpSection = () => {
  const dispatch = useDispatch();
  //*SIGN GOOGLE FACEBOOK EVENTS HANDLERS
  const signUpFacebook = () => {
    dispatch(logInUserFacebook());
  };
  const signupGoogle = () => {
    dispatch(logInUserGoogle());
  };
  return (
    <div className="w-full md:w-5/12 mt-16">
      <div className=" w-11/12 sm:w-7/12 md:w-11/12 lg:w-7/12 mx-auto">
        <div className="form-title mx-auto">
          <h2 className="text-3xl font-semibold">
            Sign up and start a new adventure
          </h2>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="sign  mx-auto mt-4 ">
          <p className="text-sm font-medium text-gray-600 ">Registrate con</p>
          <div className="flex justify-around mt-2">
            <SocialMediaButton event={signUpFacebook}>
              <FaFacebookSquare className="mx-auto" />
            </SocialMediaButton>
            <SocialMediaButton>
              <FaTwitter className="mx-auto" />
            </SocialMediaButton>
            <SocialMediaButton event={signupGoogle}>
              <FaGoogle className="mx-auto" />
            </SocialMediaButton>
          </div>
        </div>
        <p className="text-center text-gray-600 text-sm my-6">
          O continua con
        </p>
        <div className="form ">
          <SignInForm/>
        </div>
      </div>
    </div>
  );
};

export default SignUpSection;
