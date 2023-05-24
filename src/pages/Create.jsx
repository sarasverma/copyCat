import React, { useState } from "react";
import RadioButton from "../Components/RadioButton";
import TextView from "../Components/TextView";
import ImageView from "../Components/ImageView";
import DocView from "../Components/DocView";
import CodeEditor from "../Components/CodeEditor";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db, storage } from "../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../Components/Loader";
import { ShapeContainer } from "../Components/Shapes";

const Create = ({}) => {
  const [type, setType] = useState("text");
  const [content, setContent] = useState({
    text: "",
    images: [],
    documents: [],
    code: { lang: "javascript", code: "" },
  });
  const [clipId, setClipId] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    console.log(content);

    setLoading(true);
    const { text, images, documents, code } = content;

    let fileUrls = [],
      imageUrls = [];

    try {
      // check clipid already exist
      const res = await getDoc(doc(db, "tempStorage", clipId));
      if (res.exists()) {
        setLoading(false);
        toast.error("This clipId already exists 🙀");
      } else {
        const storageRef = ref(storage, clipId);

        if (images.length !== 0) {
          // upload images to storage
          imageUrls = await Promise.all(
            images.map(async (image) => {
              const imageRef = ref(storageRef, `imgs/${image.image.name}`);
              await uploadBytes(imageRef, image.image);
              return getDownloadURL(imageRef);
            })
          );
        }

        if (documents.length !== 0) {
          // upload file to storage
          fileUrls = await Promise.all(
            documents.map(async (document) => {
              const documentRef = ref(storageRef, `docs/${document.name}`);
              await uploadBytes(documentRef, document);
              return getDownloadURL(documentRef);
            })
          );
        }

        // store text and code in the database
        await setDoc(doc(db, "tempStorage", clipId), {
          text,
          code,
          images: imageUrls,
          documents: fileUrls,
        });

        toast.success("Your clipboard is now available. 😼");

        // navigate to the site
        setLoading(false);
        navigate(`/fetch/${clipId}`);
      }
    } catch (error) {
      setLoading(false);
      toast.error(`Error 🙀: ${error}`);
    }
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="mx-24 mt-12 max-md:mx-10 max-sm:mx-2 flex flex-col items-center bg-orange-200 rounded-md overflow-x-hidden bg-gradient-to-br from-orange-200 to-orange-500">
          <ShapeContainer />
          <div className="w-full px-2 translate-y-[-69px] mb-[-60px]">
            <RadioButton type={type} setType={setType} />

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
              className="submit flex gap-1 justify-end mb-2 flex-wrap"
            >
              <input
                type="text"
                placeholder="Clip Id"
                className="px-1.5 py-1 focus:border-2 border-orange-500 outline-none placeholder:text-stone rounded-md"
                onChange={(e) => {
                  setClipId(e.target.value);
                }}
                required
              />
              <button
                type="submit"
                className="px-2.5 py-1.5 bg-orange-500 rounded-md text-white"
              >
                Submit
              </button>
            </form>

            <div className="viewSelectedType">
              <ViewSelectedType
                type={type}
                content={content}
                setContent={setContent}
              />
            </div>
          </div>
        </div>
      )}
    </>
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

export default Create;
