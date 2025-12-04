import http from "node:http";
import { getDataFromDB } from "./db.js";
import { sendJSONResponse } from "./utils/sendJSONResponse.js";
import { getDataByPathParams } from "./utils/getDataByPathParams.js";
import { getDataByQueryParams } from './utils/getDataByQueryParams.js'

const PORT = 8000;
const server = http.createServer(async (req, res) => {
  //query params
  const urlObj = new URL(req.url, `http://${req.headers.host}`);

  const queryObj = Object.fromEntries(urlObj.searchParams);

  const destinations = await getDataFromDB();
  if (urlObj.pathname === "/api" && req.method === "GET") {
    // let filteredDestinations = destinations;
 let filteredData = getDataByQueryParams(destinations, queryObj)
    // console.log(queryObj);
    // update filteredDestinations

    // sendJSONResponse(res, 200, filteredDestinations);
     sendJSONResponse(res, 200, filteredData)
  } else if (req.url.startsWith("/api/continent") && req.method === "GET") {
    const continent = req.url.split("/").pop();
    const filteredData = getDataByPathParams(
      destinations,
      "continent",
      continent
    );

    sendJSONResponse(res, 200, filteredData);
  } else if (req.url.startsWith("/api/country") && req.method === "GET") {
    const country = req.url.split("/").pop();
    const filteredData = getDataByPathParams(destinations, "country", country);

    sendJSONResponse(res, 200, filteredData);
  } else {
    sendJSONResponse(res, 404, {
      error: "not found",
      message: "The requested route does not exist",
    });
  }
  //     res.write("this is some data")
  // res.end("hello from server!", 'utf8', ()=> console.log('response end'))
});

server.listen(PORT, () => console.log(`server running on port: ${PORT}`));
