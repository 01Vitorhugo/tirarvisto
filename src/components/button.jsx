export default function Button({ label, showImage = true }) {
  return (
    <button className="bg-button h-14 w-auto flex items-center rounded-full py-[10px] pl-[20px] pr-[20px] gap-2 cursor-pointer 
      hover:bg-transparent border border-button text-white
      hover:text-button"
    >
      {label && <p className=" pl-2 pr-2 font-semibold">{label}</p>}
      {showImage && (
        <svg
          className="w-6 h-6 transition-colors duration-200 hover:stroke-hoverSvgColor"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          transform="rotate(180)"
        >
          <path
            d="M20 12H4M4 12L10 6M4 12L10 18"
            className="stroke-current"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}