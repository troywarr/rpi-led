var Gpio = require('onoff').Gpio,
    led = new Gpio(17, 'out'),
    iv = setInterval(function() {
      led.writeSync(led.readSync() === 0 ? 1 : 0);
    }, 500);

// stop blinking the LED and turn it off after 5 seconds
setTimeout(function() {
  clearInterval(iv); // stop blinking
  led.writeSync(0); // turn LED off
  led.unexport(); // unexport GPIO and free resources
}, 5000);
