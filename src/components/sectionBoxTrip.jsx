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

            <section className="w-full h-auto flex justify-center items-center gap-5 relative">
                <figure className="w-70 h-70 pt-10 relative">
                    <img src={indonesia} alt="Imagem New York" className="h-full w-full rounded-4xl" />
                    <TagImage label="Bali, Indonesia"  />
                </figure>

                <figure className="w-70 h-70 relative ">
                    <img src={newYork} alt="Imagem New York" className="h-full w-full rounded-4xl" />
                     <TagImage label="Nova York, Estados Unidos"  />
                </figure>

                <figure className="w-70 h-70 pt-10 relative">
                    <img src={grecia} alt="Imagem New York" className="h-full w-full rounded-4xl" />
                    <TagImage label="Santorini, Grecia"  />
                </figure>
            </section>


            <section className="w-full h-auto flex justify-center items-center gap-5 mt-5  ">
                <figure className="w-70 h-60 mb-10  relative ">
                    <img src={paris} alt="Imagem New York" className="h-full w-full rounded-4xl" />
                    <TagImage label="Paris, França"  />
                   
                </figure>

                <figure className="w-70 h-70 relative">
                    <img src={africa} alt="Imagem New York" className="h-full w-full rounded-4xl" />
                    <TagImage label="Cidade do Cabo, Africa do Sul"  />
                </figure>

                <figure className="w-70 h-60 mb-10  relative">
                    <img src={india} alt="Imagem New York" className="h-full w-full rounded-4xl" />
                    <TagImage label="Mumbai, India"  />
                </figure>
            </section>
        </>
    )
}