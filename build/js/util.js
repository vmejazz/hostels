'use strict';

(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  var isEscEventPress = function (evt, action, modal) {
    if (evt.keyCode === ESC_KEYCODE || evt.which === ESC_KEYCODE) {
      action(modal);
    }
  };

  var isEnterEventPress = function (evt, action) {
    if (evt.keyCode === ENTER_KEYCODE || evt.which === ENTER_KEYCODE) {
      action();
    }
  };

  var popupClose = function () {
    var popup = window.data.mapPins.querySelector('.popup');
    if (popup) {
      popup.remove();
    }
  };

  window.util = {
    'isEscEventPress': isEscEventPress,
    'isEnterEventPress': isEnterEventPress,
    'popupClose': popupClose
  };
})();
