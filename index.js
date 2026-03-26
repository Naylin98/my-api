import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/api/trx", async (req, res) => {
  try {
    const t = req.query.t || "";
    const url = `http://cyb3rr00t.tech/api/trx-data?t=${t}`;

    const response = await fetch(url);
    const data = await response.json();

    res.json({
      success: true,
      count: data.length,
      data
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message
    });
  }
});

app.get("/", (req, res) => {
  res.send("API is running ??");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running");
});