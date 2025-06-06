import imageCarrousel from '../assets/imgRodaGigante.jpg';
import Tag from './tag';


export default function ImageHomeCarousel() {
    return (

        <section
            style={{ backgroundImage: `url(${imageCarrousel})`, backgroundSize: "cover" }}
            className="bg-no-repeat 
            w-[57%]
            h-[900px] rounded-xl mt-5 flex flex-col justify-between items-center"
        >
            <article className=' h-11 p-5 flex  w-full justify-end'>
                <Tag label="Tirar meu visto agora!" />

            </article>

            <section className="w-full h-auto text-white relative pl-10">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#3a3a3a] to-[#232323] opacity-50 rounded-b-xl"></div>

                <div className="relative z-10  p-5">
                    <article className="w-3/5  ">
                        <h1 className="font-semibold text-3xl">Realize o seu sonho com</h1>
                        <h1 className="font-semibold text-3xl">a ajuda da Tirar Visto!</h1>
                    </article>

                    <article className="w-3/5  mt-4">
                        <p>Com um serviço profissional, você não terá dor de cabeça para todo o processo do visto e entrevistas no consulado.</p>
                    </article>
                </div>
            </section>
        </section>

    );
}

