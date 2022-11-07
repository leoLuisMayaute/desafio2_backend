const fs = require('fs').promises;


class Contenedor {
    constructor(path) {
        this.path = path;
    }

    async save(objeto) {
        try {
            const obtenerTodo = await fs.readFile(this.path, "utf-8");
            const data = JSON.parse(obtenerTodo);
            
            let id;
            if (data.length === 0) {
                id = 1;
            }
            id = data[data.length - 1].id + 1;

            const newProduct = { ...objeto, id };
            data.push(newProduct);
            
            await fs.writeFile(this.path, JSON.stringify(data, null, 2), "utf-8");
            return newProduct.id;

        } catch (error) {
            throw new Error("No se pudo guardar el elemento")
        }
    }

    async getById(id) {
        try {
            const obtenerTodo = await fs.readFile(this.path, "utf-8");
            const data = JSON.parse(obtenerTodo);
            let item = data.find(obj => obj.id === id)

            if (!item) {
                return null;
            }
            return item;

        } catch (error) {
            throw new Error('No se pudo obtener el producto');
        }
    }

    async getAll() {
        const obtenerTodo = await fs.readFile(this.path, 'UTF-8');
        return JSON.parse(obtenerTodo);
    }

    async deleteById(id) {
        try {
            const obtenerTodo = await fs.readFile(this.path, "utf-8");
            const data = JSON.parse(obtenerTodo);
            let item = data.find(obj => obj.id === id)

            let newData = data.filter(toDelete => toDelete != item)

            fs.writeFile(this.path, JSON.stringify(newData, null, 2), "utf-8");

        } catch (error) {
            throw new Error('No se pudo obtener el producto');
        }
    }

    async deleteAll() {
        try {
            await fs.writeFile(this.path, JSON.stringify([], null, 2), 'utf-8')
        } catch (error) {
            throw new Error('Error al borrar todo');
        }
    }
}

module.exports = Contenedor;