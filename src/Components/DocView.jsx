import React from "react";
import { AiOutlineFileAdd, AiFillFile } from "react-icons/ai";
import { useLocation } from "react-router-dom";

const DocView = ({ content, setContent }) => {
  let location = useLocation();

  const handleFileSelect = (event) => {
    const files = event.target.files;
    Array.from(files).forEach((file) => {
      setContent((prevContent) => ({
        ...prevContent,
        documents: [...prevContent.documents, file],
      }));
    });
  };

  const handleDownload = async (url) => {
    try {
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "");
      link.setAttribute("target", "_blank");
      link.style.display = "none";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };

  return (
    <div
      className="text-center flex flex-col items-center justify-center gap-2"
      onClick={() => {}}
    >
      {!location.pathname.includes("/fetch") && (
        <div className="addDocs py-2">
          <label
            htmlFor="documents"
            className="flex items-center gap-1 text-xl"
          >
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
      )}
      <div className="flex gap-2 flex-wrap items-center justify-center">
        {content.documents.map((document, index) => (
          <div
            className="flex flex-col gap-1 w-[100px] items-center border border-cyan-600 rounded"
            key={index}
            onClick={
              location.pathname.includes("/fetch")
                ? (e) => {
                    e.preventDefault();
                    handleDownload(document);
                  }
                : () => {}
            }
          >
            <AiFillFile className="text-3xl" />
            <p>
              {location.pathname.includes("/fetch")
                ? `doc_${index}`
                : document.name.substr(0, 8) + "..."}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocView;
