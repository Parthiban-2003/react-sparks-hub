import { useEffect, useState } from "react";

function ApiCallAsync() {
  const [api, setApi] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await response.json();
        setApi(data);
      } catch (err) {
        setError(err.message);
      }
    }

    fetchUsers();
  }, []);

  return (
    <>
      <h1>Api Call Using Async and Await:</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {api.map(user => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ApiCallAsync;



