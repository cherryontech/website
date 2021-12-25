// Our CMS does not validate urls,
// urls are entered in manually by the author,
// so this is to ensure a valid url to navigate to
const validPortfolioUrl = (url = "") => {
    const https = "https://";
  
    if (url.includes(https) || url.includes("http://")) {
      return url;
    }
    return https + url;
  };