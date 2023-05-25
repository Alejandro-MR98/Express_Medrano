const fs = require("fs");
const path = require("path");

const pathJSON = path.join(__dirname, "./automovil.json");

const raedJSON = () => {
    const template = {
        automovil: [],
    };
    try {
        const datosCompletos = fs.readFileSync(pathJSON, "utf8");
        if (datosCompletos.length === 0) {  
            return template;
            }
    } catch (error) {
        fs.writeFileSync(pathJSON, JSON.stringify( template, null, 4 ) , "utf-8");
        }
        const datosCompletos = fs.readFileSync(pathJSON, "utf-8")
        return JSON.parse(datosCompletos);
};
    
    const writeJSON = (datosCompletos) => {
        const template = {
            automovil: datosCompletos,
        };

        fs.writeFileSync(pathJSON, JSON.stringify(template, null,4), "utf-8");
    };


    const {automovil} = raedJSON ();
    
    automovil.push ({
        vehiculo: "Gol",
        marca: "Wolsvagen",
        modelo: "2016",
    });

    writeJSON(automovil);

