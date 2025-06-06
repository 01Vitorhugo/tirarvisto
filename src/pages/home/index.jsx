import Button from "../../components/button";
import Navbar from "../../components/navbar";
import bruna from '../../assets/imgBruna.jpg';
import ImageHomeCarousel from "../../components/imageHomecareousel";
import BoxTextHome from "../../components/boxTextHome";
import BoxProcess from "../../components/boxProcess";
import Destination from "../../components/destination";
import PackTrip from "../../components/packTrip";
import Footer from "../../components/footer";


export default function Home() {

  return (
    <>

      <main className="flex max-[1018px]:flex-col w-[100%]">

        {/* Mexzendo */}
        <section className="pl-15 h-auto w-full md:w-2/5 max-[1018px]:pr-5 max-[1018px]:pl-5 ">
          <section className="h-auto flex flex-col md:flex-row">
            <Navbar />
            <article className="mt-10 w-full text-[32px] md:text-[58px]">
              <h1 className="text-left ">Tire seu Visto conosco e não tenha nenhuma surpresa negativa!</h1>
            </article>
          </section>

          <section className="h-auto flex flex-col md:flex-row border-t-2 border-border  max-[1018px]:pt-5 max-[1018px]:mt-10   pt-15">
            <article className="w-full md:w-[337px] text-Pclara">
              <p>Com uma equipe altamente treinada, nós temos todos os procedimentos para que seu processo seja o mais tranquilo e rápido.</p>
              <p className="mb-10">Uma consultoria completa para você e sua família não ter nenhuma preocupação na sua viagem.</p>
              <Button label="Saiba mais" />
            </article>

            <figure className="w-full md:w-48 mt-10 md:mt-23 ml-0 md:ml-10">
              <img src={bruna} alt="" className="rounded-xl" />
            </figure>
            <section className="flex  max-[1018px]:justify-between ">
              <article className="pt-3">
                <p className="font-semibold">Conheça a Bruna</p>
                <p className="text-Pclara text-[12px]">Ver vídeo</p>
              </article>

              <aside className=" ml-5 mt-4 max-[1018px]:mt-3 ">
                <Button />
              </aside>
            </section>
          </section>
          <section className="w-full h-25 flex justify-between max-[1018px]:mt-5 ">

            <div className="w-[30%] h-full flex flex-col border-r-1  border-Pclara max-[1018px]:text-[12px] ">
              <h1 className="text-[44px]">509</h1>
              <p className="text-Pclara">Vistos Tirados</p>
            </div>

            <div className="w-[30%] h-full flex flex-col border-r-1 border-Pclara max-[1018px]:text-[12px]">
              <h1 className="text-[44px]">602</h1>
              <p className="text-Pclara">Passaportes Tirados</p>
            </div>

            <div className="w-[30%] h-full flex flex-col max-[1018px]:text-[12px]">
              <h1 className="text-[44px]">634</h1>
              <p className="text-Pclara">Famílias Felizes</p>
            </div>

          </section>
        </section>
        {/* Mexzendo */}


        <ImageHomeCarousel />
      </main>

      <section>
        <BoxTextHome />
      </section>


      <BoxProcess />

      <Destination />

       <PackTrip />

      <Footer />   

    </>


  );
}