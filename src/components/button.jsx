import seta from '../assets/seta.png';

export default function Button({ label, showImage = true }) {
  return (
    <button className="bg-button h-10 w-auto flex items-center rounded-full">
      {label && <p className="text-textWhite p-4">{label}</p>}
      {showImage && <img src={seta} className="w-10" />}
    </button>
  );
}
