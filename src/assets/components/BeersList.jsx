export default function BeersList() {
  return (
    <table className="table table-hover my-5">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Nome</th>
          <th scope="col">Alcohol</th>
          <th scope="col">Quantità</th>
          <th scope="col">Birrificio</th>
          <th scope="col">Nazione</th>
          <th scope="col">Stile</th>
          <th scope="col">Fermentazione</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <img src={import.meta.env.VITE_API_IMG + "peroni_33.png"} alt="" />
          </td>
          <td>Peroni</td>
          <td>4.7%</td>
          <td>33cl</td>
          <td>Peroni</td>
          <td>IT</td>
          <td>Lager</td>
          <td>Bassa</td>
          <td>
            <button>cancella</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
