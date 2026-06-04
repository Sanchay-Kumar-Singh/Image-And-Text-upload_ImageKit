import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Upload() {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");

  const navigate = useNavigate();

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

      alert("Uploaded Successfully ✅");

      setCaption("");
      setImage(null);

      navigate("/");
    } catch (error) {
      console.log(error);
      alert("Upload Failed ❌");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
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
          className="mb-4 w-full"
        />

        <textarea
          placeholder="Enter caption"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          className="border p-2 w-full mb-4 rounded"
          rows="4"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600"
        >
          Upload
        </button>
      </form>
    </div>
  );
}

export default Upload;