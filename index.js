const express = require("express");
const { Client } = require("pg");

const connectionString =
  process.env.DB_URI ||
  "postgresql://postgres:Shadow22!@localhost/acme_icecreamshop_db";

const client = new Client({
  connectionString: connectionString,
});

client.connect().then(() => console.log("DB Connected"));
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/api/flavors", async (req, res) => {
  try {
    const result = await client.query("SELECT * FROM flavors");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: "internal error occurred" });
  }
});

app.get("/api/flavors/:id", async (req, res) => {
  try {
    const result = await client.query("SELECT * FROM flavors WHERE id = $1", [
      req.params.id,
    ]);
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: "internal error occurred" });
  }
});

app.delete("/api/flavors/:id", async (req, res) => {
  try {
    const result = await client.query("DELETE FROM flavors WHERE id = $1", [
      req.params.id,
    ]);
    res.json({ message: "Flavor Deleted" });
  } catch (error) {
    res.status(500).json({ error: "internal error occurred" });
  }
});

app.post("/api/flavors", async (req, res) => {
  try {
    const { name, glutenfree, description, imageurl } = req.body;
    const result = await client.query(
      "INSERT INTO flavors (name, glutenfree, description, imageurl) VALUES ($1, $2, $3, $4)",
      [name, glutenfree, description, imageurl]
    );
    res.json({message: 'Flavor Added'});
  } catch (error) {
    res.status(500).json({ error: "internal error occurred" });
  }
});

app.put("/api/flavors/:id", async (req, res) => {
    try {
      const { name, glutenfree, description, imageurl } = req.body;
      const result = await client.query(
        "UPDATE flavors SET name = $1, glutenfree = $2, description = $3, imageurl = $4 WHERE id = $5",
        [name, glutenfree, description, imageurl,req.params.id]
      );
      res.json({message: 'Flavor Updated'});
    } catch (error) {
        console.log(error)
      res.status(500).json({ error: "internal error occurred" });
    }
  });

app.listen(3000, () => {
  console.log("Server is Running on Port 3000");
});
