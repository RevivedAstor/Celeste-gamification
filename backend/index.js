const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Mock data: Celeste characters
const characters = [
  { id: 1, name: "Madeline", role: "Protagonist", description: "Determined climber." },
  { id: 2, name: "Badeline", role: "Shadow Self", description: "Madeline’s darker side." },
  { id: 3, name: "Theo", role: "Friend", description: "Supportive companion." },
];

// Authors of the game
const authors = [
  { name: "Maddy Thorson", role: "Lead Developer" },
  { name: "Noel Berry", role: "Designer" },
];

// Basic routes
app.get("/", (req, res) => res.send("Celeste API is running"));

app.get("/characters", (req, res) => res.json(characters));

app.get("/characters/search", (req, res) => {
  const q = req.query.q?.toLowerCase() || "";
  const result = characters.filter(c => c.name.toLowerCase().includes(q));
  res.json(result);
});

app.get("/authors", (req, res) => res.json(authors));

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
