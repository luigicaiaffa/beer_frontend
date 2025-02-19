export default function BeersList({ data }) {
  return (
    <table className="table table-hover my-5">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Nome</th>
          <th scope="col">Fermentazione</th>
          <th scope="col">Stile</th>
          <th scope="col">Birrificio</th>
          <th scope="col">Nazione</th>
          <th scope="col">Alcohol</th>
          <th scope="col">Quantità</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((beer) => {
            console.log(beer);

            return (
              <tr>
                <td>
                  <img src={import.meta.env.VITE_API_IMG + beer.image} />
                </td>
                <td>{beer.name}</td>
                <td>{beer.fermentation}</td>
                <td>{beer.style}</td>
                <td>{beer.brewery}</td>
                <td>{beer.nation}</td>
                <td>{beer.alcohol_degrees + "%"}</td>
                <td>{beer.size}</td>
                <td>
                  <button>cancella</button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}
