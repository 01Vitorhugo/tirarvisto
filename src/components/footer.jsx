import Button from "./button";

export default function Footer() {

    const year = new Date().getFullYear();

    return (
        <footer className="h-auto mt-20 flex flex-col items-center justify-center ">
            <section className="w-[90%] flex justify-between items-center h-83 max-[1018px]:flex-col">
                <article className="w-[50%] gap-3 max-[1018px]:w-full">
                    <h1 className=" text-[56px] max-[1018px]:text-[30px]">Está coma alguma dúvida?</h1>
                    <p className="text-Pclara mb-10">Entre em contato através do nosso canal direto ao cliente através do botão abaixo</p>

                    <Button label="Central de Atendimento" showImage={false} />

                </article>

                <article className="w-[40%] flex justify-between items-center  border-b-1 border-text h-17t max-[1018px]:w-full">
                    <h2 className="text-[40px] font-0 max-[1018px]:text-[24px]">Receba novidades</h2>
                    <svg viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40" className="max-[1018px]:h-[35px]">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9 6.75C8.58579 6.75 8.25 6.41421 8.25 6C8.25 5.58579 8.58579 5.25 9 5.25H18C18.4142 5.25 18.75 5.58579 18.75 6V15C18.75 15.4142 18.4142 15.75 18 15.75C17.5858 15.75 17.25 15.4142 17.25 15V7.81066L6.53033 18.5303C6.23744 18.8232 5.76256 18.8232 5.46967 18.5303C5.17678 18.2374 5.17678 17.7626 5.46967 17.4697L16.1893 6.75H9Z" fill="#000">
                            </path>
                        </g>
                    </svg>


                </article>

            </section>


            <section className="flex h-40 w-[95%] max-[1018px]:flex-col flex-wrap max-[1018px]:h-auto   max-[1018px]:w-[90%] ">

                <article className="w-[50%] flex flex-col justify-end gap-5  max-[1018px]:w-full  max-[1018px]:mt-10">

                    <p className="font-semibold">Siga em nossa redes:</p>

                    <section className="flex gap-5 flex-wrap  max-[1018px]:w-full">
                        <button className="w-auto flex justify-center items-center pl-[20px] pr-[20px] h-10 border-1 rounded-full cursor-pointer
                        hover:bg-button hover:text-white">
                            <p className="font-semibold">Instagram</p>
                        </button>

                        <button className="w-auto flex justify-center items-center pl-[20px] pr-[20px] h-10 border-1 rounded-full cursor-pointer
                        hover:bg-button hover:text-white">
                            <p className="font-semibold">X</p>
                        </button>

                        <button className="w-auto flex justify-center items-center pl-[20px] pr-[20px] h-10 border-1 rounded-full cursor-pointer
                        hover:bg-button hover:text-white">
                            <p className="font-semibold">Facebook</p>
                        </button>

                        <button className="w-auto flex justify-center items-center pl-[20px] pr-[20px] h-10 border-1 rounded-full cursor-pointer
                        hover:bg-button hover:text-white">
                            <p className="font-semibold">Youtube</p>
                        </button>


                    </section>

                </article>

                <article className=" w-[50%] flex justify-between   max-[1018px]:w-full  max-[1018px]:mt-10 ">
                    <section className="w-[30%] h-full ">
                        <ul className=" h-full flex flex-col justify-between  max-[1018px]:gap-1">
                            <li className="font-medium">Empresa</li>
                            <li className="text-Pclara">Home</li>
                            <li className="text-Pclara">Quem somos</li>
                            <li className="text-Pclara">Serviços</li>
                            <li className="text-Pclara">Contato</li>
                        </ul>

                    </section>

                    <section className="w-[30%] h-full ">
                        <ul className=" h-full flex flex-col justify-between  max-[1018px]:gap-1">
                            <li className="font-medium">Novidade</li>
                            <li className="text-Pclara">Passaporte</li>
                            <li className="text-Pclara">Visto</li>
                            <li className="text-Pclara">Entrevista</li>
                            <li className="text-Pclara">Polícia Federal</li>
                        </ul>


                    </section>

                    <section className="w-[30%] h-full ">
                        <ul className=" h-full flex flex-col justify-around  max-[1018px]:gap-1">
                            <li className="font-medium">Suporte</li>
                            <li className="text-Pclara">FAQ</li>
                            <li className="text-Pclara">Contato</li>
                            <li className="text-Pclara">Dúvidas Frequentes</li>
                        </ul>

                    </section>

                </article>
            </section>

            <section className=" w-full flex justify-center items-center p-10 border-t-1 border-border mt-10">
                 <p className="font-medium text-[14px]  max-[1018px]:text-[12px]">&copy; {year} Tirar Visto - Todos os Direitos Reservados</p>


            </section>

        </footer>
    )
}