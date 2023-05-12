import React from "react";
import Editor from "@monaco-editor/react";

const CodeEditor = () => {
  return (
    <div>
      <Editor
        height="70vh"
        defaultLanguage="javascript"
        defaultValue="// put your code here"
        // theme="vs-dark"
      />
    </div>
  );
};

export default CodeEditor;
