import { useEffect, useState } from "react";
import "./styles.css";
import { Link, useParams } from "react-router-dom";
import { CountryTS } from "../../types/Country";
import { SingleCountry } from "../../components/SingleCountry";
import { api } from "../../api";
import { ArrowLeft } from "react-feather";

export const CountryPage = () => {
  const { name, code } = useParams();

  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState<CountryTS[]>([]);

  useEffect(() => {
    if (name) {
      getCountry(name);
    } else if (code) {
      getCountry(code);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, code]);

  const getCountry = async (params: string) => {
    setLoading(true);
    let country = name
      ? await api.getCountry(params)
      : await api.getCountryByName(params);
    setCountry(country);
    setLoading(false);
  };

  return (
    <section className="mainCountry">
      <div className="countryContainer">
        <Link to="/" className="backButton">
          <ArrowLeft className="backIcon" size={16} />
          Back
        </Link>
        {loading && <div className="loading">Loading</div>}
        {!loading &&
          country.map((item) => (
            <SingleCountry
              flag={item.flags.png}
              name={item.name}
              nativeName={item.nativeName}
              population={item.population}
              region={item.region}
              subregion={item.subregion}
              capital={item.capital}
              topLevelDomain={item.topLevelDomain[0]}
              currencies={item.currencies && item.currencies}
              languages={item.languages}
              borders={item.borders}
            />
          ))}
      </div>
    </section>
  );
};
