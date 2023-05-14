import { BsSearch } from "react-icons/bs"

interface props {
    value: string,
    childToParent: Function
}

export function SearchBox(props: props) {
    return (
        <div className="flex items-center gap-2">
            <div className="relative w-11 h-11 rounded-md flex  justify-center items-center bg-primary text-white">
                <BsSearch size={24}/>
            </div>
            
            <input type="search" value={props.value} onChange={(e) => props.childToParent(e.target.value)} placeholder="Pesquisar cliente..."
            className="focus:outline-primary px-2 w-96 h-9 border-2 rounded-md border-[#D9D9D9] placeholder:text-[#D9D9D9]"/>
        </div>
    )
}
