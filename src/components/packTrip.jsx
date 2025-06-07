import Tag from "./tag";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import CardTrip from "./cardTrip";

import passaporte from "../assets/imgPassaporte.jpg";
import passaporteVisto from "../assets/imgPassaporte+Visto.jpg";
import consultoria from "../assets/imgConsultoria.jpg";

export default function PackTrip() {
    const [sliderRef, sliderInstance] = useKeenSlider({
  loop: true,
  mode: "free",
  breakpoints: {
    "(min-width: 640px)": { slides: { perView: 1, spacing: 15, width: 300 } },
    "(min-width: 1000px)": { slides: { perView: 2, spacing: 20, width: 400 } },
    "(min-width: 1420px)": { slides: { perView: 3, spacing: 20, width: 42 } },
  },
});


    const trips = [
        { image: passaporte, package: "Basic", title: "Passaporte", service: "On-line", time: "45 dias", buy: "R$ 890,00" },
        { image: passaporteVisto, package: "Basic", title: "Passaporte + Visto", service: "On-line + Presencial", time: "25 dias", buy: "R$ 1.290,00" },
        { image: consultoria, package: "Basic", title: "Consultoria Completa", service: "Presencial Completo", time: "10 dias", buy: "R$ 1.890,00" },
    ];

    return (
        <section className="w-full h-auto mt-15 p-15 max-[1018px]:p-5">
            <Tag label="Pacotes" />

            <aside className="flex h-auto">
                <article className="w-3/5">
                    <h1 className="text-[56px] max-[1018px]:text-[30px]">Confira nossos pacotes</h1>
                </article>

                <div className="flex gap-4 w-2/5 justify-end">
                    <button className="hover:bg-button hover:text-white border-button border w-12 h-12 rounded-full flex items-center justify-center shadow-lg cursor-pointer" onClick={() => sliderInstance.current?.prev()}>
                        <svg
                            className="w-6 h-6 transition-colors duration-200 hover:stroke-hoverSvgColor"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M20 12H4M4 12L10 6M4 12L10 18"
                                className="stroke-current"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                    <button className="hover:bg-button hover:text-white border-button border w-12 h-12 rounded-full flex items-center justify-center shadow-lg cursor-pointer" onClick={() => sliderInstance.current?.next()}>
                        <svg
                            className="w-6 h-6 transition-colors duration-200 hover:stroke-hoverSvgColor rotate-180"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            
                        >
                            <path
                                d="M20 12H4M4 12L10 6M4 12L10 18"
                                className="stroke-current"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"

                            />
                        </svg>
                    </button>
                </div>
            </aside>

            <div className="relative mt-10">
                <div ref={sliderRef} className="keen-slider">
                    <CardTrip trips={trips} />
                </div>
            </div>
        </section>
    );
}