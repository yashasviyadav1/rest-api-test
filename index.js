const express = require("express");
const app = express();
const PORT = 8080;
app.use(express.json());

app.post("/bfhl", (req, res) => {
  const data = req.body.data;
  const user_id = "john_doe_17091999";
  const email = "john@xyz.com";
  const roll_number = "ABCD123";

  const odd_numbers = [];
  const even_numbers = [];
  const alphabets = [];

  data.forEach((item) => {
    if (typeof item === "number" || !isNaN(Number(item))) {
      const num = Number(item);
      if (num % 2 === 0) {
        even_numbers.push(num);
      } else {
        odd_numbers.push(num);
      }
    } else if (typeof item === "string") {
      alphabets.push(item.toUpperCase());
    }
  });

  const response = {
    isSuccess: true,
    user_id: user_id,
    email: email,
    roll_number: roll_number,
    odd_numbers: odd_numbers,
    even_numbers: even_numbers,
    alphabets: alphabets,
  };

  return res.status(200).json(response);
});

app.get("/test", (req, res) => {
  return res.status(200).json({ test: "test" });
});
app.get("/", (req, res) => {
  res.send("Yashasvi yadav backendd!");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
