import Link from "next/link";

const DirectToNextPage = ({ label, url }: {label: string, url: string}) => {
  return (
    <div className="w-full mt-2 md:mt-6 px-16 flex items-center justify-center">
      <Link
        href={url}
        className="flex gap-2 items-center text-lg hover:underline"
      >
        <p className="text-[16px] text-slate-300">{label}</p>
        <span>
          <i className="bi bi-arrow-right-circle-fill text-teal-400 text-2xl animate-pulse"></i>
        </span>
      </Link>
    </div>
  );
};

export default DirectToNextPage;
