import React, { useEffect, useState } from "react";

const Starwars = () => {
  const [characters, setcharacters] = useState([]);

  useEffect(() => {
    // fetch("https://swapi.py4e.com/api/people")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setcharacters(data.results);
    //   });

    async function fetchData() {
      const res = await fetch("https://swapi.py4e.com/api/people");
      const data = await res.json();

      const enriched = await Promise.all(
        data.results.map(async (person) => {
          const films = await Promise.all(
            person.films.map(async (url) => {
              const res = await fetch(url);
              return (await res.json()).title;
            })
          );
          const vehicles = await Promise.all(
            person.vehicles.map(async (url) => {
              const res = await fetch(url);
              return (await res.json()).name;
            })
          );
          return { name: person.name, films, vehicles };
        })
      );
      setcharacters(enriched);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Star Wars Characters</h1>
      <table caption="Star Wars Characters">
        <thead>
          <tr>
            <th>Character Name</th>
            <th>Films</th>
            <th>Vehicles</th>
          </tr>
        </thead>
        <tbody>
          {characters.map((char, index) => (
            <tr key={index}>
              <td>{char.name}</td>
              <td>{char.films.length ? char.films.join(", ") : "-"}</td>
              <td>{char.vehicles.length ? char.vehicles.join(", ") : "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ul></ul>
    </div>
  );
};

export default Starwars;
