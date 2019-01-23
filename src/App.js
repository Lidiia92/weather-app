import React from "react";
import Titles from "./components/Titles.js";
import Form from "./components/Form.js";
import Weather from "./components/Weather.js";

const api_key = "964cb9513e0ee480a2f32f64a4d6ce9f";

class App extends React.Component {

  getWeather = async (event) => {
    event.preventDefault();

    const city = event.target.elements.city.value;
    const country = event.target.elements.country.value;
    
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=964cb9513e0ee480a2f32f64a4d6ce9f`);

    const data = await api_call.json();
    console.log(data);
  }

  render(){
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather}/>
        <Weather />
      </div>
    );
  }
}

export default App;
