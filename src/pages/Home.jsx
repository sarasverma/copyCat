import React from "react";
import CodeEditor from "../Components/CodeEditor";

const Home = () => {
  return (
    <div className="px-24 pt-12 max-sm:px-2 flex justify-center">
      <div className="w-full max-sm:w-[95%]">
        <div className="types">
          <input
            type="radio"
            name="type"
            id="text"
            value="text"
            className="outline-none"
          />
          <input type="radio" name="type" id="image" value="image" />
          <input type="radio" name="type" id="document" value="document" />
          <input type="radio" name="type" id="code" value="code" />
        </div>

        <div className="thing">
          <CodeEditor />
        </div>
      </div>
    </div>
  );
};

export default Home;
