
class Producto{
    constructor(id, nombre, unidadmedida, precio){
        this.id = id;
        this.nombre = nombre;
        this.unidadmedida = unidadmedida;
        this.precio = precio;
    }
    total(){
        this.precio = this.precio * 1.16;
    }
}

const productos = [
new Producto (1, "Manzana", "kg", 85),
new Producto (2, "Zanahoria", "kg", 45),
new Producto (3, "Lechuga", "kg", 25),
new Producto (4, "Jicama", "kg", 41),
];

for (const producto of productos)
    console.log(producto);    
//producto.total();


