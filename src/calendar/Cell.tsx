import clsx from 'clsx';

interface Props extends React.PropsWithChildren {
    isActive?: boolean
    className?: string;
    onClick?: () => void;
}

const Cell: React.FC<Props> = ({onClick,isActive = false, className, children}) =>{
return (<div onClick={onClick} className={
    clsx("h-12 flex items-center justify-center border-b border-r",{ "bg-red-600":isActive}, className)
        }>{children}</div>)
}
export default Cell;