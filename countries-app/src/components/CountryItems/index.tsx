import React from 'react';
import "./styles.css"
import { CountryItemTS } from "../../types/CountryItem"
import { Link } from "react-router-dom";

export const CountryItem = ({name, population, region, capital, flag}: CountryItemTS) => {
    return(
        <div className="countryBox">
           
            <Link  to={`/country/${name}`}>
                <div className="imageBox">
                    <img src={flag} alt={`Flag name:${name}`} />
                </div>
                <div className="dataSection">
                    <p className="countryName"><b>{name}</b></p>
                    <p>Population: <span>{population}</span></p>
                    <p>Region: <span>{region}</span></p>
                    <p>Capital: <span>{capital}</span></p>
                </div>
            </Link>
       
        </div>
    )
}
