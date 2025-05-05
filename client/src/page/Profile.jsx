import React, { useEffect, useState } from "react";
import { endPoint } from "../utils/endpoint";
import { getWithToken } from "../api/fetch";
import { ClipLoader } from "react-spinners";

function Profile() {
  const [userData, setUserData] = useState({});
  const [loader, setLoader] = useState(true);

  const getUser = async () => {
    try {
      const user = await getWithToken(endPoint.profile);

      console.log(user);

      if (!user.status) {
        alert(user.message);
      }
      setLoader(false);

      setUserData(user);
      //   alert(user.message);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          localStorage.clear();
          window.location.href = "/";
        }}
      >
        Logout
      </button>

      <h2>User Profile</h2>
      <p>Name: {userData?.content?.name}</p>
      <p>Email: {userData?.content?.email}</p>
      <p>role: {userData?.content?.role}</p>
      <img src={userData?.content?.picture} alt="User Pic" />

      {loader && <span className="text-3xl">loader</span>}

      <ClipLoader
        color={"red"}
        loading={loader}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Profile;
