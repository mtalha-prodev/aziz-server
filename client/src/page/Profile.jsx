import React, { useEffect, useState } from "react";
import { endPoint } from "../utils/endpoint";
import { getWithToken, putWithToken } from "../api/fetch";
import { ClipLoader } from "react-spinners";
import Loader from "../components/Loader";

function Profile() {
  const [userData, setUserData] = useState({});
  const [loader, setLoader] = useState(true);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  const getUser = async () => {
    try {
      const user = await getWithToken(endPoint.profile);

      console.log(user);

      if (!user.status) {
        alert(user.message);
      }
      setLoader(false);
      setName(user.content.name);
      setRole(user.content.role);

      setUserData(user);
      //   alert(user.message);
    } catch (error) {
      console.log(error);
    }
  };

  const update = async () => {
    try {
      if (!name && !role) {
        alert("Please fill all fields");
        return;
      }
      let data = {
        name,
        role,
      };

      const update = await putWithToken(data, endPoint.updateProfile);

      console.log(update);
      if (!update.status) {
        alert(update.message);
        return;
      }
      setUserData(update);
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

      <input
        name="name"
        type="text"
        placeholder="name..."
        value={name}
        onChange={(text) => setName(text.target.value)}
      />
      <input
        name="role"
        type="text"
        placeholder="enter role..."
        value={role}
        onChange={(text) => setRole(text.target.value)}
      />

      <button className="bg-slate-800 text-white" onClick={() => update()}>
        Update profile
      </button>

      {loader && <Loader loader={loader} />}
    </div>
  );
}

export default Profile;
