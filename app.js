/*
//asynchronous video
console.log("Starting");

//this will stop the time
setTimeout(() => {}, 2000);
setTimeout(() => {
  console.log("0 sec code");
}, 0);
// , this is time milliseconds we added 2 sec timeout
console.log("stoping");
*/
const request = require("request");
const myApi = process.env.myApi;

//Url
const url = `https://api.tomorrow.io/v4/weather/forecast?location=42.3478,-71.0466&apikey=${myApi}`;

request({ url: url, json: true }, (error, response) => {
  // console.log(response);
  // const data = JSON.parse(response.body);
  // console.log(data.current);
  console.log(response.body.currently);
});
