import React, { Component } from "react";
import Header from "./components/content/header";
import Form from "./components/forms/weatherForm";
import Footer from "./components/content/footer";
import WeatherBoxs from "./components/weather-boxs/weather-boxs";

const API_KEY = "32d3754aa587d89a3b2a89ec3b74a520";

class App extends Component {
  state = {
    weather: "not found",
    city: undefined,
    country: undefined,
    temperature: undefined,
    humidity: undefined,
    description: undefined,
    error: ""
  };
  /* Functions */
  getWeather = async e => {
    e.preventDefault();
    const city_value = e.target.elements.city.value;
    const country_value = e.target.elements.country.value;
    // If Found Value
    if (city_value && country_value) {
      const API_CALL = await fetch(
        "http://api.openweathermap.org/data/2.5/weather?q=" +
          city_value +
          "," +
          country_value +
          "&appid=" +
          API_KEY
      );
      const API_JSON = await API_CALL.json();
      console.log(API_JSON);
      this.setState({
        weather: "found",
        city: city_value,
        country: country_value,
        temperature: API_JSON.main.temp,
        humidity: API_JSON.main.humidity,
        description: API_JSON.weather[0].description,
        error: false
      });
      // If Found Error
    } else {
      this.setState({
        weather: "not found",
        city: undefined,
        country: undefined,
        error: "Pliz Enter The Value !"
      });
    }
  };
  /*==================*/
  render() {
    return (
      <div className="font-family-normal">
        <Header />
        <div className="container mt-5">
          <Form get_weather={this.getWeather} />
          <div className="container">
            {this.state.error && (
              <span className="alert row alert-danger">{this.state.error}</span>
            )}
          </div>
          {this.state.weather === "found" && (
            <WeatherBoxs
              city={this.state.city}
              country={this.state.country}
              temp={this.state.temperature}
              humidity={this.state.humidity}
              description={this.state.description}
            />
          )}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
