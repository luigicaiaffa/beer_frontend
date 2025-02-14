import BeersList from "../components/BeersList";

export default function BeersPage() {
  return (
    <>
      <div className="jumbo">
        <div className="container">
          <h1 className="jumbo-title">Beers List</h1>
        </div>
      </div>

      <section>
        <div className="container">
          <BeersList />
        </div>
      </section>
    </>
  );
}
