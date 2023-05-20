import React, { useState, useEffect } from "react";
import Search from "../Components/Search";
import { doc, getDoc } from "firebase/firestore";
import { useParams, useNavigate } from "react-router-dom";
import { db } from "../firebase";
import RadioButton from "../Components/RadioButton";
import TextView from "../Components/TextView";
import ImageView from "../Components/ImageView";
import DocView from "../Components/DocView";
import CodeEditor from "../Components/CodeEditor";
import { toast } from "react-toastify";
import Loader from "../Components/Loader";

const Fetch = () => {
  const [record, setRecord] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { clipId } = useParams();

  useEffect(() => {
    if (clipId) {
      handleFetch(clipId);
    }
  }, []);

  const handleFetch = async (id) => {
    setLoading(true);
    const res = await getDoc(doc(db, "tempStorage", id));
    if (res.exists()) {
      // do something
      if (clipId != id) navigate(`/fetch/${id}`);
      setRecord(res.data());
      toast.success("Successfully fetched ✨");
    } else {
      setRecord({});
      toast.error("Clip doesn't exists 🙀");
    }
    setLoading(false);
  };

  return (
    <>
      <div>
        <Search handleFetch={handleFetch} />
      </div>
      {loading ? (
        <Loader loading={loading} />
      ) : (
        <FetchResult clipId={clipId} record={record} setRecord={setRecord} />
      )}
    </>
  );
};

const FetchResult = ({ record, clipId, setRecord }) => {
  if (typeof record === "object" && Object.keys(record).length !== 0) {
    const [type, setType] = useState("text");

    return (
      <>
        <div className="mx-24 mt-12 p-2 max-md:mx-10 max-sm:mx-2 flex justify-center bg-red-200 rounded-md overflow-x-hidden">
          <div className="w-full">
            <RadioButton type={type} setType={setType} />
            <div className="viewSelectedType">
              <ViewSelectedType
                type={type}
                content={record}
                setContent={setRecord}
              />
            </div>
          </div>
        </div>
      </>
    );
  } else if (!clipId) {
    return <></>;
  } else {
    return <p className="text-3xl text-center mt-4">No clip found</p>;
  }
};

const ViewSelectedType = ({ type, content, setContent }) => {
  if (type === "text")
    return <TextView content={content} setContent={setContent} />;
  else if (type === "image")
    return <ImageView content={content} setContent={setContent} />;
  else if (type === "document")
    return <DocView content={content} setContent={setContent} />;
  else if (type === "code")
    return <CodeEditor content={content} setContent={setContent} />;
  else return <div>Error</div>;
};

export default Fetch;
