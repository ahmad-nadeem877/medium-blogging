export const Skeleton = () => {
  return (
    <div role="status" className="animate-pulse">
      <div className="p-5 border-b-2 border-slate-200 w-screen max-w-screen-lg cursor-pointer">
        <div className="flex items-center ">
          <div>
            {" "}
            <div className="h-8 w-8 bg-gray-200 rounded-full dark:bg-gray-700 mb-4"></div>
          </div>
          <div className="pl-1 text-sm font-light">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          </div>
          <div className="pl-2 text-sm text-slate-500">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          </div>
        </div>
        <div className="font-bold text-xl mt-2">
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        </div>
        <div className="font-light text-md">
          {" "}
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
        </div>
        <div className="font-normal text-sm text-slate-500 mt-5">
          {" "}
          <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
        </div>
      </div>
      {/* <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
  <div className="h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
  <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
  <div className="h-2 bg-gray-200 rounded-full max-w-[330px] mb-2.5"></div>
  <div className="h-2 bg-gray-200 rounded-full max-w-[300px] mb-2.5"></div>
  <div className="h-2 bg-gray-200 rounded-full max-w-[360px]"></div>
  <span className="sr-only">Loading...</span> */}
    </div>
  );
};

function Circle() {}
