import React, { Component } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

class ListBeer extends Component {
    constructor () {
        super()
        this.state ={
            beers: [],
        }
    }

   
    componentDidMount() {
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
        .then(response => {
              console.log(response.data)
              this.setState({beers: response.data})
        })
    }
   
         
    render () {
        const beers = [];
        return (
            <div>
                {
                    this.state.beers.length === 0
                    ?   ( 
                            <h2>Loading...</h2>
                        ) 
                        : (
                                this.state.beers.map( beer => {
                                    return (
                                        <Link to={`/singleBeer/${beer._id}`}>
                                            <div key={`beer-${beer._id}`}>
                                                <img src={beer.image_url} alt='beer'></img>
                                                <h3>{beer.name}</h3>
                                                <h6>{beer.tagline}</h6>
                                                <p>{beer.contributed_by}</p>
                                                <hr />
                                            </div>
                                        </Link>
                                        
                                    );  
                                }) 
                            )    
                }
            </div>
        );
    }
}

export default ListBeer;