export default function SkeletonLoading() {
  return (
    <div className="m-3 bg-white dark:bg-black dark:text-white dark:border-2 dark:border-white shadow-lg rounded-xl">
      <div className="shadow-lg rounded-xl p-5 ">
        <div className="flex gap-2 items-center mb-5">
          <i className="animate-pulse bg-slate-200 rounded-full p-2 flex justify-center items-center w-10 h-10 text"></i>
          <div className="w-32 h-4 animate-pulse bg-slate-200"></div>
        </div>
        <div className="pl-12">
          <div className="w-full h-5 animate-pulse bg-slate-200 rounded-sm"></div>
          <div className="w-full h-32 animate-pulse bg-slate-200 rounded-sm mt-5"></div>
        </div>
        <div className="flex justify-end gap-4 mt-5">
          <div className="w-5 h-5 animate-pulse bg-slate-200 rounded-sm"></div>
          <div className="w-5 h-5 animate-pulse bg-slate-200 rounded-sm"></div>
        </div>
      </div>
    </div>
  );
}
