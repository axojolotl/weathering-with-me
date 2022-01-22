import request from "request";

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=73665dadafeaaac2296d1c346a620642&query=${latitude},${longitude}&units=f`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service");
    } else if (body.error) {
      callback("Unable to find location");
    } else {
      callback(
        undefined,
        `It is ${body.current.weather_descriptions[0]}. The temperature is ${body.current.temperature}. It feels like ${body.current.feelslike}.`
      );
    }
  });
};

export default forecast;
