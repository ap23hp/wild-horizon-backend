import http from "node:http";
import { getDataFromDB } from "./db.js";
const PORT = 8000;
const server = http.createServer(async (req, res) => {
  const destinations = await getDataFromDB();
  if (req.url === "/api" && req.method === "GET") {
    // res.end("This is from the server");
    res.setHeader("Content-Type", "application/json");
    res.statusCode=200
    res.end(JSON.stringify(destinations));
  }else {
     res.setHeader('Content-Type', 'application/json')
    res.statusCode = 404
    res.end(JSON.stringify( {error: "not found", message: "The requested route does not exist"}))
  }
  //     res.write("this is some data")
  // res.end("hello from server!", 'utf8', ()=> console.log('response end'))
});

server.listen(PORT, () => console.log(`server running on port: ${PORT}`));
