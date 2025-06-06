import Tag from "./tag";
import familia from "../assets/imgFamilia.jpg";
import ver from "../assets/verMais.png";


export default function BoxProcess() {

    return (
        <main className="h-auto p-15 mt-15">
            <Tag label="Veja como funciona" />

            <section className="w-full h-auto  mt-10 flex">
                <article className="h-auto w-[35%]">
                    <h1 className="text-[56px] ">SUA TRANQUILIDADE NÃO TEM PREÇO!</h1>
                </article>

                <article className="h-37 w-[65%] flex items-center text-Pclara">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </article>

            </section>

            <section className=" h-auto w-full mt-10 flex">
                <figure className="h-[444px] w-[40%] ">
                    <img src={familia} alt="familia" className="h-full w-full rounded-xl" />
                </figure>

                <aside className="w-[50%] h-auto pl-10">
                    <article className="border-b-1 border-Pclara  h-[25%]">
                        <h1 className="text-[44px] mt-10">Etapa Inicial</h1>
                        <p className="text-Pclara mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    </article>

                    <article className="border-b-1 border-Pclara h-[25%]">
                        <h1 className="text-[44px] mt-10">Processo de Entrevista</h1>
                        <p className="flex items-center gap-3"><img src={ver} alt="" className="h-[20px] " /> Leia mais</p>
                    </article>

                    <article className="border-b-1 border-Pclara  h-[25%]">
                        <h1 className="text-[44px] mt-10">Entrega de Documentos</h1>
                        <p className="flex items-center gap-3"><img src={ver} alt="" className="h-[20px] " /> Leia mais</p>
                    </article>
                </aside>

            </section>

        </main>
    );
}