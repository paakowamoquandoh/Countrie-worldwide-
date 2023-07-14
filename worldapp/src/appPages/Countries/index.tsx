import "./styles.css";
import { useState, useEffect } from "react";
import { SearchInput } from "../../components/searchInput";
import { CountriesTS } from "../../types/Countries";
import { CountryItem } from "../../components/CountryItems";
import { api } from "../../api";

export const Countries = () => {
  const [countries, setCountries] = useState<CountriesTS[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getAllCountries();
  }, []);

  const getAllCountries = async () => {
    setLoading(true);
    let countries = await api.getCountries();
    setCountries(countries);
    setLoading(false);
  };

  const lowerSearch = search.toLocaleLowerCase();

  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLocaleLowerCase().includes(lowerSearch) ||
      country.region.toLocaleLowerCase().includes(lowerSearch)
  );

  return (
    <section className="countriesArea">
      <SearchInput value={search} setSearch={setSearch} />
      <div className="countries">
        {loading && <div className="">Loading...</div>}
        {!loading &&
          filteredCountries.map((item) => (
            <CountryItem
              name={item.name}
              population={item.population}
              region={item.region}
              capital={item.capital}
              flag={item.flags.png}
            />
          ))}
      </div>
    </section>
  );
};
