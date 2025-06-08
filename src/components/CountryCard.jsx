import { NavLink } from "react-router-dom";
export default function CountryCard({ item }) {
  return (
    <li key={item.region} className="country-card card">
      <div className="container-card bg-white-box">
        <img src={item.flags.svg} alt={item.flags.alt} />
        <div className="counrtyInfo">
          <p className="card-title">{item.name.common}</p>
          <p>
            <span className="card-description">Population:</span>
            {item.population.toLocaleString()}
          </p>
          <p>
            <span className="card-description">Region:</span>
            {item.region}
          </p>
          <p>
            <span className="card-description">Capital:</span>
            {item["capital"][0]}
          </p>
          <NavLink to={`/country/${item.name.common}`} className="no-underline">
            <button>View Details</button>
          </NavLink>
        </div>
      </div>
    </li>
  );
}
