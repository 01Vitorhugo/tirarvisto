import Button from "./button";
const CardTrip = ({ trips }) => (
    <>
        {trips.map((trip, index) => (
            <div key={index}
                className="keen-slider__slide p-4 rounded-xl border-2 border-border overflow-hidden flex flex-col ">

                <figure className="w-full h-75  flex items-center justify-center mb-4 ">
                    <img src={trip.image} alt={trip.title} className="object-cover rounded-xl h-full w-full" />
                </figure>

                <div className=" w-auto h-auto">
                    {trip.package === "Basic" ? (
                        <section className="flex gap-[16px]">
                            <span className="border-text border-1 rounded-full  py-[10px] pl-[20px] pr-[20px] h-8  flex justify-center items-center">
                                <p className="font-semibold">{trip.package}</p>
                            </span>
                            <span className="border-Pclara border-1 rounded-full py-[10px] pl-[20px] pr-[20px] h-8 flex justify-center items-center">
                                <p className="font-semibold text-Pclara">Premium</p>
                            </span>
                        </section>


                    ) : (
                        <section className="flex gap-[16px]">
                            <span className="border-text border-1 rounded-full  py-[10px] pl-[20px] pr-[20px] h-8  flex justify-center items-center">
                                <p className="font-semibold">Premium</p>
                            </span>
                            <span className="border-Pclara border-1 rounded-full py-[10px] pl-[20px] pr-[20px] h-8 flex justify-center items-center">
                                <p className="font-semibold text-Pclara">Basic</p>
                            </span>
                        </section>
                    )}

                </div>

                <article className="">
                    <h1 className="text-[28px] font-semibold mt-4 text-black">{trip.title}</h1>
                </article>

                <article className="flex pb-5 border-b-2 border-border mt-2">
                    <div className="w-[50%] ">
                        <p>Atendimento</p>
                        <p className="text-Pclara">{trip.service}</p>

                    </div>

                    <div className="w-[50%]">
                        {trip.time === "10 dias" ? (
                            <>
                                <p>Duration</p>
                                <p className="text-Pclara">{trip.time}</p>
                            </>
                        ) : (
                            <>
                                <p>Tempo</p>
                                <p className="text-Pclara">{trip.time}</p>
                            </>
                        )}

                    </div>


                </article>

                <article className="  mt-5 flex">
                    <div className="w-[50%] ">
                        <p className="text-Pclara">A partir de</p>
                        <h1 className=" font-semibold text-[32px]">{trip.buy}</h1>
                    </div>
                    <div className="w-[50%]">
                        <Button label="Contratar" showImage={false} />

                    </div>

                    

                </article>

            </div>
        ))}
    </>
);

export default CardTrip;
