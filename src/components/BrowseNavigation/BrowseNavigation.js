import React from 'react';
import {Link} from 'react-router-dom';

const BrowseNavigation = () => {
    const alphabet = ["A","/", "B","/", "C","/", "D","/","E","/", "F","/", "G","/", "H","/", "I","/", "K","/", "L","/", "M", "/","N","/", "O", "/","P","/", "Q","/", "R","/", "S","/", "T","/", "V","/", "X", "/","Y","/", "Z"]
    return (
        <div className="container">
            <div className="browse-navigation">
            {
                alphabet.map(item =>(
                    <Link to={`/browse/${item}`} key={item} >{item}</Link>
                ))
            }
            </div>
        </div>

    );
};

export default BrowseNavigation;