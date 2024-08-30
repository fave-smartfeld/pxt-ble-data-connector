/**
* Makecode Bluetooth Low Energy Data Connector Package.
* created by: Verena Fastenbauer
*/

/**
 * Bluetooth Low Energy (BLE) Data Connector
 */
//% weight=0 color=#0082FC icon="\uf294" block="BLE Data Connector"
namespace SmartfeldBLE {

    enum ValueType {
        Temperature,
        Humidity,
        CO2
    }

    let name : string = "Unknown";
    let scd30 = new SCD30();

    /**
     * gets info
     */
    //% blockId="getInfo" block="get BLE Info"
    export function getInfo(): string {
        return "Micro:bit " + name;
    }
    
    /**
     * gets device name
     */
    //% blockId="getDeviceName" block="get Device Name"
    export function getDeviceName(): string {
        return name;
    }

    /**
     * sets device name
     */
    //% blockId="setDeviceName" block="set Device Name | $deviceName"
    export function setDeviceName(deviceName: string): void {
        name = deviceName;
    }

    /**
     * start Smartfeld CO2 Continous Measurement BLE Service
     */
    //% blockId="startService" block="start Smartfeld CO2 Continous Measurement BLE Service"
    export function startCO2ContinousMeasurementService() : void {
        scd30.enableContinuousMeasurement();
    }

    /**
     * gets temperature value of Smartfeld CO2 Sensor
     */
    //% blockId="getTemperature" block="get temperature of CO2 Sensor"
    export function getTemperature(): number{
        scd30.readMeasurement();
        return scd30.readTemperature();
    }

    /**
     * gets humidity value of Smartfeld CO2 Sensor
     */
    //% blockId="getHumidity" block="get humidity of CO2 Sensor"
    export function getHumidity(): number {
        scd30.readMeasurement();
        return scd30.readHumidity();
    }

    /**
     * gets CO2 value of Smartfeld CO2 Sensor
     */
    //% blockId="getCO2" block="get temperature of CO2 Sensor"
    export function getCO2(): number {
        scd30.readMeasurement();
        return scd30.readCO2();
    }

}