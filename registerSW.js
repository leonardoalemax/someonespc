if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/someonespc/prompt-sw.js', { scope: '/someonespc/' })})}