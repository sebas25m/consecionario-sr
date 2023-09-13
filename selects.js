let marcasVehiculos = document.getElementById('marcasvehiculos');
for (let marcas = 0; marcas <= 9; marcas++) {
    const opcion = document.createElement('option');
    opcion.value = marcas;
    switch (marcas) {
        case 1: opcion.text = "BMW";
            break;
        case 2: opcion.text = "Lamborghini";
            break;
        case 3: opcion.text = "Audi";
            break;
        case 4: opcion.text = "Mercedez benz";
            break;
        case 5: opcion.text = "Mazda";
            break;
        case 6: opcion.text = "Honda";
            break;
        case 7: opcion.text = "Mitsubishi";
            break;
        case 8: opcion.text = "Porsche";
            break;
        case 9: opcion.text = "Toyota";
            break;
    }
    marcasVehiculos.appendChild('opcion');
} 