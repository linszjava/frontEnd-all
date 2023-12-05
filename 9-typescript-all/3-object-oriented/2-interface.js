var BMW = /** @class */ (function () {
    function BMW() {
    }
    BMW.prototype.start = function () {
        console.log('BMW start');
    };
    BMW.prototype.stop = function () {
        console.log('BMW stop');
    };
    return BMW;
}());
var bmw = new BMW();
bmw.start();
bmw.stop();
