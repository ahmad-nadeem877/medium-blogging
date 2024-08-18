import { ChangeEvent, ChangeEventHandler, useState } from "react";
import { AppBar } from "../components/AppBar";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export const PublishBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  async function sendrequest() {
    const response = await axios.post(
      `${BACKEND_URL}/api/v1/blog`,
      {
        title,
        content,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("JWT_TOKEN")}`,
        },
      }
    );
    if (response.data != null) {
      navigate(`/blog/${response.data.blog.id}`);
    }
  }
  return (
    <div>
      <AppBar />
      <div className="flex justify-center">
        <div className="my-6 max-w-screen-lg w-full">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Title
          </label>
          <input
            type="text"
            id="default-input"
            placeholder="Title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>
      </div>
      <TextEditor
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
      <div className="flex justify-center mt-6">
        <button
          type="submit"
          onClick={sendrequest}
          className="items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
        >
          Publish post
        </button>
      </div>
    </div>
  );
};

function TextEditor({
  onChange,
}: {
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}) {
  return (
    <div className="flex justify-center">
      <textarea
        id="message"
        rows={4}
        className="max-w-screen-lg block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Write your thoughts here..."
        onChange={onChange}
      ></textarea>
    </div>
  );
}
