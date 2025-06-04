import logo from "../assets/logo.png";

export default function Navbar() {
    return(
        <nav className=" w-full h-25 ">
            <ul className="flex items-center h-full gap-14">
                <li>
                    <img src={logo} alt="Logo" className="w-35 h-10" />
                </li>
                <li className="">Home</li>
                <li className="">Quem somos</li>
                <li className="">Serviços</li>
                <li className="">Contato</li>
            </ul>
        </nav>
    )
}