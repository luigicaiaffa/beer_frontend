export default function Carousel() {
  return (
    <div id="carouselExample" className="carousel slide carousel-dark ">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="d-flex">
            <img
              src={import.meta.env.VITE_API_IMG + "peroni_33.png"}
              className="d-block"
            />
            <img
              src={import.meta.env.VITE_API_IMG + "peroni_33.png"}
              className="d-block"
            />
            <img
              src={import.meta.env.VITE_API_IMG + "peroni_33.png"}
              className="d-block"
            />
          </div>
        </div>
        <div className="carousel-item">
          <div className="d-flex">
            <img
              src={import.meta.env.VITE_API_IMG + "peroni_33.png"}
              className="d-block"
            />
            <img
              src={import.meta.env.VITE_API_IMG + "peroni_33.png"}
              className="d-block"
            />
            <img
              src={import.meta.env.VITE_API_IMG + "peroni_33.png"}
              className="d-block"
            />
          </div>
        </div>
        <div className="carousel-item">
          <div className="d-flex">
            <img
              src={import.meta.env.VITE_API_IMG + "peroni_33.png"}
              className="d-block"
            />
            <img
              src={import.meta.env.VITE_API_IMG + "peroni_33.png"}
              className="d-block"
            />
            <img
              src={import.meta.env.VITE_API_IMG + "peroni_33.png"}
              className="d-block"
            />
          </div>
        </div>
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
