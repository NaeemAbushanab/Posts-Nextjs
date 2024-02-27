import React from "react";

export default function SkeletonForm() {
  return (
    <div>
      <div className="border-2 border-gray-200 p-5 rounded-lg shadow-lg flex flex-col gap-y-10 ">
        <div className="input grid grid-cols-12">
          <span className="flex items-center bg-slate-300 w-3/5 h-7 rounded-lg animate-pulse"></span>
          <span className="col-span-11 border-2 rounded-lg shadow-lg h-7 inline-block bg-slate-200 px-3 py-1 dark:border-0 animate-pulse"></span>
        </div>
        <div className="input grid grid-cols-12">
          <span className="flex items-center bg-slate-300 w-3/5 h-7 rounded-lg animate-pulse"></span>
          <span className="col-span-11 border-2 rounded-lg shadow-lg h-7 inline-block bg-slate-200 px-3 py-1 dark:border-0 animate-pulse"></span>
        </div>
        <div className="input grid grid-cols-12">
          <span className="flex items-center bg-slate-300 w-3/5 h-7 rounded-lg animate-pulse"></span>
          <span className="col-span-11 border-2 rounded-lg shadow-lg h-7 inline-block bg-slate-200 px-3 py-1 dark:border-0 animate-pulse"></span>
        </div>
        <div className="input grid grid-cols-12">
          <span className="flex items-center bg-slate-300 w-3/5 h-7 rounded-lg animate-pulse"></span>
          <span className="col-span-11 border-2 rounded-lg shadow-lg h-7 inline-block bg-slate-200 px-3 py-1 dark:border-0 animate-pulse"></span>
        </div>
        <div className="flex justify-between">
          <div className="h-10 w-24 bg-slate-300 rounded-lg animate-pulse"></div>
          <div className="h-10 w-24 bg-slate-300 rounded-lg animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
