/**
 * Verifies whether the url starts with http:// or https://
 * @function
 * @param {string} url - The url of the portfolio site
 * @returns {boolean} 
 */
 const isValidUrl = (url) => {
  return url.indexOf("https://") === 0 || url.indexOf("http://") === 0
 }
 
 /**
 * Our CMS does not validate urls,
 * urls are entered in manually by the author,
 * so this is to ensure a valid url to navigate to
 * @function
 * @param {string} url - The url of the portfolio site
 * @returns {string} url - The passed in url or a new url 
 * with https appended to it
 */
 export const validUrl = (url = "") => {
    const https = "https://";
    const trimmedUrl = url.trim();
  
    if (isValidUrl(trimmedUrl)) {
      return trimmedUrl;
    }
    return https + trimmedUrl;
  };