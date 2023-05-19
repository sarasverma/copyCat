import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="w-full flex justify-center mt-[150px]">
      <div>
        <img
          src="https://media.tenor.com/qqnxNXtPB0gAAAAd/oh-cat.gif"
          alt="cat_meme_tenor"
          className="w-[300px] aspect-square "
        />
        <h1 className="text-3xl text-orange-500 text-center">
          404 Page not Found
        </h1>
        <p className="text-center">
          <Link to="/" className="text-3xl text-orange-500 underline ">
            Main Page 😼
          </Link>
        </p>
      </div>
    </div>
  );
};

export default PageNotFound;
