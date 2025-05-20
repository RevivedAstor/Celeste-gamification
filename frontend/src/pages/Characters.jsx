import { useEffect, useState } from "react";

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const url = query
      ? `http://localhost:4000/characters/search?q=${encodeURIComponent(query)}`
      : `http://localhost:4000/characters`;

    fetch(url)
      .then(res => res.json())
      .then(setCharacters);
  }, [query]);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Characters</h1>
      <input
        type="text"
        placeholder="Search by name..."
        className="p-2 mb-4 block text-black rounded"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {characters.map(c => (
          <li key={c.id}>
            <strong>{c.name}</strong>: {c.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
