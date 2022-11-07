const Contenedor = require('./class');
const productos = new Contenedor('./productos.json');

async function ejecutar() {

    const objeto1 = {
        title : "mouse",
        price : 50,
        thumbnail: "url",
    }

    const objeto2 = {
        title : "teclado",
        price : 200,
        thumbnail: "url",
    }
    
    const objeto3 = {
        title: "audifono",
        price : 120,
        thumbnail: "url",
    }

    // await productos.getAll()
    //     .then(a => console.log(a));
    
    // await productos.deleteAll()
    //     .then(a => console.log("Se borraron todos los elementos"));

    // await productos.save(objeto1);
    // await productos.save(objeto2);
    // await productos.save(objeto3);       
    
    // await productos.getById(4)
    //     .then(id => console.log(id));
    
    // await productos.deleteById(5);
}

ejecutar();