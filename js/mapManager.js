import { AMAP_CONFIG } from './config.js';

let mapInstance;

export async function initMap() {
    return new Promise((resolve, reject) => {
        window.AMapLoader.load({
            key: AMAP_CONFIG.key,
            version: AMAP_CONFIG.version,
            plugins: AMAP_CONFIG.plugins
        }).then(AMap => {
            mapInstance = new AMap.Map('map', {
                viewMode: '2D',
                center: AMAP_CONFIG.center,
                zoom: AMAP_CONFIG.zoom
            });
            resolve(AMap);
        }).catch(reject);
    });
}

export function getMapInstance() {
    return mapInstance;
}
