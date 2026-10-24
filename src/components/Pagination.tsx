type Props = {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const Pagination = ({ page, totalPages, onPageChange }: Props) => {
const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <div className="mt-4 flex flex-wrap items-center justify-center gap-2 pb-8">
      <button
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
        className="rounded border border-line bg-white px-4 py-2 transition hover:bg-main hover:text-white disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-white disabled:hover:text-heading"
      >
        Previous
      </button>
      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onPageChange(p)}
          className={`rounded border px-4 py-2 transition ${
            p === page
              ? "border-main bg-main text-white"
              : "border-line bg-white hover:bg-main hover:text-white"
          }`}
        >
          {p}
        </button>
      ))}{" "}
      <button
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
        className="rounded border border-line bg-white px-4 py-2 transition hover:bg-main hover:text-white disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-white disabled:hover:text-heading"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
