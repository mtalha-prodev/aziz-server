import React from "react";
import { ClipLoader } from "react-spinners";

function Loader({ loader }) {
  return (
    <div className=" absolute top-0 bottom-0 right-0 left-0 z-50 flex justify-center items-center">
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

export default Loader;
