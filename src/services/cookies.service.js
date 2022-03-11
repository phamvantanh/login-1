import Cookies from "js-cookie";

const CookiesService = (function () {
  let _service;

  function _getService() {
    if (!_service) {
      _service = this;
      return _service;
    }
    return _service;
  }
  function _setToken(token) {
    Cookies.set("access_token", token, { expires: 1 }); //1days
  }

  function _getToken() {
    return Cookies.get("access_token");
  }
  function _clearToken() {
    Cookies.remove("access_token");
  }
  return {
    getService: _getService,
    setToken: _setToken,
    getToken: _getToken,
    clearToken: _clearToken,
  };
})();
export default CookiesService;