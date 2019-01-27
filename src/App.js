import React from "react";
import Titles from "./components/Titles.js";
import Form from "./components/Form.js";
import Weather from "./components/Weather.js";

const api_key = "964cb9513e0ee480a2f32f64a4d6ce9f";

class App extends React.Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined, 
    humidity: undefined,
    description: undefined,
    error: undefined

  }

  getWeather = async (event) => {
    event.preventDefault();

    const city = event.target.elements.city.value;
    const country = event.target.elements.country.value;
    
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=964cb9513e0ee480a2f32f64a4d6ce9f`);

    const data = await api_call.json();

    if(city && country) {
      console.log(data);
      
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
  
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined, 
        humidity: undefined,
        description: undefined,
        error: "Please enter the values"
      });
    }
  }

  render(){
    return (
      <div>
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-xs-5 title-container">
                <Titles />
              </div>
              <div className="col-xs-7 form-container">
                <Form getWeather={this.getWeather} />
                <Weather 
                  weather={this.state} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
