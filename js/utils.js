import { LOCATIONS } from './config.js';

export function generateWeather() {
    const weatherList = [
        { icon: "☀️", text: "晴天（建议防晒）", min: 20, max: 30 },
        { icon: "⛅", text: "多云（适宜出行）", min: 18, max: 28 },
        { icon: "🌧️", text: "小雨（记得带伞）", min: 15, max: 25 },
        { icon: "🌤️", text: "晴转多云", min: 19, max: 27 }
    ];
    
    const weather = weatherList[Math.floor(Math.random() * weatherList.length)];
    return {
        icon: weather.icon,
        text: weather.text,
        temp: (Math.random() * (weather.max - weather.min) + weather.min).toFixed(1)
    };
}

export function generatePlayTime() {
    const minutesOptions = [30, 45, 60, 90, 120, 150, 180];
    const minutes = minutesOptions[Math.floor(Math.random() * minutesOptions.length)];
    return minutes < 60 ? 
        `${minutes}分钟` : 
        `${Math.floor(minutes/60)}小时${minutes%60 ? `${minutes%60}分钟` : ''}`;
}

export function generateHeatmapData() {
    return LOCATIONS.map(item => ({
        lng: item.lng,
        lat: item.lat,
        count: Math.min(100, Math.floor(Math.random() * 120))
    }));
}
