const WeatherData = ({forecast}) => {
    return (
        <>
            <h2>{forecast.day}</h2>
            <p><span>conditions: </span> {forecast.conditions}</p>
            <p><span>time: </span>{forecast.time}</p>
        </>
    );
};

export default WeatherData;