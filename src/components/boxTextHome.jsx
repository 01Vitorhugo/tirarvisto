import phone from "../assets/phone.webp"
import time from "../assets/time.webp"

export default function BoxTextHome() {

    return (
        <>
            <article className="w-full sm:h-86 bg-boxText pl-10 pr-10 max-[1018px]:flex max-[1018px]:flex-col  
         max-[1018px]:pr-5  max-[1018px]:pl-5 max-[1018px]:py-5
        md:h-100">
                <section className="w-full h-[50%]  flex items-center">
                    <div className=" w-[70%]">
                        <h1 className="text-[30px] md:text-[36px] xl:text-[56px]">CONSULTORIA COMPLETA PARA TIRAR SEU VISTO</h1>
                    </div>

                    <figure className=" w-[30%] flex justify-center">
                        <img src={phone} alt="" />
                    </figure>
                </section>


                <section className="w-[100%]  h-[50%]  flex justify-end items-center   ">
                    <article className="w-full h-full  flex items-center  max-[1018px]:pl-10 md:text-center">
                        <figure className=" w-[30%] flex justify-center">
                            <img src={time} alt="" />
                        </figure>

                        <div className=" w-[70%]">
                            <h1 className=" italic text-[30px] md:text-[36px] xl:text-[56px]">VOCÊ ESTA EM BOAS MÃOS!</h1>
                        </div>

                    </article>


                </section>


            </article>

        </>
    )
}