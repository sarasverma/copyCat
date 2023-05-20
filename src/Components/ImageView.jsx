import React from "react";
import { RiImageAddFill } from "react-icons/ri";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const ImageView = ({ content, setContent }) => {
  let location = useLocation();

  const handleFileSelect = (event) => {
    const files = event.target.files;

    Array.from(files).forEach((file) => {
      const reader = new FileReader();

      reader.onload = (e) => {
        // e.target.result
        setContent((prevContent) => ({
          ...prevContent,
          images: [
            ...prevContent.images,
            { image: file, thumbnail: e.target.result },
          ],
        }));
      };
      reader.readAsDataURL(file);
    });
  };

  const handleDownload = async (url, name) => {
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
      toast.error("Error :", error);
    }
  };

  return (
    <div
      className="text-center flex flex-col items-center justify-center gap-2"
      onClick={() => {}}
    >
      {!location.pathname.includes("/fetch") && (
        <div className="addImage py-2">
          <label htmlFor="images" className="flex items-center gap-1 text-xl">
            <RiImageAddFill />
            Add Images
          </label>
          <input
            type="file"
            id="images"
            name="images"
            accept="image/png, image/jpeg"
            multiple
            className="hidden"
            onChange={handleFileSelect}
          />
        </div>
      )}

      <div className="flex gap-2 flex-wrap items-center justify-center">
        {content.images.map((image, index) => {
          return (
            <div
              className="flex flex-col gap-1 w-[100px] border border-cyan-600 rounded"
              key={index}
              onClick={
                location.pathname.includes("/fetch")
                  ? (e) => {
                      e.preventDefault();
                      handleDownload(image);
                    }
                  : () => {}
              }
            >
              <img
                src={
                  location.pathname.includes("/fetch") ? image : image.thumbnail
                }
                alt={
                  location.pathname.includes("/fetch")
                    ? `img_${index}`
                    : image.image.name
                }
                className="aspect-square w-full"
              />
              <p>
                {location.pathname.includes("/fetch")
                  ? `img_${index}`
                  : image.image.name?.substr(0, 10)}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageView;
