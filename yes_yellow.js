const sessionStorageValue = sessionStorage.getItem('telegram-mini-apps-launch-params');
const decodedValue = decodeURIComponent(sessionStorageValue);
const startIndex = decodedValue.indexOf('tgWebAppData=') + 13;
const endIndex = decodedValue.indexOf('&', startIndex);
const extractedString = decodedValue.substring(startIndex, endIndex);
console.log(extractedString);
