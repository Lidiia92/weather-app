import React from "react";
import kelvinToFahrenheit from 'kelvin-to-fahrenheit';
import '../App.css';


class Weather extends React.Component {
    render() {
        const temp = Math.round(kelvinToFahrenheit(parseFloat(this.props.weather.temperature)));
        return(
            <div className="weather__info">
                {this.props.weather.city && this.props.weather.country && <p className="weather__key">Location: <span className="weather__value">{this.props.weather.city}, {this.props.weather.country}</span></p>}
                {this.props.weather.temperature && <p className="weather__key">Temperature: <span className="weather__value">{temp}</span></p>}
                {this.props.weather.humidity && <p className="weather__key">Humidity: <span className="weather__value">{this.props.weather.humidity}</span></p>}
                {this.props.weather.description && <p className="weather__key">Conditions: <span className="weather__value">{this.props.weather.description}</span></p>}
                {this.props.weather.error && <p className="weather__key"><span>{this.props.weather.error}</span></p>}
            </div>
        );
    }
}

export default Weather;