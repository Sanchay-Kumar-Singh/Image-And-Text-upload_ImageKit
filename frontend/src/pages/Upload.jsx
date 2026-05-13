import { useState } from "react";
import axios from "axios";

function Upload() {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      alert("Please select an image");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);
    formData.append("caption", caption);

    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/posts/upload`,
        formData
      );

      alert("Uploaded Successfully");
      setCaption("");
      setImage(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md w-[400px]"
      >
        <h1 className="text-2xl font-bold mb-4">
          Upload Post
        </h1>

        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          className="mb-4"
        />

        <textarea
          placeholder="Enter caption"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          className="border p-2 w-full mb-4"
        />

        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Upload
        </button>
      </form>
    </div>
  );
}

export default Upload;
