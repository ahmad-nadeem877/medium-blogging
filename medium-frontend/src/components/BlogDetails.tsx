import { Blog } from "../hooks";
import { AppBar } from "./AppBar";
import { Avatar } from "./BlogCard";

export const BlogDetails = ({ blog }: { blog: Blog }) => {
  return (
    <div>
      <AppBar />
      <div className=" grid grid-cols-12 px-20 pt-5">
        <div className="col-span-8">
          <div className="text-5xl font-bold">{blog.title}</div>
          <div className="pt-3 text-slate-500">
            {" "}
            Posted on {blog.datePublished || "Aug 17, 2024"}
          </div>
          <div className="pt-3"> {blog.content}</div>
        </div>
        <div className="col-span-4">
          <div>Author</div>
          <div className="flex items-center gap-3 mt-3">
            <Avatar authorName={blog.author.name || "Ahmed Nadeem"} />
            <div>
              <div className="font-xl font-bold">
                {blog.author.name || "Ahmed Nadeem"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
