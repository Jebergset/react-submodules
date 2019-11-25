import React, { useState } from 'react'
import mtv from '../files/mtv'
import LocalJSONSubmodule from './LocalJSONSubmodule'
import './LocalJSONModule.css'

const LocalJSONModule = () => {
    const[videos, setVideos] = useState(mtv.videos)
    
    const filterVideos = (e) => {
        setVideos(
            mtv.videos.filter(
                video => video.song.toLowerCase().includes(e.target.value))
        )
    }

    return(
    <div className="submodule local-json">
        <h2>This module uses data from a local JSON file</h2>
        <p>And the videoes on the first MTV podcast was: </p>
        <input type="text" placeholder="filter videoes by title" onInput={filterVideos}/>
        <div className="videoes">
        {
            videos.map(
            video => <LocalJSONSubmodule
            song={video.song}
            artist={video.artist}
            number={video.number}
            appearance={video.appearance}
            />
            )
        }
        </div>
    </div>
    )
}

export default LocalJSONModule