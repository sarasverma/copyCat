import React, { useState } from "react";
import Editor from "@monaco-editor/react";

const CodeEditor = ({ content, setContent }) => {
  const [language, setLanguage] = useState("javascript");
  const [theme, setTheme] = useState("vs-light");

  const langs = [
    "javascript",
    "typescript",
    "css",
    "html",
    "json",
    "markdown",
    "python",
    "java",
    "cpp",
    "csharp",
    "php",
    "ruby",
    "go",
    "swift",
    "rust",
    "sql",
    "shell",
    "perl",
    "lua",
  ];
  const themes = ["vs-light", "vs-dark", "hc-black"];

  return (
    <div className="flex flex-col gap-2">
      <div className="options flex gap-2">
        <select
          className="px-2 py-[2px]"
          onChange={(e) => {
            setLanguage(e.target.value);
            setContent({
              ...content,
              code: { ...content.code, lang: e.target.value },
            });
          }}
        >
          {langs.map((language) => (
            <option key={language} value={language}>
              {language}
            </option>
          ))}
        </select>

        <select
          className="px-2 py-[2px]"
          onChange={(e) => {
            setTheme(e.target.value);
          }}
        >
          {themes.map((theme) => (
            <option key={theme} value={theme}>
              {theme}
            </option>
          ))}
        </select>
      </div>

      <Editor
        height="70vh"
        defaultValue="// put your code here"
        onChange={(v, e) => {
          setContent({ ...content, code: { ...content.code, code: v } });
        }}
        language={language}
        theme={theme}
      />
    </div>
  );
};

export default CodeEditor;
