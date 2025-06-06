import Button from "./button";
import SectionBoxTrip from "./sectionBoxTrip";
import Tag from "./tag";


export default function Destination() {

    return (
        <main className="h-auto mt-10 flex flex-col items-center justify-center ">
            <section className="w-full flex justify-between">
                <div class="relative w-[40%] h-22 border-[#8D8D8D]/50  border-b-1  rounded-br-[100px] ]
                max-[1018px]:rounded-br-[50px]
                max-[1018px]:w-[30%] ">
                </div>
                <div class="relative w-[40%] h-22 border-[#8D8D8D]/50  border-b-1  rounded-bl-[100px]
                max-[1018px]:rounded-bl-[50px]
                max-[1018px]:w-[30%] "></div>
            </section>

            <section className="w-[70%] h-auto flex flex-col items-center max-[1018px]:w-[90%] ">
                <Tag label="Top Destinos" />
                <h1 className="text-[56px] max-[1018px]:text-[30px] max-[1018px]:text-center">Destinos mais procurados </h1>
                <p className="text-Pclara max-[1018px]:text-center max-[1018px]:pt-2">Confira os destinos mais procurados por nossos clientes nos últimos meses, qual seria o seu novo destino?</p>
            </section>

            <section className="w-full flex justify-between mt-10">
                <div class="relative w-[20%] h-30 border-[#8D8D8D]/50  border-t-1  rounded-tr-[400px] max-[1018px]:w-[15%] "></div>
                <div class="relative w-[20%] h-22 justify-center items-center flex max-[1018px]:w-[50%] ">
                    <Button label="Conheça mais" showImage={false} />
                </div>
                <div class="relative w-[20%] h-30 border-[#8D8D8D]/50  border-t-1  rounded-tl-[400px] max-[1018px]:w-[15%] "></div>
            </section>

            <SectionBoxTrip />


        </main>
    )
}