import { useEffect, useState } from "react";

export default function About() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/authors")
      .then(res => res.json())
      .then(setAuthors);
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">About Celeste</h1>
      <p className="mb-4">Celeste is a platformer game about climbing a mountain and overcoming inner struggles.</p>
      <h2 className="text-2xl font-semibold mb-2">Game Authors</h2>
      <ul>
        {authors.map((a, i) => (
          <li key={i}>
            {a.name} — {a.role}
          </li>
        ))}
      </ul>
    </div>
  );
}
