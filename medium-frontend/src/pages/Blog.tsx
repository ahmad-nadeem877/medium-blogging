import { useParams } from "react-router-dom";
import { useBlog } from "../hooks";
import { BlogDetails } from "../components/BlogDetails";
import { Spinner } from "../components/Spinner";
import { AppBar } from "../components/AppBar";

const Blog = () => {
  let { id } = useParams();
  const { blog, loading } = useBlog({
    id: id || "",
  });
  if (loading) {
    return (
      <div>
        <AppBar />
        <div className="h-screen flex flex-col justify-center">
          <Spinner />
        </div>
      </div>
    );
  }
  return (
    <div>
      <BlogDetails blog={blog} />
    </div>
  );
};

export default Blog;
