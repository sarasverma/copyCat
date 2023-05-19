import React, { useRef, useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { useParams, useNavigate } from "react-router-dom";
import { db } from "../firebase";
import Home from "../pages/Home";

const Search = () => {
  const [record, setRecord] = useState({});
  const navigate = useNavigate();
  const { clipId } = useParams();
  const searchRef = useRef(null);

  useEffect(() => {
    if (clipId) {
      handleFetch(clipId);
    }
  }, []);

  const handleFetch = async (id) => {
    const res = await getDoc(doc(db, "tempStorage", id));
    if (res.exists()) {
      // do something
      if (clipId != id) navigate(`/fetch/${id}`);
      setRecord(res.data());
      alert("Successfully fetched your clips! ✨");
    } else {
      alert("Clip doesn't exists 🙀");
    }
  };

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
      <FetchResult clipId={clipId} record={record} />
    </div>
  );
};

const FetchResult = ({ record, clipId }) => {
  if (record) {
    // return <Home />;
    return <></>;
  } else if (!clipId) {
    return <></>;
  } else {
    return <p className="text-3xl mt-4">No clip found</p>;
  }
};
export default Search;
