export default function Carousel({ data }) {
  return (
    <div id="carouselExample" className="carousel slide carousel-dark ">
      <div className="carousel-inner">
        {data.map((beer, i) => {
          return (
            <div className={"carousel-item " + (i === 0 ? "active" : "")}>
              <div className="row justify-content-center align-items-center g-0">
                {/* <div className="col-md-4"></div> */}
                <div className="col-md-4">
                  <img
                    src={import.meta.env.VITE_API_IMG + beer.image}
                    className="img-fluid beer-img"
                    alt="beer"
                  />
                </div>
                <div className="col-md-2">
                  <div>
                    <h1>{beer.name}</h1>
                    <div className="">
                      <img
                        src={`https://flagsapi.com/${beer.nation}/flat/64.png`}
                        className="flags"
                        alt={beer.nation}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
