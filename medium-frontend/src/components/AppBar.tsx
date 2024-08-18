import { Link } from "react-router-dom";
import { Avatar } from "./BlogCard";

export const AppBar = () => {
  return (
    <div className="flex justify-between px-20 py-5 border-b">
      <Link to={"/blogs"}>
        <div className="font-bold text-lg"> Medium </div>
      </Link>
      <div className="flex items-center">
        <Link to={"/create-blog"}>
          <button
            type="button"
            className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-3 text-center "
          >
            Create Blog
          </button>{" "}
        </Link>
        <Avatar authorName="Ahmed Nadeem" />
      </div>
    </div>
  );
};
