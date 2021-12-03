import React from 'react'
import './VideoHeader.css'

import Arrowback from '@material-ui/icons/ArrowBackIos'
import Camera from '@material-ui/icons/CameraAltOutlined'

function VideoHeader() {
    return (
        <div className='videoHeader'>
            <Arrowback/>
            
            <Camera/>
        </div>
    )
    }

export default VideoHeader
