import React from "react";
import PacmanLoader from "react-spinners/PacmanLoader";

const Loader = ({ loading }) => {
  return (
    <div className="w-full flex justify-center">
      <PacmanLoader
        color="#fb923c"
        loading={loading}
        size={70}
        aria-label="Loading Spinner"
        data-testid="loader"
        className="mt-4"
      />
    </div>
  );
};

export default Loader;
