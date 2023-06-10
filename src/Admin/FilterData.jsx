import axios from "axios";
import { useState, useEffect } from "react";

export default function FilterData(props) {
  const [list, setList] = useState([]);
  const [error, setError] = useState(false);
  const [id, setId] = useState("id");

  const getData = () => {
    axios
      .get("https://localhost.pythonanywhere.com/api/items")
      .then((res) => setList(res.data))
      .catch((error) => {
        console.error(error);
        setError(true);
      });
  };

  function Delete(item_id) {
    axios.delete(`https://localhost.pythonanywhere.com/api/items/${item_id}`);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container" style={{ marginTop: "100px" }}>
      {error ? (
        <p>An error occurred while fetching data.</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">title</th>
              <th scope="col">prix</th>
              <th scope="col">category</th>
              <th scope="col">methods</th>
            </tr>
          </thead>
          <tbody>
            {list.map((i) => (
              <tr key={i.title}>
                <th scope="row">{i.id}</th>
                <td>{i.title}</td>
                <td>{i.prix}</td>
                <td>{i.category}</td>
                <td>
                  <button
                    onClick={() => Delete(i.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
