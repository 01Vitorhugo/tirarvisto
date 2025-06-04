import Button from "../../components/button";
import Navbar from "../../components/navbar";
import bruna from '../../assets/imgBruna.jpg';
import ImageHomeCarousel from "../../components/imageHomecareousel";
import BoxTextHome from "../../components/boxTextHome";
import BoxProcess from "../../components/boxProcess";


export default function Home() {

  return (
    <>

      <main className="flex h-lvh
">

        <section className="pl-15 pr-15  h-auto w-2/5">

          <section className="h-[440px]  ">
            <Navbar />

            <article className="mt-10 h-61 w-full text-[58px] ">
              <h1>Tire seu Visto conosco e não tenha nenhuma surpresa negativa!</h1>
            </article>
          </section>

          <section className="h-91  flex w-[95%] border-t-2 border-border pt-15">
            <article className="w-[337px] h-auto text-Pclara">
              <p>Com uma equipe altamente treinada, nós temos todos os procedimentos para que seu processo seja o mais tranquilo e rápido.</p>
              <p className="mb-10">
                Uma consultoria completa para você e sua família não ter nenhuma preocupação na sua viagem.
              </p>
              <Button label='Saiba mais' />
            </article>

            <figure className=" h-61 w-48 mt-23 ml-10 ">
              <img src={bruna} alt="" className="rounded-xl" />

              <section className="flex">
                <article className="pt-3">
                  <p className="font-semibold">Conheça a Bruna</p>
                  <p className="text-Pclara text-[12px]">Ver vídeo</p>
                </article>

                <aside className=" ml-5 mt-4">
                  <Button />
                </aside>
              </section>

            </figure>
          </section>

          <section className="w-full h-25 flex justify-between ">

            <div className="w-[30%] h-full flex flex-col border-r-1  border-Pclara">
              <h1 className="text-[44px]">509</h1>
              <p className="text-Pclara">Vistos Tirados</p>

            </div>

            <div className="w-[30%] h-full flex flex-col border-r-1 border-Pclara">
              <h1 className="text-[44px]">602</h1>
              <p className="text-Pclara">Passaportes Tirados</p>

            </div>

            <div className="w-[30%] h-full flex flex-col">
              <h1 className="text-[44px]">634</h1>
              <p className="text-Pclara">Famílias Felizes</p>

            </div>

          </section>

        </section>


        <ImageHomeCarousel />
      </main>

      <section>
        <BoxTextHome />
      </section>


      <BoxProcess/>

    </>


  );
}