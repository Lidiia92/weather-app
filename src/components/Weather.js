import React from "react";
import kelvinToFahrenheit from 'kelvin-to-fahrenheit';


class Weather extends React.Component {
    render() {
        const temp = Math.round(kelvinToFahrenheit(parseFloat(this.props.weather.temperature)));
        return(
            <div>
                {this.props.weather.city && this.props.weather.country && <p>Location: {this.props.weather.city}, {this.props.weather.country}</p>}
                {this.props.weather.temperature && <p>Temperature: {temp}</p>}
                {this.props.weather.humidity && <p>Humidity: {this.props.weather.humidity}</p>}
                {this.props.weather.description && <p>Conditions: {this.props.weather.description}</p>}
                {this.props.weather.error && <p>{this.props.weather.error}</p>}
            </div>
        );
    }
}

export default Weather;