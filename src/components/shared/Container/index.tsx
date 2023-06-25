type ContainerProps = {
    children: React.ReactNode;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export function Container({children}:ContainerProps ){

    return (
        <div className="w-max-[1440px] py-5 px-7 mx-auto">
            {children}
        </div>
    )
}