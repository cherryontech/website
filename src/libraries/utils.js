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
  
    if (trimmedUrl.includes(https) || trimmedUrl.includes("http://")) {
      return trimmedUrl;
    }
    return https + trimmedUrl;
  };