import Button from "./button";
import SectionBoxTrip from "./sectionBoxTrip";
import Tag from "./tag";


export default function Destination() {

    return (
        <main className="h-auto mt-10 flex flex-col items-center justify-center ">
            <section className="w-full flex justify-between">
                <div class="relative w-[40%] h-22 border-[#8D8D8D]/50  border-b-1  rounded-br-[100px]"></div>
                <div class="relative w-[40%] h-22 border-[#8D8D8D]/50  border-b-1  rounded-bl-[100px]"></div>
            </section>

            <section className="w-[70%] h-auto flex flex-col items-center">
                <Tag label="Top Destinos" />
                <h1 className="text-[56px]">Destinos mais procurados </h1>
                <p className="text-Pclara">Confira os destinos mais procurados por nossos clientes nos últimos meses, qual seria o seu novo destino?</p>
            </section>

            <section className="w-full flex justify-between mt-10">
                <div class="relative w-[20%] h-30 border-[#8D8D8D]/50  border-t-1  rounded-tr-[400px]"></div>
                <div class="relative w-[20%] h-22 justify-center items-center flex">
                    <Button label="Conheça mais" showImage={false}/>
                </div>
                <div class="relative w-[20%] h-30 border-[#8D8D8D]/50  border-t-1  rounded-tl-[400px]"></div>
            </section>

            <SectionBoxTrip />


        </main>
    )
}