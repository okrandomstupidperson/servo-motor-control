/**
 * Motor control extension
 */
//% color=#0fbc11 icon="\uf085" block="Motor"
namespace motor {

    /**
     * Run motor sequence (demo sweep on P0)
     */
    //% block="run motor sequence"
    export function motor(): void {
        // Sweep servo from 0 to 180 degrees
        for (let angle = 0; angle <= 180; angle += 10) {
            pins.servoWritePin(AnalogPin.P0, angle)
            basic.pause(100)
        }

        // Sweep back from 180 to 0 degrees
        for (let angle = 180; angle >= 0; angle -= 10) {
            pins.servoWritePin(AnalogPin.P0, angle)
            basic.pause(100)
        }
    }

    /**
     * Set servo angle on a given pin
     * @param pin the pin connected to the servo
     * @param angle angle from 0 to 180 degrees
     */
    //% block="set servo on pin %pin|to angle %angle"
    //% angle.min=0 angle.max=180
    //% weight=100
    export function setServo(pin: AnalogPin, angle: number): void {
        pins.servoWritePin(pin, angle)
    }
}