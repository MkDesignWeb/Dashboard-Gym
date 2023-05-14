import { useContext } from "react";
import { BsBoxArrowRight, BsPersonFill } from "react-icons/bs";
import { AuthContext } from "../contexts/auth/AuthContext";
import { useNavigate } from "react-router-dom";

export function ButtonUser() {

    const navigate = useNavigate()
    const auth = useContext(AuthContext);

    const handleLogout = async () => {
      await auth.signout();
      navigate("/")
      location.reload()
    }

    return(
        <div className="w-full h-14 flex justify-center items-center gap-3 bg-white dark:bg-primaryBlack relative">

                        <div className="relative w-11 h-11 group-hover:mr-36 rounded-md transition-all flex justify-center items-center bg-primary text-white">

                            <BsPersonFill size={24} />

                            <strong className="opacity-0 group-hover:opacity-100 group-hover:left-14 -left-10 top-[calc(50%-0.8em)] absolute transition-all whitespace-nowrap text-primaryBlack dark:text-white font-medium">
                                {auth.user?.name}
                            </strong>

                        </div>

                        <button onClick={handleLogout} className="absolute right-5 opacity-0 group-hover:opacity-100 transition-all rounded-md flex justify-center items-center w-11 h-11 bg-primary text-white">
                            <BsBoxArrowRight size={24} />
                        </button>

                    </div>
    )
}