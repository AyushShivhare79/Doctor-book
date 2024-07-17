import cloudinary from "./cloudinary";

export const UploadImage = async (file: File, folder: string) => {
  return new Promise(async (resolve, rejects) => {
    await cloudinary.uploader
      .upload_stream(
        {
          resource_type: "auto",
          folder: folder,
        },
        async (err, result) => {
          if (err) {
            rejects(err.message);
          }
          resolve(resolve);
        },
      )
      .end();
  });
};
