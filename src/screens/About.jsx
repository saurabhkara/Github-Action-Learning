import countryList from "../api/countryDetails.json";

export default function About() {
  return (
    <section className="section-about container">
      <h2 className="container-title">
        Here are the Interesting tourist places
        <br />
        We are proud of
      </h2>
      <div className="gradient-cards">
        {countryList.map((item) => {
          return (
            <div className="card" key={item.id}>
              <div className="container-card bg-blue-box">
                <p className="card-title">{item.name}</p>
                <p>
                  <span className="card-description"> Capital:</span>
                  {item.capital}
                </p>
                <p>
                  <span className="card-description">Famous Place :</span>
                  {item.importantTouristPlace}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
