import React from 'react'
import './VideoFooter.css'
import {Button,Avatar} from '@material-ui/core'
import Music from '@material-ui/icons/MusicNote'
import Ticker from 'react-ticker'
import Mode from '@material-ui/icons/ModeComment'
import Send from '@material-ui/icons/Send'
import MoreHorizon from '@material-ui/icons/MoreHoriz'
import Favourite from '@material-ui/icons/Favorite'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

function VideoFooter({channel,song,url,likes,share,avatarSrc}) {
    return (
        <div className='videoFooter'>
            <div className='videoFooter_text'>
            <Avatar className='avatar' src={avatarSrc}></Avatar>
            <h3>{channel} . <Button>Follow</Button></h3>
            </div>
            <div className='videoFooter_ticker'>
                <Music className='videoFooter_icon'></Music>
            <Ticker mode='smooth'>
                {({index}) =>(
                    <>
                    <h1>{song}</h1>
                    </>
                )}
            </Ticker>
            </div>
            <div className='videoFooter_actions'>
                <div className='videoFooter_actionleft'>
                    <ThumbUpIcon fontSize='medium'/>
                    <ThumbDownAltIcon fontSize='medium'/>
                    <DoubleArrowIcon fontSize='medium'/>
                </div>
                <div className='videoFooter_actionright'>
                    <div className='videoFooter_stat'>
                        <Favourite/>
                <p>{likes}</p>
                    </div>
                    <div className='videoFooter_stat'>
                        <Mode/>
                        <p>{share}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoFooter
