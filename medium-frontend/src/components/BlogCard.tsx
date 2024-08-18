import { Link } from "react-router-dom";

interface BlogCardProps {
  key: string;
  id: string;
  authorName: string;
  title: string;
  content: string;
  datePublished: string;
}
export const Blogcard = ({
  id,
  authorName,
  title,
  content,
  datePublished,
}: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="p-5 border-b-2 border-slate-200 w-screen max-w-screen-lg cursor-pointer">
        <div className="flex items-center ">
          <div>
            {" "}
            <Avatar authorName={authorName} />
          </div>
          <div className="pl-1 text-sm font-light">{authorName} </div>
          <div className="pl-2 text-sm text-slate-500">{datePublished}</div>
        </div>
        <div className="font-bold text-xl mt-2"> {title}</div>
        <div className="font-light text-md">
          {" "}
          {content.substring(0, 100) + "..."}
        </div>
        <div className="font-normal text-sm text-slate-500 mt-5">
          {" "}
          {Math.abs(Math.ceil(content.length) / 100)} minutes{" "}
        </div>
      </div>
    </Link>
  );
};

export function Avatar({ authorName }: { authorName: string }) {
  return (
    <div>
      <div
        className={`relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}
      >
        <span className="text-sm font-normal text-gray-600 dark:text-gray-300">
          {authorName[0]}
        </span>
      </div>
    </div>
  );
}
