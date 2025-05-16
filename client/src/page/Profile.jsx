import React, { useEffect, useState } from "react";
import { endPoint } from "../utils/endpoint";
import { getWithToken, putWithToken } from "../api/fetch";
import { ClipLoader } from "react-spinners";
import Loader from "../components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../store/reducer/authSlice";

function Profile() {
  const { user } = useSelector((state) => state.auth);
  const [loader, setLoader] = useState(true);
  const [name, setName] = useState(user?.name);
  const [role, setRole] = useState(user?.role);
  const dispatch = useDispatch();

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

      const resp = await putWithToken(data, endPoint.updateProfile);

      dispatch(updateProfile(resp));
      console.log(resp);
      if (!resp.status) {
        alert(resp.message);
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

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
      <p>Name: {user?.name}</p>
      <p>Email: {user?.email}</p>
      <p>role: {user?.role}</p>
      <img src={user?.picture} alt="User Pic" />

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

      {/* {loader && <Loader loader={loader} />} */}
    </div>
  );
}

export default Profile;
