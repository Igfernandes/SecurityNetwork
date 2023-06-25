type ContainerProps = {
    children: React.ReactNode;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export function Container({children}:ContainerProps ){

    return (
        <div className="container w-max-[1450px] p-5 mx-auto">
            {children}
        </div>
    )
}