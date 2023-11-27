/**
 * Author: Mohsin Jessa
 * 
 * Date: 27-Nov-2023
 * 
 * STEAMetics Canada
 * 
 * Items needed:
 * 
 * MicroBit
 * 
 * ElecFreaks-SensorBit
 * 
 * ElecFreaks-Sliding potentiometer
 * 
 * jumper cables (F-F)and(F-M for breadboard)
 * 
 * LED (any color but with good brightness level - RED is better)
 * 
 * Breadboard
 * 
 * Resistor
 * 
 * We use sliding Potentiometer connected to MicroBit's Pin 1 and an LED connected to the Signal and Ground of Pin2
 * 
 * The potentiometer's LED is connected to Pin8 (signal only)
 * 
 * The LED is connected on Breadboard while the MicroBit is connected to ElecFreak's SensorBit and powered by USB connection from Laptop.
 * 
 * Operation:
 * 
 * The external LED connected on the breadboard will change it's brightness based on the position of the slider of the potentiometer.
 * 
 * This version will also plot a bar graph as the potentiometer slide switch is changing as well as show numerical values and plot a graph seen on the Serial Device
 */
let Off = 0
let On = 1
let P_val = 0
basic.forever(function () {
    P_val = pins.analogReadPin(AnalogPin.P1)
    led.plotBarGraph(
    P_val,
    1023,
    true
    )
    pins.analogWritePin(AnalogPin.P2, P_val)
    if (P_val > 500) {
        pins.digitalWritePin(DigitalPin.P8, On)
    } else {
        pins.digitalWritePin(DigitalPin.P8, Off)
    }
})
