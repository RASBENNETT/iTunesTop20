import React from 'react'
import "./ChartListStyle.css"

const ChartList = (props) => {

    if (!props.info.feed) return null

    const songsList = props.info.feed.entry.map(song => {
        return (
            <a href={song.link[0].attributes.href}>
                <div key={song.id.attributes["im:id"]} className="song-card">
                    <img src={song["im:image"][2].label} className="song-img" alt=""/>
                    <div>
                        {song["im:name"].label}
                    </div>
                    <div>
                        {song["im:artist"].label}
                    </div>
                </div>
            </a>
        )
    })

    return(
        <div className="song-list">
            {songsList}
        </div>

    )
}

export default ChartList;