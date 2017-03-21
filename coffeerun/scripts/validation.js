(function(window) {
    'use strict';
    var App = window.App || {};

    var Validation = {
        isCompanyEmail: function(email) {
            return /.+@bignerdranch\.com$/.test(email);
        },
        isDecaf: function(coffeeOrder, strength) {
            if (/\bdecaf/i.test(coffeeOrder)) {
                if (strength <= 20) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    };
    App.Validation = Validation;
    window.App = App;
})(window);
