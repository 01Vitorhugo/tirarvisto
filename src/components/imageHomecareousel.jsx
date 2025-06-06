import imageCarrousel from '../assets/imgRodaGigante.jpg';
import Tag from './tag';


export default function ImageHomeCarousel() {
    return (

        <section
            style={{ backgroundImage: `url(${imageCarrousel})`, backgroundSize: "cover" }}
            className="bg-no-repeat 
            h-[900px] rounded-xl mt-5 flex flex-col justify-between items-center
            w-[100%] max-[1018px]:h-150 max-[1018px]:bg-center 
            lg:h-[800px]
            "
        >
            <article className=' h-11 p-5 flex  w-full justify-end'>
                <Tag label="Tirar meu visto agora!" />

            </article>

            <section className="w-full h-auto text-white relative pl-10  max-[1018px]:h-[30%]  max-[1018px]:pl-5 lg:pl-2">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#3a3a3a] to-[#232323] opacity-50 rounded-b-xl "></div>

                <div className="relative z-10  p-5  max-[1018px]:p-0 ">
                    <article className="w-3/5  max-[1018px]:w-[95%] lg:w-full">
                        <h1 className="font-semibold text-3xl text-[24px] md:text-[38px] ">Realize o seu sonho com</h1>
                        <h1 className="font-semibold text-3xl text-[24px] md:text-[38px]">a ajuda da Tirar Visto!</h1>
                    </article>

                    <article className=" mt-4 text-[12px] w-[95%]  mb-2 md:text-[16px]">
                        <p>Com um serviço profissional, você não terá dor de cabeça para todo o processo do visto e entrevistas no consulado.</p>
                    </article>
                </div>
            </section>
        </section>

    );
}

