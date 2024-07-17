"use client";

import axios from "axios";
import { ChangeEvent, useState } from "react";

const ImageUpload = () => {
  const [image, setFile] = useState<File | null>();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("Yes inside");
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      if (!image) return;

      const formdata = new FormData();
      formdata.append("Image", image);

      const response = await axios.post("/api/upload-image", formdata);
      console.log("HERE");

      const data = await response.data;
      console.log("DATA: ", data);
    } catch (error: any) {
      console.log("Error: ", error.message);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          onChange={handleFileChange}
          placeholder="upload image"
        />
        <button>Upload</button>
      </form>
    </>
  );
};

export default ImageUpload;
