var Gpio = require('onoff').Gpio,
    led = new Gpio(17, 'out'),
    interval = 1000,
    blink = function(interval) {
      if (interval > 0) {
        led.writeSync(led.readSync() === 0 ? 1 : 0);
        interval -= 100;
        setTimeout(function() {
          blink(interval);
        }, interval);
      } else {
        led.writeSync(0); // turn LED off
        led.unexport(); // unexport GPIO and free resources
      }
    };

blink(interval);
