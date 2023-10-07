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
const url = `https://api.weatherstack.com/current?access_key=${myApi}&query=New%20York`;

request({ url: url }, (error, response) => {
  // console.log(response);
  const data = JSON.parse(response.body);
  console.log(data.current);
});
