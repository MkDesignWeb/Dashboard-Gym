import { Link, useLocation } from "react-router-dom";

interface props {
    goTo: string,
    title: string,
    icon: JSX.Element,
}

export function ButtonNav(props: props) {

    const url = useLocation()

    return(
        <Link to={props.goTo}>
            <div className={`w-full h-14 flex justify-center items-center gap-3 transition-all ${url.pathname == props.goTo ? 'bg-white dark:bg-primaryBlack' : ''}`}>

                <div className={`relative w-11 h-11 group-hover:mr-36 rounded-md transition-all flex justify-center items-center ${url.pathname == props.goTo ? 'bg-primary text-white' : 'bg-white dark:bg-primaryBlack dark:text-white text-primaryBlack' }`}>

                    {props.icon}

                <strong className={`opacity-0 group-hover:opacity-100 group-hover:left-14 -left-10 top-[calc(50%-0.8em)] absolute transition-all whitespace-nowrap ${url.pathname == props.goTo ? 'text-primary' : 'text-white'}`}>
                    {props.title}
                </strong>

                </div>
                
            </div>
        </Link>
    )
}