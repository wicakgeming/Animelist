import { authUserSession } from "@/libs/auth-libs"
import { redirect } from "next/dist/server/api-utils";
import Image from "next/image";
import Link from "next/link";

const Page = async() => {
    const user = await authUserSession()    

    return(
        <div className="mt-8 text-primary flex flex-col justify-center items-center">
            <h5 className="text-2xl font-bold ">WELKAM, {user.name}</h5>
            <Image src={user.image} alt="..." width={250} height={250}/>
                <div className=" flex flex-wrap gap-4 py-8">
                    <Link  className="bg-accent text-dark font-bold py-3 px-4 text-xl"
                    href="/users/dashboard/collection">My Collection</Link>
                    <Link  className="bg-accent text-dark font-bold py-3 px-4 text-xl"
                    href="/users/dashboard/comment">My Comment</Link>
                </div>
        </div>
    )
}

export default Page