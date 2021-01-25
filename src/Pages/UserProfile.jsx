import React from "react";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const myUser = useSelector((state) => state.myUser.data.userData);

  return (
    <main className="bg-gray-100 h-screen  mx-auto flex">
      <section className="w-11/12 md:w-8/12 my-auto rounded-2xl p-4 h-auto border mx-auto bg-white">
        <div className="w-full text-center">
          <img
            src={myUser.photoURL}
            alt={myUser.fullName}
            className="rounded-full mx-auto"
          />
          <h3 className="h3 mt-2">{myUser.fullName}</h3>
          <p className="text-gray-500 text-sm">
            Student at University of Samara
          </p>
          <div className="flex my-2 justify-around">
            <div className="bg-blue-100 h-20 w-20 rounded-lg text-blue-800 flex flex-col justify-center">
              <p className="text-xl font-medium">568</p>
              <span className="text-xs">Followers</span>
            </div>
            <div className="bg-blue-100 h-20 w-20 rounded-lg text-blue-800 flex flex-col justify-center">
              <p className="text-xl font-medium">30</p>
              <span className="text-xs">Posts</span>
            </div>
            <div className="bg-blue-100 h-20 w-20 rounded-lg text-blue-800 flex flex-col justify-center">
              <p className="text-xl font-medium">40</p>
              <span className="text-xs">Articles</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default UserProfile;
