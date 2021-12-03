import React, { useRef, useState } from 'react'
import './Video.css'
import VideoHeader from './VideoHeader'
import VideoFooter from './VideoFooter'


function Video({ url, likes, shares, avatarSrc, channel, song }) {
    const videoRef = useRef(null)
    const [isvideoplaying, setisvideoplaying] = useState(false)
    const onVideoPress = () => {
        if (isvideoplaying) {
            // stop
            videoRef.current.pause()
            setisvideoplaying(false)
        } else {
            videoRef.current.play()
            setisvideoplaying(true)
        }
    }

    return (
        <div className='video'>
            <VideoHeader />

            <iframe className="video_player" width="100%" height="550" showinfo="0" controls="0" autohide="1" src={url} title="YouTube video player" ></iframe>
            {/* <video ref={videoRef}
                onClick={onVideoPress}
                className='video_player'
                alt='IG_Reel_video' loop>
                <source src={url}  ></source>
            </video> */}
            <VideoFooter channel={channel} avatarSrc={avatarSrc} song={song} likes={likes} shares={shares} />

        </div>
    )
}

export default Video
