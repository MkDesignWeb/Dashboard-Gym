import { BsBoxArrowRight, BsPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export function ButtonUser() {
    return(
        <div className="w-full h-14 flex justify-center items-center gap-3 bg-white relative">

                        <div className="relative w-11 h-11 group-hover:mr-36 rounded-md transition-all flex justify-center items-center bg-primary text-white">

                            <BsPersonFill size={24} />

                            <strong className="opacity-0 group-hover:opacity-100 group-hover:left-14 -left-10 top-[calc(50%-0.8em)] absolute transition-all whitespace-nowrap text-primaryBlack font-medium">
                                Usuário
                            </strong>

                        </div>

                        <Link to={"/"} className="absolute right-5 opacity-0 group-hover:opacity-100 transition-all rounded-md flex justify-center items-center w-11 h-11 bg-primary text-white">
                            <BsBoxArrowRight size={24} />
                        </Link>

                    </div>
    )
}