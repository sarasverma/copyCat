import React from "react";
import { AiOutlineFileAdd, AiFillFile } from "react-icons/ai";

const DocView = ({ content, setContent }) => {
  const handleFileSelect = (event) => {
    const files = event.target.files;
    Array.from(files).forEach((file) => {
      setContent({ ...content, documents: [...content.documents, file] });
    });
  };

  return (
    <div
      className="text-center flex flex-col items-center justify-center gap-2"
      onClick={() => {}}
    >
      <div className="py-2">
        <label htmlFor="documents" className="flex items-center gap-1 text-xl">
          <AiOutlineFileAdd />
          Add Files
        </label>
        <input
          type="file"
          id="documents"
          name="documents"
          multiple
          className="hidden"
          onChange={handleFileSelect}
        />
      </div>

      <div className="flex gap-2 flex-wrap items-center justify-center">
        {content.documents.map((document, index) => (
          <div
            className="flex flex-col gap-1 w-[100px] items-center border border-cyan-600 rounded"
            key={index}
          >
            <AiFillFile className="text-3xl" />
            <p>{document.name.substr(0, 8) + "..."}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocView;
