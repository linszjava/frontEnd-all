// interface
interface Car {

    start(): void;
    stop(): void;
}

class BMW implements Car {
    start() {
        console.log('BMW start');
    }
    stop() {
        console.log('BMW stop');
    }
}

const bmw = new BMW();
bmw.start();
bmw.stop();
