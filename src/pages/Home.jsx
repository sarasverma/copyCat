import React, { useState } from "react";
import RadioButton from "../Components/RadioButton";
import TextView from "../Components/TextView";
import ImageView from "../Components/ImageView";
import DocView from "../Components/DocView";
import CodeEditor from "../Components/CodeEditor";

const Home = () => {
  const [type, setType] = useState("text");

  return (
    <div className="mx-24 mt-12 p-2 max-md:mx-10 max-sm:mx-2 flex justify-center bg-red-200 rounded-md overflow-x-hidden">
      <div className="w-full">
        <RadioButton type={type} setType={setType} />
        <div className="viewSelectedType">
          <ViewSelectedType type={type} />
        </div>
      </div>
    </div>
  );
};

const ViewSelectedType = ({ type }) => {
  if (type === "text") return <TextView />;
  else if (type === "image") return <ImageView />;
  else if (type === "document") return <DocView />;
  else if (type === "code") return <CodeEditor />;
  else return <div>Error</div>;
};

export default Home;
