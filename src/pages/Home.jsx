import React, { useState } from "react";
import RadioButton from "../Components/RadioButton";
import TextView from "../Components/TextView";
import ImageView from "../Components/ImageView";
import DocView from "../Components/DocView";
import CodeEditor from "../Components/CodeEditor";

const Home = ({}) => {
  const [type, setType] = useState("text");
  const [content, setContent] = useState({
    text: "",
    images: [],
    documents: [],
    code: { lang: "javascript", code: "" },
  });

  return (
    <div className="mx-24 mt-12 p-2 max-md:mx-10 max-sm:mx-2 flex justify-center bg-red-200 rounded-md overflow-x-hidden">
      <div className="w-full">
        <RadioButton type={type} setType={setType} />
        <div className="viewSelectedType">
          <ViewSelectedType
            type={type}
            content={content}
            setContent={setContent}
          />
        </div>
        <div className="submit">
          <button
            type="submit"
            className="px-2.5 py-1.5 bg-orange-500 rounded-xl"
            onClick={() => {
              console.log(content);
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
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

export default Home;
