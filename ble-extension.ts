/**
* Makecode Bluetooth Low Energy Data Connector Package.
* created by: Verena Fastenbauer
*/

/**
 * Bluetooth Low Energy (BLE) Data Connector
 */
//% weight=0 color=#0082FC icon="\uf294" block="BLE Data Connector"
namespace SmartfeldBLE {
    let name : string = "Unknown";

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
     * start BLE Temperature Service
     */
    //% blockId="startTemperatureService" block="start BLE Temperature Service"
    export function startTemperatureService() : void {
        bluetooth.startTemperatureService();
    }

}