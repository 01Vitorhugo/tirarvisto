import newYork from "../assets/imgNovaYork.jpg"
import indonesia from "../assets/imgIndonesia.jpg"
import grecia from "../assets/imgGrecia.jpg"
import paris from "../assets/imgParis.jpg"
import africa from "../assets/imgAfrica.jpg"
import india from "../assets/imgIndia.jpg"
import TagImage from "./tagImage"

export default function SectionBoxTrip() {

    return (
        <>
            <section className="w-full h-auto flex flex-col items-center gap-5 mt-5">
                <div className="w-full flex justify-center gap-5 max-[1018px]:flex max-[1018px]:flex-col max-[1018px]:items-center">

                    <figure className="w-70 h-70 relative lg:mt-10 lg:h-60">
                        <img src={indonesia} alt="Imagem Bali, Indonésia" className="h-full w-full rounded-4xl" />
                        <TagImage label="Bali, Indonésia" />
                    </figure>

                    <figure className="w-70 h-70 relative">
                        <img src={newYork} alt="Imagem Nova York, Estados Unidos" className="h-full w-full rounded-4xl" />
                        <TagImage label="Nova York, Estados Unidos" />
                    </figure>

                    <figure className="w-70 h-70 relative lg:mt-10 lg:h-60">
                        <img src={grecia} alt="Imagem Santorini, Grécia" className="h-full w-full rounded-4xl" />
                        <TagImage label="Santorini, Grécia" />
                    </figure>
                </div>
            </section>


            <section className="w-full h-auto flex flex-col items-center gap-5 mt-5 ">
                <div className="w-full flex justify-center gap-5 max-[1018px]:flex max-[1018px]:flex-col max-[1018px]:items-center">
                    <figure className="w-70 h-60 relative max-[1018px]:h-70 ">
                        <img src={paris} alt="Imagem Paris, França" className="h-full w-full rounded-4xl" />
                        <TagImage label="Paris, França" />
                    </figure>


                    <figure className="w-70 h-70 relative">
                        <img src={africa} alt="Imagem Cidade do Cabo, África do Sul" className="h-full w-full rounded-4xl" />
                        <TagImage label="Cidade do Cabo, África do Sul" />
                    </figure>

                    <figure className="w-70 h-60 relative max-[1018px]:h-70">
                        <img src={india} alt="Imagem Mumbai, Índia" className="h-full w-full rounded-4xl" />
                        <TagImage label="Mumbai, Índia" />
                    </figure>
                </div>
            </section>
        </>
    )
}