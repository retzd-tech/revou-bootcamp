// app.js
import * as mathOperations from "./mathOperations";
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  const pi = mathOperations.pi;
  const e = mathOperations.e;
  const sumResult = mathOperations.add(5, 3);
  const subResult = mathOperations.subtract(8, 3);

  // Sending the results as a response
  res.end(`
    <h1>Math Operations</h1>
    <p>The value of pi is: ${pi}</p>
    <p>The value of e is: ${e}</p>
    <p>The result of 5 + 3 is: ${sumResult}</p>
    <p>The result of 8 - 3 is: ${subResult}</p>
  `);
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
