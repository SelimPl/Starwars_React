import React from 'react'
import './StarWars.css'

class StarWars extends React.Component{
    constructor(){
        super()
        this.state={
            loaded: false,
            name: null,
            height: null,
            wikipedia: null, 
            image: null
        }
    }

    randomCharacter = () => {
        const randomNumber = Math.floor(Math.random()*80+1)
        const url= `https://akabab.github.io/starwars-api/api/id/${randomNumber}.json`
        fetch(url)
        .then(response => response.json())
        .then(data =>{
            this.setState({
                loaded: true,
                name: data.name,
                height: data.height,
                wikipedia: data.wiki, 
                image: data.image,
            })
    })
    }
    render(){
        return(
           
            <div className="container">
                {
                this.state.loaded && 
                <div>
                <h1>Name: {this.state.name}</h1>
                <h1>Height: {this.state.height} cm</h1>
                <h1><a href={this.state.wikipedia}>More info</a></h1>
                     <div className="img">
                    <img className="image1" src={this.state.image} alt="" />
                     </div>
                </div>
    }
                <button onClick={this.randomCharacter} type="button" className="btn">Generuj !</button>
            </div>
        )
    }
}

export default StarWars;