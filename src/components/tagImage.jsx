export default function TagImage({ label }) {
  return (
    <div className="bg-white/15 backdrop-blur-md px-4 py-2 rounded-full h-[41px] inline-flex items-center justify-center absolute bottom-4 left-1/2 translate-x-[-50%]">
      <p className="font-semibold text-white whitespace-nowrap">{label}</p>
    </div>
  );
}