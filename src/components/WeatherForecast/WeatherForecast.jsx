import './WeatherForecast.css';
import WeatherIcon from './WeatherIcon.jsx';
import WeatherData from './WeatherData.jsx';

const WeatherForecast = ({forecast}) => {
    return (
        <>
            <div className='weather'>
                <WeatherIcon forecast={forecast}/>
                <WeatherData forecast={forecast}/>
            </div>
        </>
    )
};

export default WeatherForecast;