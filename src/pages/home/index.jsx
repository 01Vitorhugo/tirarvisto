import Button from "../../components/button";
import Navbar from "../../components/navbar";
import bruna from '../../assets/imgBruna.jpg';
import ImageHomeCarousel from "../../components/imageHomecareousel";
import BoxTextHome from "../../components/boxTextHome";
import BoxProcess from "../../components/boxProcess";
import Destination from "../../components/destination";
import PackTrip from "../../components/packTrip";
import Footer from "../../components/footer";
import { useState, useEffect } from "react";


export default function Home() {
  const [numVistos, setNumVistos] = useState(250);
  const [numPassaportes, setNumPassaportes] = useState(350);
  const [numFamilias, setNumFamilias] = useState(350);

  const limiteVistos = 509;
  const limitePassaportes = 602;
  const limiteFamilias = 634;

  useEffect(() => {
    const intervalVistos = setInterval(() => {
      setNumVistos((prev) => (prev < limiteVistos ? prev + 1 : prev));
    }, 10);

    return () => clearInterval(intervalVistos);
  }, []);

  useEffect(() => {
    const intervalPassaportes = setInterval(() => {
      setNumPassaportes((prev) => (prev < limitePassaportes ? prev + 1 : prev));
    }, 10);

    return () => clearInterval(intervalPassaportes);
  }, []);

  useEffect(() => {
    const intervalFamilias = setInterval(() => {
      setNumFamilias((prev) => (prev < limiteFamilias ? prev + 1 : prev));
    }, 10);

    return () => clearInterval(intervalFamilias);
  }, []);


  return (
    <>

      <main className="flex max-[1018px]:flex-col w-[100%] pl-5 pr-5 lg:gap-10 xl:h-lvh  md:pl-10 md:pr-10">

        {/* Mexzendo */}
        <section className=" h-auto w-full">
          <section className="h-auto flex flex-col lg:w-[100%] ">
            <Navbar />
            <article className="mt-10 w-full text-[32px] md:text-[38px] lg:text-[58px] mb-10">
              <h1 className="text-left ">Tire seu Visto conosco e não tenha nenhuma surpresa negativa!</h1>
            </article>
          </section>

          <section className="h-auto flex max-[1199px]:flex-col border-t-2 border-border md:pt-5 md:mt-10 pt-10 gap-5 ">
            <article className="w-full text-Pclara min-[1200px]:w-[70%]">
              <p>Com uma equipe altamente treinada, nós temos todos os procedimentos para que seu processo seja o mais tranquilo e rápido.</p>
              <p className="mb-10 ">Uma consultoria completa para você e sua família não ter nenhuma preocupação na sua viagem.</p>
              <Button label="Saiba mais" />
            </article>

            <aside className="mt-10 min-[1200px]:w-[30%]">
              <figure className="w-full ">
                <img src={bruna} alt="" className="rounded-xl w-full" />
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

            </aside>

          </section>
          <section className="w-full h-25 flex justify-between max-[1018px]:mt-5 ">

            <div className="w-[30%] h-full flex flex-col border-r-1  border-Pclara max-[1018px]:text-[12px] ">
              <h1 className="text-[44px]">{numVistos}</h1>
              <p className="text-Pclara">Vistos Tirados</p>
            </div>

            <div className="w-[30%] h-full flex flex-col border-r-1 border-Pclara max-[1018px]:text-[12px]">
              <h1 className="text-[44px]">{numPassaportes}</h1>
              <p className="text-Pclara">Passaportes Tirados</p>
            </div>

            <div className="w-[30%] h-full flex flex-col max-[1018px]:text-[12px]">
              <h1 className="text-[44px]">{numFamilias}</h1>
              <p className="text-Pclara">Famílias Felizes</p>
            </div>

          </section>
        </section>
        {/* Mexzendo */}


        <ImageHomeCarousel />
      </main>

      <section className="mt-5">
        <BoxTextHome />
      </section>


      <BoxProcess />

      <Destination />

      <PackTrip />

      <Footer />

    </>


  );
}