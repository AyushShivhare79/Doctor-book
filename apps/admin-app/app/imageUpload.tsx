"use client";

import axios from "axios";
import { ChangeEvent, useState } from "react";

const ImageUpload = () => {
  const [image, setFile] = useState<File | null>();
  const [preview, setPreview] = useState<any>();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("Yes inside");
    if (e.target.files) {
      setFile(e.target.files[0]);
      // @ts-ignore
      setPreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  console.log("Image: ", image);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      if (!image) return;

      const formdata = new FormData();
      formdata.append("Image", image);

      console.log("HERE");
      const response = await axios.post("/api/upload-image", formdata);

      const data = await response.data;
      console.log("DATA: ", data);
    } catch (error: any) {
      console.log("Error: ", error.message);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label
          htmlFor="dp"
          // className="border border-black rounded-full px-10 py-14 hover:cursor-pointer"
        >
          Image
        </label>
        <img
          className="border border-black rounded-full}"
          alt="preview image"
          src={preview}
        />
        <input
          id="dp"
          type="file"
          className="hidden"
          onChange={handleFileChange}
          placeholder="upload image"
        />
        <button>Upload</button>
      </form>
    </>
  );
};

export default ImageUpload;
