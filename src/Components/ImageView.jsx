import React from "react";
import { RiImageAddFill } from "react-icons/ri";

const ImageView = ({ content, setContent }) => {
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

  return (
    <div
      className="text-center flex flex-col items-center justify-center gap-2"
      onClick={() => {}}
    >
      <div className="py-2">
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

      <div className="flex gap-2 flex-wrap items-center justify-center">
        {content.images.map((image, index) => {
          return (
            <div
              className="flex flex-col gap-1 w-[100px] border border-cyan-600 rounded"
              key={index}
            >
              <img
                src={image.thumbnail}
                alt={image.image.name}
                className="aspect-square w-full"
              />
              <p>{image.image.name?.substr(0, 10)}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageView;
