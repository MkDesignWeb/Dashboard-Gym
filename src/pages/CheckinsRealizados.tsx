import { useState } from "react";
import { ScreenBox } from "../components/ScreenBox";
import { SearchBox } from "../components/SearchBox";

export function CheckinsRealizados() {

    const [search, setSearch] = useState('');
    const [modo, setModo] = useState('')

    /* Usuarios falsos para dev */
    const [users, serUsers] = useState([        {
            nome: "Carvalho Diamante",
            modo: "check-in",
            data: "12/12/2023 - 06h30h"
        },
        {
            nome: "Carvalho Diamante",
            modo: "check-out",
            data: "12/12/2023 - 06h30h"
        },
        {
            nome: "King Breno",
            modo: "check-in",
            data: "12/12/2023 - 06h30h"
        },
        {
            nome: "King Breno",
            modo: "check-out",
            data: "11/12/2023 - 09h40h"
        },
        {
            nome: "Giusep Messias",
            modo: "check-in",
            data: "12/12/2023 - 06h30h"
        },
        {
            nome: "Cascata Correia",
            modo: "check-in",
            data: "12/12/2023 - 06h30h"
        },
        {
            nome: "Giusep Messias",
            modo: "check-out",
            data: "12/12/2023 - 06h30h"
        },
        {
            nome: "Cascata Correia",
            modo: "check-out",
            data: "12/12/2023 - 06h30h"
        },
        {
            nome: "Rafaiel Named",
            modo: "check-in",
            data: "12/12/2023 - 06h30h"
        },
        {
            nome: "Rafaiel Named",
            modo: "check-out",
            data: "12/12/2023 - 06h30h"
        },
        {
            nome: "ooMast3r Diff",
            modo: "check-in",
            data: "12/12/2023 - 06h30h"
        },
        {
            nome: "ooMast3r Diff",
            modo: "check-out",
            data: "12/12/2023 - 06h30h"
        },
        {
            nome: "Daniel Saemba",
            modo: "check-in",
            data: "12/12/2023 - 06h30h"
        },
        {
            nome: "Daniel Saemba",
            modo: "check-in",
            data: "12/12/2023 - 06h30h"
        },
        {
            nome: "Daniel Saemba",
            modo: "check-out",
            data: "12/12/2023 - 06h30h"
        },
        {
            nome: "Daniel Saemba",
            modo: "check-out",
            data: "12/12/2023 - 06h30h"
        },

    ])

    const childToParent = (childdata: string) => {
        setSearch(childdata)
    }

    const modoFilter = users.filter(user => user.modo.toLowerCase().startsWith(modo.toLowerCase()))
    const searchFilter = modoFilter.filter(modoFilter => modoFilter.nome.toLowerCase().includes(search.toLowerCase()))

    return (
        <ScreenBox title="Check-in / Check-out Realizados ">
            <>
                <div id="HeaderDeshboard" className="flex items-center justify-between">

                    <SearchBox value={search} childToParent={childToParent} />

                    <div className="flex justify-center items-center gap-3 dark:text-white">

                        <label htmlFor="FiltroCheck" className="font-medium">Filtro modo:</label>

                        <select id="FiltroCheck" name="select" defaultValue="Todos" onChange={(e) => setModo(e.target.value)}
                            className="rounded-md border-2 w-auto h-10 font-medium text-center p-1 border-primary dark:bg-primaryBlack outline-none">
                            <option className="text-primary font-medium" value="">Todos</option>
                            <option className="font-medium" value="Check-in" >Check-in</option>
                            <option className="font-medium" value="Check-out">Check-out</option>
                        </select>

                    </div>
                </div>

                <div id="Tabela" className="flex relative w-full h-full mt-5 flex-col dark:text-white">

                    <div id="headerTable" className="flex text-center w-full h-10 mb-4 justify-between items-center bg-primary text-white rounded-lg">
                        <div className="flex-1">
                            <strong>Clentes</strong>
                        </div>
                        <div className="flex-1">
                            <strong>Modo</strong>
                        </div>
                        <div className="flex-1">
                            <strong>Data / Hora</strong>
                        </div>
                    </div>

                    <div className="flex flex-col h-[calc(100%-8em)] gap-3 overflow-y-auto scrollbar-thin dark:scrollbar-thumb-primaryBlack dark:scrollbar-track-white scrollbar-track-[#D9D9D9] scrollbar-thumb-[#979797] scrollbar-thumb-rounded-md scrollbar-track-rounded-md px-2">
                        
                        {searchFilter.map((user) => (

                            <div id="itenTable" className="w-full flex justify-around items-center  text-center border-2 border-primary h-10 rounded-md">
                                <div className="flex-1">
                                    <span>{user.nome}</span>
                                </div>
                                <div className="flex-1 border-r-primary border-r-2 border-l-primary border-l-2 my-2">
                                    <span>{user.modo}</span>
                                </div>
                                <div className="flex-1">
                                    <span>{user.data}</span>
                                </div>
                            </div>

                        ))}
                    </div>

                </div>
            </>
        </ScreenBox>
    )
}