import View from './View.js'

const WeatherView = Object.create(View)

WeatherView.setup = function (el) {
    this.init(el)
    this.getWeather()
}

WeatherView.getWeather = function() {
    fetch(
        'https://api.openweathermap.org/data/2.5/weather?q=Seoul,kr&appid=d0dbed9f11d7097bfd43f5ceacc27023&units=metric'
    )
        .then((data) => data.json())
        .then((json) => {
            const temper = json.main.temp;
            const icon = json['weather'][0].icon;
            const html = `<span>현재 날씨는<span><br>
                        <img src='/image/${icon}.svg'><br>
                        <span>서울의 온도는 섭씨 ${temper}도 입니다.<span>`;
            this.el.innerHTML = html;
            this.el.style.fontSize = '30px';
        });
}

export default WeatherView