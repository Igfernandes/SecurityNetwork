type ContainerProps = {
    children: React.ReactNode;
    maxWidth?: String;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export function Container({ children, maxWidth = "1440px", className = '', ...props }: ContainerProps) {

    return (
        <div className="relative">
            <div className={`py-5 px-7 mx-auto  ${className}`} style={{ maxWidth: `${maxWidth}` }} {...props}>
                {children}
            </div>
        </div>
    )
}