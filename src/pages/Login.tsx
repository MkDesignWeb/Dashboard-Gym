import { NavigatorBar } from "../components/NavigatorBar"

import Logo from "../assets/svg/gym.svg"

export default function Login() {
    return (
        <main className="w-screen h-screen flex items-center justify-center bg-fundoAcademia bg-no-repeat bg-cover">

            <div className="bg-primary w-[32em] h-[29em] flex flex-col items-center justify-between py-6 rounded-xl shadow-[#00000086] shadow-lg">

                <div className="text-xl flex justify-around items-center w-full">
                    <strong className="text-white text-2xl relative after:absolute after:w-full after:h-1 after:left-0 after:-bottom-2 after:bg-white">Fazer login</strong>
                    <img src={Logo} alt="Logo academia" className="h-11" />
                </div>

                <div className="bg-white w-96 h-64 rounded-lg flex justify-center items-center">
                    <form className="flex flex-col justify-center w-full h-full p-10 text-primary text-xl font-medium gap-5 relative">

                        <div className="flex flex-col">
                            <label htmlFor="usuario">
                                Usuário
                            </label>
                            <input type="email" name="usuario" id="usuario" className="border-primary border-2 rounded-md focus:outline-none text-base text-black h-10 px-2 mt-1" />
                        </div>

                        <div className="flex flex-col relative">
                            <label htmlFor="senha">
                                senha
                            </label>
                            <input type="password" name="senha" id="senha" className="border-primary border-2 rounded-md focus:outline-none text-black h-10 px-2 mt-1" />

                            <div>
                            <span className="text-red-500 text-sm absolute -bottom-6 right-0">
                                Senha ou usuário incorreto
                            </span>
                        </div>
                        </div>

                    </form>

                </div>

                <div>
                    <button type="submit" className="w-48 h-14 bg-w rounded-md bg-white text-primary text-2xl font-bold">
                        Entrar
                    </button>
                </div>
            </div>
        </main>
    )
}