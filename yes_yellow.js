const sessionStorageValue = sessionStorage.getItem('telegram-mini-apps-launch-params');
// const decodedValue = decodeURIComponent(sessionStorageValue);
const startIndex = sessionStorageValue.indexOf('tgWebAppData=') + 13;
const endIndex = sessionStorageValue.indexOf('&tgWebAppPlatform', startIndex);
const extractedString = sessionStorageValue.substring(startIndex, endIndex);
console.log(extractedString);
