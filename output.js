//Wed Feb 12 2025 01:47:10 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(function (_0x30894d) {
  if (!_0x30894d.serverParams) {
    _0x30894d.serverParams = {};
  }
  function _0x17ece2() {
    if (_0x30894d.scene && _0x30894d.serverParams.u) {
      if (_0x30894d.serverParams.u.startsWith("hd1_")) {
        _0x30894d.serverParams.u = md5(_0x30894d.serverParams.u + "t-w-o-cv19626" + _0x30894d.serverParams.u);
      } else {
        _0x30894d.serverParams.u = "hd1_" + md5(_0x30894d.scene.id + "hd.asd2ga1wet9bk5tiz" + _0x30894d.scene.userId + _0x30894d.serverParams.u);
        _0x30894d.setTimeout(_0x17ece2, 400);
      }
    } else {
      _0x30894d.setTimeout(_0x17ece2, 300);
    }
  }
  _0x30894d.setTimeout(_0x17ece2, 500);
})(window);