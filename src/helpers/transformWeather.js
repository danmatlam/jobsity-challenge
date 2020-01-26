import {
    CLOUD,
    SUN,
    RAIN,
    SNOW,
    THUNDER,
    DRIZZLE,
} from '../constants/weathers';
import moment from 'moment';


const icons = {
    [CLOUD]: 'cloud',
    [SUN]: 'day-sunny',
    [RAIN]: 'rain',
    [SNOW]: 'snow',
    [THUNDER]: 'day-thunderstore',
    [DRIZZLE]: 'day-showers',

}

const getWeatherState = weather => {
    const { id } = weather;

    if (id < 300) {
        return THUNDER;
    } else if (id < 400) {
        return DRIZZLE;
    } else if (id < 600) {
        return RAIN;
    } else if (id < 700) {
        return SNOW;
    } else if (id === 800) {
        return SUN;
    } else {
        return CLOUD;
    }

}

export const transformWeather = weather_data => {
    const { humidity, temp } = weather_data.main;
    const { speed } = weather_data.wind;
    const weatherState = getWeatherState(weather_data.weather[0]);
    const data = {
        humidity,
        temperture: temp,
        weatherState,
        wind: `${speed} m/s`
    }
    return data;
}


export const transformForeCast = forecast_data => {
    const foreCastArr = forecast_data.list;
    const foreCastArrAux = []
    for (let i = 0; i < foreCastArr.length; i++) {
        const weather_data = foreCastArr[i]
        let { humidity, temp } = weather_data.main;
        let { speed } = weather_data.wind;
        let weatherState = getWeatherState(weather_data.weather[0]);
        const dateObj = new Date(weather_data.dt_txt);
        const momentObj = moment(dateObj);
        foreCastArrAux.push({
            humidity,
            temperture: temp,
            weatherState,
            wind: `${speed} m/s`,
            day: momentObj.format('YYYY/MM/DD'),
            hour: momentObj.format('HH:00')

        })

    }
    return foreCastArrAux;
}


const validateHour = (hour) => {
    let onlyHour = parseInt(hour[0] + '' + hour[1]);
    let onlyMinutes = parseInt(hour[3] + '' + hour[4]);
    if (onlyMinutes > 30) {
        onlyHour++;
    };
    const multiplex3 = n => {
        if (n > 0)
            return Math.ceil(n / 3.0) * 3;
        else if (n < 0)
            return Math.floor(n / 3.0) * 3;
        else
            return 3;
    };
    let multiplex = multiplex3(onlyHour);
    if (multiplex > 21) {
        return 21;
    } else if (multiplex < 0) {
        return 0
    } else {
        return multiplex;
    }
}

export const filterForecast = (forecastArray, selectedDate, selectedHour) => {
    const validHour = validateHour(selectedHour)+':00';
    let forecastAux = forecastArray.filter(item => item.day === selectedDate);
        forecastAux = forecastAux.filter(item => item.hour === validHour);
    return forecastAux;

}