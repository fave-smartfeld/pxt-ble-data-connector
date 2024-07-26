/**
* Makecode Bluetooth Low Energy Data Connector Package.
* created by: Verena Fastenbauer
*/

/**
 * Bluetooth Low Energy (BLE) Data Connector
 */
//% weight=0 color=#0082FC icon="\uf294" block="BLE Data Connector"
namespace SmartfeldBLE {

    /**
     * gets info
     */
    //% blockId="getInfo" block="get BLE Info"
    export function getInfo(): string {
        return "BLE Data Connector Info";
    }

    /**
     * start BLE Temperature Service
     */
    //% blockId="startTemperatureService" block="start BLE Temperature Service"
    export function startUartService() : void {
        bluetooth.startUartService();
    }
}