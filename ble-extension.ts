/**
* Makecode Bluetooth Low Energy Data Connector Package.
* created by: Verena Fastenbauer
*/


/**
 * Different Value Types for CO2 Sensor
 */
enum CO2SensorValueTypes {
    //% block="Temperature"
    Temperature = 0,
    //% block="Humidity"
    Humidity = 1,
    //% block="CO2"
    CO2 = 2
}

/**
 * Smartfeld Bluetooth Low Energy (BLE) Data Connector
 */
//% weight=0 color=#0fbc11 icon="\uf294" block="Smartfeld BLE Data Connector"
namespace SmartfeldBLE {

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
    export function startBLEContinousMeasurementOfCO2Sensor() : void {
        control.inBackground(() => {
            scd30.enableContinuousMeasurement();
            while (true) {                
                scd30.readMeasurement();

                const data = { 
                    temperature: scd30.readTemperature(),
                    humidity: scd30.readHumidity(),
                    co2: scd30.readCO2()
                };

                //bluetooth.uartWriteString(JSON.stringify(data));

                bluetooth.uartWriteString(JSON.stringify({ temp: scd30.readTemperature() }));
                bluetooth.uartWriteString(JSON.stringify({ hum: scd30.readHumidity() }));
                bluetooth.uartWriteString(JSON.stringify({ co2: scd30.readCO2() }));

                basic.pause(3000)
            }
        })
    }

    /**
     * gets sensor value of Smartfeld CO2 Sensor
     */
    //% blockId="getSensorValue" block="get value of CO2 Sensor | $sensorType"
    export function getSensorValue(sensorType: CO2SensorValueTypes): number {
        scd30.readMeasurement();
        switch (sensorType) {
            case CO2SensorValueTypes.Temperature:
                return scd30.readTemperature();
                break;
            case CO2SensorValueTypes.Humidity:
                return scd30.readHumidity();
                break;
            case CO2SensorValueTypes.CO2:
                return scd30.readCO2();
                break;
            default:
                return 0;
        }
    }


}