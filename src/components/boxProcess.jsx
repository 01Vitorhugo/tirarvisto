import Tag from "./tag";
import familia from "../assets/imgFamilia.jpg";
import ver from "../assets/verMais.png";


export default function BoxProcess() {

    return (
        <main className="h-auto  mt-15 pl-10 pr-10 ">
            <Tag label="Veja como funciona" />

            <section className="w-full h-auto  mt-10 flex max-[1018px]:flex-col lg:gap-5">
                <article className="h-auto w-[35%] max-[1018px]:w-[100%] lg:w-[40%]">
                    <h1 className="text-[60px] ">Sua tranquilidade não tem preço!</h1>
                </article>

                <article className="h-37 w-[65%] flex items-center text-Pclara max-[1018px]:h-auto max-[1018px]:w-full max-[1018px]:mt-5 max-[1018px]:mb-5 lg:w-[50%]">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </article>

            </section>

            <section className=" h-auto w-full mt-10 flex max-[1018px]:flex-col xl:flex-wrap">
                <figure className="h-[304px] w-[40%] max-[1018px]:w-full  md:h-[360px] xl:h-[460px]">
                    <img src={familia} alt="familia" className="h-full w-full rounded-xl" />
                </figure>

                <aside className="w-[50%] h-auto pl-10 max-[1018px]:pl-0 max-[1018px]:w-full">
                    <article className="border-b-1 border-Pclara  h-[26%] ">
                        <h1 className="text-[44px] mt-10 max-[1018px]:text-[30px]">Etapa Inicial</h1>
                        <p className="text-Pclara mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    </article>

                    <article className="border-b-1 border-Pclara h-[26%]">
                        <h1 className="text-[44px] mt-10 max-[1018px]:text-[30px]">Processo de Entrevista</h1>
                        <p className="flex items-center gap-3"><img src={ver} alt="" className="h-[20px] " /> Leia mais</p>
                    </article>

                    <article className="border-b-1 border-Pclara  h-[26%]">
                        <h1 className="text-[44px] mt-10 max-[1018px]:text-[30px]">Entrega de Documentos</h1>
                        <p className="flex items-center gap-3"><img src={ver} alt="" className="h-[20px] " /> Leia mais</p>
                    </article>
                </aside>

            </section>

        </main>
    );
}