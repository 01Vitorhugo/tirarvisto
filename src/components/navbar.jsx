import React, { useState } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full h-auto">
      <div className="max-w-screen-xl flex mx-auto py-10">
        <div className="flex justify-between w-full max-[1447px]:flex-col">
          <img src={logo} alt="Logo" className="w-[152px] h-10" />
          <ul className="hidden md:flex">
            {["Home", "Quem somos", "Serviços", "Contato"].map((item, index) => (
              <li key={index} className="cursor-pointer hover:text-Pclara">
                <a href="#" className="block py-2 px-3">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Botão do Menu Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 w-10 h-10 text-gray-500 rounded-lg hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 transition-all duration-300"
        >
          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
      </div>

      {/* Menu Mobile com animação corrigida */}
      <div className={`fixed top-0 left-0 w-full h-40 bg-white shadow-lg rounded-lg transform transition-all duration-500 ease-in-out flex flex-col items-center justify-center px-5 
        ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 hidden"}`}>
        
        {/* Logo no topo com animação corrigida */}
        <img src={logo} alt="Logo" className={`w-[120px] h-10 mb-4 transition-all duration-500 ${isOpen ? "scale-100 opacity-100" : "scale-90 opacity-0"}`} />

        {/* Links do menu em linha */}
        <ul className="flex space-x-6 text-lg">
          {["Home", "Quem somos", "Serviços", "Contato"].map((item, index) => (
            <li key={index} className="cursor-pointer text-gray-700 hover:text-blue-500 transition-all">
              <a href="#" className="block">{item}</a>
            </li>
          ))}
        </ul>

        {/* Botão de fechar com animação */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-5 right-5 p-2 w-8 h-8 text-gray-500 hover:text-red-500 transition-all scale-100 hover:scale-110"
        >
          ✖
        </button>
      </div>
    </nav>
  );
}