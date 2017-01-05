export default function getBaseUrl() {
	const herokuUrl = 'https://nameless-shelf-77449.herokuapp.com/';
  return getQueryStringParameterByName('useMockApi') ? 'http://localhost:3001/' : herokuUrl;
}

// vanailla js to get parameter from querystring
function getQueryStringParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}