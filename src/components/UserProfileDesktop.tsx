import { iUserProfileProps } from "@/types/types";
import React from "react";

const UserProfileDesktop: React.FC<iUserProfileProps> = ({ userData }) => {
  return (
    <div className="lg:col-span-1 ml-6 mt-6 hidden sm:block">
      <div className="w-[448px] bg-white p-6 rounded-sm border border-light-gray">
        <img
          src={userData.avatar_url}
          id="avatar"
          alt="Avatar"
          className="w-[200px] h-[200px] rounded-full mx-auto mb-4 object-cover"
        />
        <h2
          className="text-neutral-gray font-semibold text-[21px] text-center"
          id="name"
        >
          {userData.name}
        </h2>
        <h3
          className="text-dark-gray font-normal text-center text-[14px] mb-2"
          id="username"
        >
          @{userData.login}
        </h3>
        <p
          className="text-dark-gray font-normal text-[14px] text-center mb-4"
          id="bio"
        >
          {userData.bio}
        </p>
      </div>
    </div>
  );
};

export default UserProfileDesktop;
