"use client";

import axios from "axios";
import { ChangeEvent, useState } from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { Resize } from "@cloudinary/url-gen/actions";
import { scale } from "@cloudinary/url-gen/actions/resize";

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

  // const CloudinaryImage = new Cloudinary({
  //   cloud: {
  //     cloudName: process.env.cloud_name,
  //   },
  // });

  console.log("Image: ", image);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      if (!image) return;

      const formdata = new FormData();
      formdata.append("Image", image);

      console.log("HERE");
      const response = await axios.post("/api/upload-image", formdata);

      const data: any = await response;
      console.log("DATA: ", data);
     await localStorage.setItem("URL", data.url);
    } catch (error: any) {
      console.log("Error: ", error.message);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
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
        <button>Upload</button>
      </form>
    </>
  );
};

export default ImageUpload;
