import React, { useEffect, useState } from "react";
import JokesItem from "./JokesItem";

function App() {
  const [joke, setJoke] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  function search(event){
    setSearchTerm(event.target.value);
  }

  async function fetchJokes() {
    try {
      if (searchTerm.length > 3) {
        const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${searchTerm}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setJoke(data);
      }
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchJokes();
  }, [searchTerm]);

  if (loading) {
    return <h3>Идёт загрузка</h3>;
  }

  return (
    <>
      <input type="text" onChange={search} placeholder="Поиск шуток"/>
      {joke.total && <p> Найдено шуток по запросу: {joke.total}</p>}
      {searchTerm.length > 3 && joke.total && <JokesItem data={joke} />}
    </>
  );
}

export default App;
