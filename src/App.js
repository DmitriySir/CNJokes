import React, { useEffect, useState } from "react";
import JokesItem from "./JokesItem";
import { fetchJokes } from "./JokesApi";

function App() {
  const [joke, setJoke] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  function search(event){
    setSearchTerm(event.target.value);
  }

  

  useEffect(() => {
    fetchJokes(searchTerm, setJoke, setError, setLoading);
  }, [searchTerm]);

  if (loading) {
    return <h3>Идёт загрузка</h3>;
  }

  if (error) {
    return <h3>Ошибка</h3>;
  }

  return (
    <>
      <input type="text" onChange={search} placeholder="Поиск шуток"/>
      {searchTerm.length > 3 && <p> Найдено шуток по запросу: {joke.total}</p>}
      {searchTerm.length > 3 && joke.total && <JokesItem data={joke} />}
    </>
  );
}

export default App;
