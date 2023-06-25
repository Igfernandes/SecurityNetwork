type ContainerProps = {
    children: React.ReactNode;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export function Container({children, className ,...props}:ContainerProps ){

    return (
        <div className={`w-max-[1440px] py-5 px-7 mx-auto ${className}`} {...props}>
            {children}
        </div>
    )
}