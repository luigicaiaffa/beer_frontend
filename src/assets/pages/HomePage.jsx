import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <div className="jumbo">
        <div className="container">
          <h1 className="jumbo-title">Beer Hall</h1>

          <div className="d-flex justify-content-center pt-4">
            <Link className="jumbo-btn d-flex">
              <img src="./svg/can.svg" alt="can" />
              <span className="px-5">BIRRE</span>
              <img src="./svg/bottle.svg" alt="bottle" />
            </Link>
          </div>
        </div>
      </div>
      <div className="container"></div>;
    </>
  );
}
