import seta from '../assets/seta.png';

export default function Button({label  }) {
  return (
    <button className="bg-button h-10 w-auto flex items-center  rounded-full">
        {label && <p className='text-textWhite pl-4'>{label}</p>}
        <img src={seta} className='w-10'/>
     
    </button>
  );
}