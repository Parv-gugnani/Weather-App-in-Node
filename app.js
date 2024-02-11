const request = require("request");
const myApi = process.env.myApi;

// Url
const url = `https://api.tomorrow.io/v4/weather/forecast?location=42.3478,-71.0466&apikey=${myApi}`;

request({ url: url, json: true }, (error, response) => {
  if (error) {
    console.error("Error:", error);
  } else {
    console.log("API Response:", response.body);
  }
});
