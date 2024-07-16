import { useState } from "react";

const ImageUpload = () => {
  const [fileData, setFileData] = useState();
  const [images, setFile] = useState("");
  

  const handleFileChange = ({ target }: { target: any }) => {
    setFileData(target.files[0]);
  };
  return (
    <>
      <form>
        <input
          type="file"
          name="file"
          accept="image/*"
          onChange={handleFileChange}
          placeholder="upload image"
        />
      </form>
    </>
  );
};

export default ImageUpload;
