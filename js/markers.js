import { ICONS, LOCATIONS } from './config.js';
import { generateWeather, generatePlayTime } from './utils.js';
import { getMapInstance } from './mapManager.js';

export function initMarkers(AMap) {
    const map = getMapInstance();
    
    LOCATIONS.forEach(location => {
        const marker = createMarker(AMap, location);
        setupMarkerEvents(AMap, marker, location);
        marker.setMap(map);
    });
}

function createMarker(AMap, location) {
    const iconUrl = ICONS[location.type] || ICONS['地标景点'];
    return new AMap.Marker({
        position: [location.lng, location.lat],
        content: `<div class="custom-marker" style="background-image: url('${iconUrl}')"></div>`,
        anchor: 'bottom-center',
        title: location.name
    });
}

function setupMarkerEvents(AMap, marker, location) {
    marker.on('click', () => {
        AMap.Popup && AMap.Popup.closeAll();
        showInfoWindow(AMap, marker, location);
    });
}

function showInfoWindow(AMap, marker, location) {
    const weather = generateWeather();
    const playTime = generatePlayTime();
    
    const content = `
        <img src="${location.photo}" class="info-image" 
             onerror="this.src='https://dummyimage.com/280x160/eee/999'">
        <div class="info-title">${location.name}</div>
        <div>类型：${location.type}</div>
        <div class="info-desc">${location.desc}</div>
        <div class="info-weather">
            ${weather.icon} ${weather.text} | 温度：${weather.temp}℃
        </div>
        <div>预计游玩：${playTime}</div>
    `;
    
    new AMap.InfoWindow({
        content: content,
        offset: new AMap.Pixel(0, -40),
        closeWhenClickMap: true
    }).open(getMapInstance(), marker.getPosition());
}
