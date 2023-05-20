import React, { useRef } from "react";

const Search = ({ handleFetch }) => {
  const searchRef = useRef(null);

  return (
    <div className="flex w-full flex-col items-center justify-center mt-4">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleFetch(searchRef.current.value);
        }}
        className="search"
      >
        <input
          ref={searchRef}
          type="text"
          placeholder="enter the clip id"
          required
        />
        <button>Fetch</button>
      </form>
    </div>
  );
};

export default Search;
