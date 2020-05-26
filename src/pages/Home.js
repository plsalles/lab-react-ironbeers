import React from 'react';

import { Link } from 'react-router-dom';

function Home () {
    return (
        <div>
            <Link to='/allBeers'> 
                <img src='./images/all-beers.jpg' alt='all-beers'></img> 
                <h3>All Beers</h3> 
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
            </Link>
            <Link to='/randomBeer'> 
                <img src='./images/random-beer.jpg' alt='random-beer'></img> 
                <h3>Random Beer</h3> 
                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.  </p>
            </Link>
            <Link to='/newBeers'> 
                <img src='./images/new-beer.jpeg' alt='new-beer'></img> 
                <h3>New Beer</h3> 
                <p> Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
            </Link>
        </div>
    );
}

export default Home;
