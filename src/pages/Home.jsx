import React, { useState } from "react";
import RadioButton from "../Components/RadioButton";
import TextView from "../Components/TextView";
import ImageView from "../Components/ImageView";
import DocView from "../Components/DocView";
import CodeEditor from "../Components/CodeEditor";
import { doc, setDoc } from "firebase/firestore";
import { db, storage } from "../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const Home = ({}) => {
  const [type, setType] = useState("text");
  const [content, setContent] = useState({
    text: "",
    images: [],
    documents: [],
    code: { lang: "javascript", code: "" },
  });

  const handleSubmit = async () => {
    console.log(content);
    const { text, images, documents, code } = content;
    const uniqueId = "uniqueId";

    let fileUrls = [],
      imageUrls = [];

    try {
      const storageRef = ref(storage, uniqueId);

      if (images.length !== 0) {
        // upload images to storage
        imageUrls = await Promise.all(
          images.map(async (image, index) => {
            const imageRef = ref(storageRef, `imgs/img_${index}`);
            await uploadBytes(imageRef, image.image);
            return getDownloadURL(imageRef);
          })
        );
      }

      if (documents.length !== 0) {
        // upload file to storage
        fileUrls = await Promise.all(
          documents.map(async (document, index) => {
            const documentRef = ref(storageRef, `docs/doc_${index}`);
            await uploadBytes(documentRef, document);
            return getDownloadURL(documentRef);
          })
        );
      }

      // store text and code in the database
      await setDoc(doc(db, "tempStorage", "uniqueId"), {
        text,
        code,
        images: imageUrls,
        documents: fileUrls,
      });

      alert("Your clipboard is now available. 😼");

      // navigate to the site
    } catch (error) {
      console.log(`Error 🙀: ${error}`);
    }
  };

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
            onClick={handleSubmit}
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
