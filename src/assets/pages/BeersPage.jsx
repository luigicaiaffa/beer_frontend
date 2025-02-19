import BeersList from "../components/BeersList";
import { useGlobalContext } from "../contexts/GlobalContext";

export default function BeersPage() {
  const beersData = useGlobalContext();

  return (
    <>
      <div className="jumbo">
        <div className="container">
          <h1 className="jumbo-title">Beers List</h1>
        </div>
      </div>

      <section>
        <div className="container">
          <BeersList data={beersData} />
        </div>
      </section>
    </>
  );
}
