import React from "react";

const TextView = ({ content, setContent }) => {
  return (
    <div>
      <textarea
        className="w-full px-1 py-1"
        value={content.text}
        onChange={(e) => {
          setContent({ ...content, text: e.target.value });
        }}
        rows="20"
      ></textarea>
    </div>
  );
};

export default TextView;
