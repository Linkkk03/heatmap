import { initMap } from './mapManager.js';
import { initHeatmap } from './heatmap.js';
import { initMarkers } from './markers.js';

async function initializeApp() {
    try {
        const AMap = await initMap();
        initHeatmap(AMap);
        initMarkers(AMap);
    } catch (error) {
        console.error('应用初始化失败:', error);
        alert('地图加载失败，请刷新重试');
    }
}

// 启动应用
initializeApp();
