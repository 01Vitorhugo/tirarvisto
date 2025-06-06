import imageCarrousel from '../assets/imgRodaGigante.jpg';
import Tag from './tag';


export default function ImageHomeCarousel() {
    return (

        <section
            style={{ backgroundImage: `url(${imageCarrousel})`, backgroundSize: "cover" }}
            className="bg-no-repeat 
            w-[57%]
            h-[900px] rounded-xl mt-5 flex flex-col justify-between items-center
            max-[1018px]:w-[90%]  max-[1018px]:m-5 max-[1018px]:h-150 max-[1018px]:bg-center"
        >
            <article className=' h-11 p-5 flex  w-full justify-end'>
                <Tag label="Tirar meu visto agora!" />

            </article>

            <section className="w-full h-auto text-white relative pl-10  max-[1018px]:h-[30%]  max-[1018px]:pl-5">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#3a3a3a] to-[#232323] opacity-50 rounded-b-xl "></div>

                <div className="relative z-10  p-5 max-[1018px]:p-0 ">
                    <article className="w-3/5  max-[1018px]:w-[95%] ">
                        <h1 className="font-semibold text-3xl max-[1018px]:text-[24px]">Realize o seu sonho com</h1>
                        <h1 className="font-semibold text-3xl max-[1018px]:text-[24px]">a ajuda da Tirar Visto!</h1>
                    </article>

                    <article className="w-3/5  mt-4 max-[1018px]:text-[12px] max-[1018px]:w-[95%] max-[1018px]:mt-2 max-[1018px]:mb-2">
                        <p>Com um serviço profissional, você não terá dor de cabeça para todo o processo do visto e entrevistas no consulado.</p>
                    </article>
                </div>
            </section>
        </section>

    );
}

