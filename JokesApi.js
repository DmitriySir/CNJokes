
export async function fetchJokes(searchTerm, setJoke, setError, setLoading) {
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
  