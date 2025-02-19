import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import { useGlobalContext } from "../contexts/GlobalContext";

export default function HomePage() {
  const beersData = useGlobalContext();

  return (
    <>
      <section className="jumbo">
        <div className="container">
          <h1 className="jumbo-title">Beer Hall</h1>

          <div className="d-flex justify-content-center pt-4">
            <Link className="jumbo-btn d-flex" to={"/beers"}>
              <img src="./svg/can.svg" alt="can" />
              <span className="px-5">Beers</span>
              <img src="./svg/bottle.svg" alt="bottle" />
            </Link>
          </div>
        </div>
      </section>
      <section className="carousel-section">
        <div className="container">
          <Carousel data={beersData} />
        </div>
      </section>
    </>
  );
}
