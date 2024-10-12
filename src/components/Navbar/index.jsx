import Link from "next/link"
import InputSearch from "./InputSearch"
import UserActionButton from "./UserActionButton"

const Navbar = () => {
    return (
        <header className="bg-accent">
            <div className="flex md:flex-row sm:flex-col justify-between md:items-center p-4 gap-2">
            <Link href="/" className="font-bold text-2xl">CuLAnimelist</Link>
            <InputSearch />
            <UserActionButton/>
            </div>
        </header>
    )
}

export default Navbar