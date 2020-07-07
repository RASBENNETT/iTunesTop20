import React, { Component } from 'react'
import ChartList from '../components/ChartList'
import "./ChartContainerStyle.css"

class ChartContainer extends Component{

    constructor(props){
        super(props)
        this.state = {
            info: [],
            selectedSong: ""
        }
    }

    componentDidMount(){
        const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json'
        fetch(url)
          .then(res => res.json())
          .then(data => this.setState({info: data}))
    }

    render(){
        return(
            <div className="chart-container">
                <h1>iTunes Top 20</h1>
                <ChartList info={this.state.info}/>
            </div>
        )
    }


}

export default ChartContainer;