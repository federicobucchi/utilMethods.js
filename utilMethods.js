var utilMethods = (function() {
  var self;
  var constructor;
  var validateData;
  var errorReset;

  var constructor = function() {
    self = this;

    this.version = '0.0.1';
    this.status = 'ok';
    this.error = {
      triggered: false,
      message: '',
      code: ''
    };

    return this;
  };

  var validateData = {
    isString: function(data) {
      if (typeof data !== 'string') {
        self.error.triggered = true;
        self.error.message = 'param should be a string';
        self.error.code = 'TYPE';

        return false;
      } else {
        errorReset();

          return true;
      }
    },

    isNumber: function(data) {
      if (typeof data !== 'number') {
        self.error.triggered = true;
        self.error.message = 'param should be a number';
        self.error.code = 'TYPE';

        return false;
      } else {
        errorReset();

        return true;
      }
    },

    isEmpty: function(data) {
      if (data === '') {
        self.error.triggered = true;
        self.error.message = 'param should be not empty';
        self.error.code = 'EMPTY';

        return true;
      } else {
        errorReset();

        return false;
      }
    },

    exists: function(data) {
      if (data === null && data === undefined) {
        self.error.triggered = true;
        self.error.message = 'param should exist';
        self.error.code = 'UNDNULL';

        return false;
      } else {
        errorReset();

        return true;
      }
    }
  };

  var errorReset = function() {
    self.error.triggered = false;
    self.error.message = '';
    self.error.code = '';
  };

  constructor.prototype = {
    getVersion: {
      val: function () {
        return self.version;
      },

      show: function() {
        alert(self.version);
        return self;
      }
    },

    getStatus: {
      val: function () {
        return self.status;
      },

      show: function() {
        alert(self.status);
        return self;
      }
    },

    from: function(string) {
      if (validateData.isString(string)) {
        var targetString = string;
        var result;

        return {
          remove: function(string) {
            if (validateData.isString(string)) {
              return targetString.replace(string,'');
            }

            if (self.error.triggered) {
              console.error('remove(): ' + self.error.message);
            }
          },

          repeat: function(times) {
            result = targetString;

            if (validateData.isNumber(times)) {
              for (var i = 2; i <= times; i++) {
                result = result + targetString;
              }
            }

            if (self.error.triggered) {
              console.error('repeat(): ' + self.error.message);
            }

            return result;
          }
        }
      }

      if (self.error.triggered) {
        console.error('from(): ' + self.error.message);
      }
    },

    capitalize: function(string) {
      if (validateData.isString(string)) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

      if (self.error.triggered) {
        console.error('capitalize(): ' + self.error.message);
      }
    },

    uppercase: function(string) {
      if (validateData.isString(string)) {
        return string.toUpperCase();
      }

      if (self.error.triggered) {
        console.error('uppercase(): ' + self.error.message);
      }
    },

    lowercase: function(string) {
      if (validateData.exists(string) &&
          !validateData.isEmpty(string) &&
          validateData.isString(string)) {

          return string.toLowerCase();
      }

      if (self.error.triggered) {
        console.error('lowercase(): ' + self.error.message);
      }
    },

    calculate: function(expression) {
      return eval(expression);
    }

  };

  return new constructor();
})();
