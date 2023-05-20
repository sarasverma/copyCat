import React from "react";

const RadioButton = ({ type, setType }) => {
  return (
    <div className="types my-3 flex justify-center flex-wrap">
      <div
        className={`py-1 px-2 border-2  rounded-tl-md rounded-bl-md border-r-0 hover:bg-orange-500 cursor-pointer ${
          type === "text" ? "bg-orange-500 text-white" : "bg-orange-300"
        }`}
        onClick={() => {
          setType("text");
        }}
      >
        <input
          type="radio"
          name="type"
          id="text"
          value="text"
          className="hidden"
        />
        <label htmlFor="text" className="cursor-pointer">
          Text
        </label>
      </div>

      <div
        className={`py-1 px-2 border-2 border-r-0 hover:bg-orange-500 cursor-pointer ${
          type === "image" ? "bg-orange-500 text-white" : "bg-orange-300"
        }`}
        onClick={() => {
          setType("image");
        }}
      >
        <input
          type="radio"
          name="type"
          id="image"
          value="image"
          className="hidden"
        />
        <label htmlFor="image" className="cursor-pointer">
          Images
        </label>
      </div>

      <div
        className={`py-1 px-2 border-2 border-r-0 hover:bg-orange-500 cursor-pointer ${
          type === "document" ? "bg-orange-500 text-white" : " bg-orange-300"
        }`}
        onClick={() => {
          setType("document");
        }}
      >
        <input
          type="radio"
          name="type"
          id="document"
          value="document"
          className="hidden"
        />
        <label htmlFor="document" className="cursor-pointer">
          Documents
        </label>
      </div>

      <div
        className={`py-1 px-2 border-2 rounded-tr-md rounded-br-md hover:bg-orange-500 cursor-pointer ${
          type === "code" ? "bg-orange-500 text-white" : " bg-orange-300"
        }`}
        onClick={() => {
          setType("code");
        }}
      >
        <input
          type="radio"
          name="type"
          id="code"
          value="code"
          className="hidden"
        />
        <label htmlFor="code" className="cursor-pointer">
          Code
        </label>
      </div>
    </div>
  );
};

export default RadioButton;
