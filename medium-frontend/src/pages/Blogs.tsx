import { AppBar } from "../components/AppBar";
import { Blogcard } from "../components/BlogCard";
import { Skeleton } from "../components/Skeleton";
import { useBlogs } from "../hooks";

interface Blog {
  id: string;
  title: string;
  content: string;
  datePublished: string;
  author: {
    name: string;
  };
}
const Blogs = () => {
  const { blogs, loading } = useBlogs();
  if (loading == true) {
    return (
      <div>
        <AppBar />
        <div className="flex justify-center">
          <div>
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div>
        <AppBar />
      </div>
      <div className="flex justify-center">
        <div>
          {blogs.map((blog: Blog) => (
            <Blogcard
              key={blog.id}
              id={blog.id}
              authorName={blog.author.name || "Ahmed nadeem"}
              title={blog.title}
              datePublished="16 Aug 2024"
              content={blog.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
