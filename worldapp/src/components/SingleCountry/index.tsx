import React, { useState, useEffect } from "react";
import "./styles.css";
import { SingleCountryTS } from "../../types/SingleCountry";
import { Link } from "react-router-dom";
import { api } from "../../api";

export const SingleCountry = ({
  name,
  nativeName,
  population,
  region,
  subregion,
  capital,
  topLevelDomain,
  currencies,
  languages,
  borders,
  flag,
}: SingleCountryTS) => {
  const [borderCountries, setBorderCountries] = useState<string[]>([]);

  useEffect(() => {
    const fetchBorderCountries = async () => {
      if (borders && borders.length > 0) {
        const borderCountryNames = await Promise.all(
          borders.map(async (borderCode) => {
            const borderCountry = await api.getCountryByCode(borderCode);
            return borderCountry[0].name;
          })
        );
        setBorderCountries(borderCountryNames);
      } else {
        setBorderCountries([]);
      }
    };

    fetchBorderCountries();
  }, [borders]);

  return (
    <div className="mainData">
      <img src={flag} alt={`Flag Name: ${name}`} />
      <div className="countryData">
        <h1>{name}</h1>
        <div className="dataBox1">
          <p>
            <span>Native Name: </span>
            {nativeName}
          </p>
          <p>
            <span>Population: </span>
            {population}
          </p>
          <p>
            <span>Region: </span>
            {region}
          </p>
          <p>
            <span>Subregion: </span>
            {subregion}
          </p>
          {capital && (
            <p>
              <span>Capital: </span>
              {capital}
            </p>
          )}
          <p className="topLevel">
            <span>Top Level Domain</span>
            {topLevelDomain}
          </p>
          {currencies && (
            <p>
              <span>Currencies: </span>
              {currencies.map((currency, index) => (
                <span key={index}>{currency.name}</span>
              ))}
            </p>
          )}
          <p>
            <span>Languages: </span>
            {languages.map((language, index) => (
              <span key={index} className="language">
                {language.name}
              </span>
            ))}
          </p>
        </div>
        {borderCountries.length > 0 && (
          <div className="borderBox">
            <p>Border Countries: </p>
            <div className="borders">
              {borderCountries.map((item, index) => (
                <Link to={`/country/${item}`} key={index}>
                  {item}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
