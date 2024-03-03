import mqtt from "mqtt";

let client = mqtt.connect("mqtt://192.168.1.88");

function setup(mainWindow) {
    client.on("connect", () => {
        client.subscribe("garage/#", (err) => {
    
        });
      });
    
      client.on("message", (topic, message) => {
        // message is Buffer
        //console.log(message.toString());
        mainWindow.webContents.send('update', message.toString());
      });
}

export { setup };

  