import http from "node:http";
import { getDataFromDB } from "./db.js";
import { sendJSONResponse } from './utils/sendJSONResponse.js'

const PORT = 8000;
const server = http.createServer(async (req, res) => {
  const destinations = await getDataFromDB();
  if (req.url === "/api" && req.method === "GET") {
    // res.end("This is from the server");
       sendJSONResponse(res, 200, destinations)
   
  } else if (req.url.startsWith("/api/continent") && req.method === "GET") {
    const continent = req.url.split("/").pop();

    const filteredData = destinations.filter((destination) => {
      return destination.continent.toLowerCase() === continent.toLowerCase();
    });
  sendJSONResponse(res, 200, filteredData)
    
  } else {
     sendJSONResponse(res, 404, ({
      error: "not found",
      message: "The requested route does not exist"
    })
    )
  }
  //     res.write("this is some data")
  // res.end("hello from server!", 'utf8', ()=> console.log('response end'))
});

server.listen(PORT, () => console.log(`server running on port: ${PORT}`));
