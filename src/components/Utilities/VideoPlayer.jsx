"use client"

import { XCircle } from "@phosphor-icons/react"
import { useState } from "react"
import YouTube from "react-youtube"

const VideoPlayer = ({ youtubeId }) => {
    const [isOpen, setIsOpen] = useState(true)

    const handleVideoplayer = () => {
        setIsOpen((prevState) => !prevState)
    }

    const option = {
        width: "300",
        height: "250"
    }

    const Player = () => {
        return (
            <div className="fixed bottom-2 right-2">
            <button 
            onClick={handleVideoplayer}
            className="text-primary float-right bg-secondary px-3 mb-1">X</button>
            <YouTube videoId={youtubeId} 
            onReady={(event) => event.target.pauseVideo()}
            opts={option}
            />
        </div>
        )
    }
    const ButtonOpenPlayer = () => {
        return (
            <button 
            onClick={handleVideoplayer}
            className=" rounded fixed bottom-5 right-5 w-32 bg-primary text-dark text-xl hover:bg-accent transition-all shadow-xl"> 
            Trailer Disini
            </button>
        )
    }

    return isOpen ? <Player/> : <ButtonOpenPlayer/>

}

export default VideoPlayer