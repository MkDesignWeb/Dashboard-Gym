interface props {
    children: JSX.Element,
    title: string
}

export function ScreenBox(props : props) {
    return (
        <main className="w-screen h-screen bg-white dark:bg-primaryBlack flex flex-col p-10 gap-5">
          
            <h1 className="relative w-fit text-primary font-black text-2xl after:absolute after:w-full after:h-1 after:left-0 after:-bottom-2 after:bg-primary">{props.title}</h1>
        
            <div className="relative w-full h-full bg-secondary dark:bg-secondaryBlack rounded-2xl p-5 overflow-hidden">
                {props.children}
            </div>
        </main>
    )
}