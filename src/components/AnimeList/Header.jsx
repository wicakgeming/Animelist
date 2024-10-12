import Link from "next/link"

const Header = ({title, linkHref, linktitle}) => {
    return (    <div className="flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-primary">
        {title} 
        </h1>
        {linkHref && linktitle ?
        <Link href={linkHref} className="md:text=xl text-md hover:text-accent
        text-primary transition-all">
        {linktitle}
        </Link>
        :null
        }
        </div>
        )
}

export default Header