"use client";

import { ChangeEvent, useState } from "react";
import axios from "axios";

const ImageUpload = () => {
  const [image, setFile] = useState<File | null>();
  const [preview, setPreview] = useState<any>();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
      // @ts-ignore
      setPreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      if (!image) return;

      const formdata = new FormData();
      formdata.append("Image", image);

      const response = await axios.post("/api/upload-image", formdata);

      const data: any = await response;
      await localStorage.setItem("URL", data.url);
    } catch (error: any) {}
  };
  return (
    <>
      {/* <form onSubmit={handleSubmit}> */}
      <label htmlFor="dp">Image</label>
      <img
        className="max-w-[200px] min-w-[200px] max-h-[200px] min-h-[200px] object-cover rounded-full"
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
      <button onClick={handleSubmit}>Save</button>
      {/* </form> */}
    </>
  );
};

export default ImageUpload;
