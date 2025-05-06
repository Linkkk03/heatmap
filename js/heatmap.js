import { generateHeatmapData } from './utils.js';
import { getMapInstance } from './mapManager.js';

let heatmap;

export function initHeatmap(AMap) {
    const map = getMapInstance();
    heatmap = new AMap.HeatMap(map, {
        radius: 40,
        opacity: [0.6, 0.8],
        gradient: {
            0.4: 'blue',
            0.6: 'cyan',
            0.7: 'lime',
            0.8: 'yellow',
            1.0: 'red'
        },
        zooms: [3, 18]
    });
    
    refreshHeatmap();
    setInterval(refreshHeatmap, 5000);
}

function refreshHeatmap() {
    heatmap.setDataSet({
        data: generateHeatmapData(),
        max: 100
    });
}
