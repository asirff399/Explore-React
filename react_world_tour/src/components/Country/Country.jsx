import { useState } from 'react';
import './Country.css'
import CountryDetail from '../CountryDetail/CountryDetail';
const Country = ({country,handleVisitedCountry,handleVisitedFlags}) => {
    const {name,flags,population,area,cca3} = country

    const [visited,setVisited] = useState(false)

    const handleVisited = () =>{
        setVisited(!visited)
    }
    
    const passWithParam = () => {
        handleVisitedCountry(country)
    }
    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3 style={{color: visited ? 'red':'white'}}>Name: {name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>cca3: {cca3}</p>
            <button onClick={passWithParam}>Mark Visited</button>
            <button onClick={() => handleVisitedFlags(country.flags.png)}>Add Flag</button>
            <button onClick={handleVisited}>{visited ? 'Visited':'Going'}</button><br />
            {visited && 'I am Visited this country.'}
            <hr />
            {/* Country Details */}
            <CountryDetail
                country={country}
                handleVisitedCountry={handleVisitedCountry}
                handleVisitedFlags={handleVisitedFlags}
            ></CountryDetail>
        </div>
    );
};

export default Country;