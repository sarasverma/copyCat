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
        className="search max-sm:w-full flex justify-center flex-wrap"
      >
        <input
          ref={searchRef}
          type="text"
          placeholder="Clip id"
          className="px-3 py-2.5 bg-slate-200 focus:border-2 border-orange-500 outline-none placeholder:text-stone rounded-tl-md rounded-bl-md sm:min-w-[400px]"
          required
        />
        <button className="px-5 py-2.5 bg-orange-500 outline-none rounded-tr-md rounded-br-md text-white">
          Fetch
        </button>
      </form>
    </div>
  );
};

export default Search;
