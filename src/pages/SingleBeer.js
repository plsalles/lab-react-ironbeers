import React, { Component } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

class SingleBeer extends Component {
    constructor () {
        super()
        this.state ={
            beer: {},
        }
    }

   
    componentDidMount() {
        console.log(this.props.match.params.id)
        const id = this.props.match.params.id;
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
        .then(response => {
              console.log(response.data)
              this.setState({beer: response.data})
        })
    }
   
         
    render () {
        const beers = [];
        return (
            <div>
                {
                    Object.keys(this.state.beer).length === 0
                    ?   ( 
                            <h2>Loading...</h2>
                        ) 
                        : (
                                <Link to={`/singleBeer/${this.state.beer._id}`}>
                                    <div key={`beer-${this.state.beer._id}`}>
                                        <img src={this.state.beer.image_url} alt='beer'></img>
                                        <h3>{this.state.beer.name}</h3>
                                        <h6>{this.state.beer.tagline}</h6>
                                        <p>{this.state.beer.contributed_by}</p>
                                        <hr />
                                    </div>
                                </Link>
        
                       
                            )    
                }
            </div>
        );
    }
}

export default SingleBeer;