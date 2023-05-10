import { ButtonNav } from "./ButtonNav"

import { BsCheck2Circle, BsCheck2All, BsPersonFillAdd, BsPeopleFill } from "react-icons/bs"
import Logo from "../assets/svg/gym.svg"
import { ButtonUser } from "./ButtonUser"
import { ThemeSwitch } from "./ThemeSwitch"


export function NavigatorBar() {


    return (
        <div className="h-screen w-20 relative z-50">
            <nav className="group absolute left-0 top-0 h-full w-full bg-primary hover:w-64 transition-all py-5">

                <div className="w-full h-12 px-2 flex items-center justify-center transition-all">
                    <img src={Logo} alt="Logo academia" className="w-full h-full bg-no-repeat bg-cover" />
                </div>

                <div className="w-full h-auto mt-8 flex flex-col gap-3">
                    <ButtonNav goTo="/realizar-checkin" title="Realizar checkin" icon={<BsCheck2Circle size={24} />} />
                    <ButtonNav goTo="/checkins-realizados" title="Checkins realizados" icon={<BsCheck2All size={24} />} />
                    <ButtonNav goTo="/cadastra-cliente" title="Cadastra cliente" icon={<BsPersonFillAdd size={24} />} />
                    <ButtonNav goTo="/todos-clientes" title="Todos clientes" icon={<BsPeopleFill size={24} />} />
                </div>

                <div className="absolute w-full felx flex-col bottom-0">

                    <ButtonUser />

                    <div className="h-14 w-full flex items-center">

                        <ThemeSwitch />

                    </div>

                </div>

            </nav>
        </div>
    )
}