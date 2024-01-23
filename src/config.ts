let BASE_URL = "";
const domainUrl = window.location.host;

switch (domainUrl) {
  default:
    BASE_URL = "https://test-twitter-api.lixium.dev";
    break;
}

export { BASE_URL };
