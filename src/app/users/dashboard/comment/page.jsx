import Header from '@/components/Dashboard/Header'
import { authUserSession } from '@/libs/auth-libs'
import prisma from '@/libs/prisma'
import Link from 'next/link'
import { comment } from 'postcss'
import React from 'react'

const page = async() => {
    const user = await authUserSession()
    // console.log(user);
    const comments = await prisma.comment.findMany({where: {user_email: user.email} })
    // console.log(comments);
    

    return (
    <section className=" px-4 mt-4 w-full">
        <Header title={"My Comment"}/>
        <div className="grid grid-cols-1 py-2 gap-4">
            {comments.map(comment => {
                return(
                    <Link href={`/anime/${comment.anime_mal_id}`} key={comment.id} className="bg-primary text-dark p-4">
                        <p className="text-sm">{comment.anime_title}</p>
                        <p className="italic">{comment.comment}</p>
                    </Link>
                )
            })}
        </div>
    </section>
  )
}

export default page