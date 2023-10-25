db.clientes.insert({
    nombre: "Cliente1",
    apellidos: "Apellido1",
    direccion: {
      calle: "Calle 1",
      codigoPostal: "12345",
      localidad: "Localidad 1",
      provincia: "Provincia 1",
    },
    telefono: "987654321",
  });
  
  db.clientes.insert({
    nombre: "Cliente2",
    apellidos: "Apellido2",
    direccion: {
      calle: "Calle 2",
      codigoPostal: "54321",
      localidad: "Localidad 2",
      provincia: "Provincia 2",
    },
    telefono: "123456789",
  });
  
  db.clientes.insert({
    nombre: "Cliente3",
    apellidos: "Apellido3",
    direccion: {
      calle: "Calle 3",
      codigoPostal: "67890",
      localidad: "Localidad 3",
      provincia: "Provincia 3",
    },
    telefono: "456789123",
  });
  
  db.clientes.insert({
    nombre: "Cliente4",
    apellidos: "Apellido4",
    direccion: {
      calle: "Calle 4",
      codigoPostal: "98765",
      localidad: "Localidad 4",
      provincia: "Provincia 4",
    },
    telefono: "321987654",
  });
  
  db.comandas.insert({
    cliente: db.clientes.findOne({ nombre: "Cliente1" })._id,
    fechaHora: new Date("2023-10-25T14:30:00"),
    entregaADomicilio: true,
    detallesProductos: [
      {
        producto: db.productos.findOne({ nombre: "Pizza Margarita" })._id,
        cantidad: 2,
      },
    ],
    precioTotal: 25.00,
    tienda: db.tiendas.findOne({ localidad: "Localidad 1" })._id,
  });
  
  db.comandas.insert({
    cliente: db.clientes.findOne({ nombre: "Cliente2" })._id,
    fechaHora: new Date("2023-10-26T19:15:00"),
    entregaADomicilio: false,
    detallesProductos: [
      {
        producto: db.productos.findOne({ nombre: "Hamburguesa Clásica" })._id,
        cantidad: 1,
      },
      {
        producto: db.productos.findOne({ nombre: "Coca-Cola" })._id,
        cantidad: 2,
      },
    ],
    precioTotal: 18.50,
    tienda: db.tiendas.findOne({ localidad: "Localidad 2" })._id,
  });
  
  db.comandas.insert({
    cliente: db.clientes.findOne({ nombre: "Cliente3" })._id,
    fechaHora: new Date("2023-10-27T12:00:00"),
    entregaADomicilio: true,
    detallesProductos: [
      {
        producto: db.productos.findOne({ nombre: "Pizza Vegetariana" })._id,
        cantidad: 1,
      },
    ],
    precioTotal: 15.00,
    tienda: db.tiendas.findOne({ localidad: "Localidad 3" })._id,
  });
  
  db.comandas.insert({
    cliente: db.clientes.findOne({ nombre: "Cliente4" })._id,
    fechaHora: new Date("2023-10-28T17:45:00"),
    entregaADomicilio: true,
    detallesProductos: [
      {
        producto: db.productos.findOne({ nombre: "Hamburguesa de Pollo" })._id,
        cantidad: 3,
      },
    ],
    precioTotal: 27.00,
    tienda: db.tiendas.findOne({ localidad: "Localidad 4" })._id,
  });
  
  db.productos.insert({
    nombre: "Pizza Margarita",
    descripcion: "Pizza de queso y tomate",
    imagen: "URL de la imagen",
    precio: 12.99,
  });
  
  db.productos.insert({
    nombre: "Hamburguesa Clásica",
    descripcion: "Hamburguesa de carne con lechuga y tomate",
    imagen: "URL de la imagen",
    precio: 6.99,
  });
  
  db.productos.insert({
    nombre: "Coca-Cola",
    descripcion: "Bebida refrescante",
    imagen: "URL de la imagen",
    precio: 2.50,
  });
  
  db.productos.insert({
    nombre: "Pizza Vegetariana",
    descripcion: "Pizza de verduras y queso",
    imagen: "URL de la imagen",
    precio: 14.99,
  });
  
  db.categorias.insert({
    nombre: "Clásicas",
  });
  
  db.categorias.insert({
    nombre: "Vegetarianas",
  });
  
  db.tiendas.insert({
    direccion: {
      calle: "Calle de la Tienda 1",
      codigoPostal: "54321",
      localidad: "Localidad 1",
      provincia: "Provincia 1",
    },
  });
  
  db.tiendas.insert({
    direccion: {
      calle: "Calle de la Tienda 2",
      codigoPostal: "67890",
      localidad: "Localidad 2",
      provincia: "Provincia 2",
    },
  });
  
  db.empleados.insert({
    nombre: "Empleado1",
    apellidos: "Apellido1",
    NIF: "NIF1234567",
    telefono: "987654321",
    cuiner: true,
    repartidor: false,
  });
  
  db.empleados.insert({
    nombre: "Empleado2",
    apellidos: "Apellido2",
    NIF: "NIF2345678",
    telefono: "876543210",
    cuiner: false,
    repartidor: true,
  });
  
  db.empleados.insert({
    nombre: "Empleado3",
    apellidos: "Apellido3",
    NIF: "NIF3456789",
    telefono: "765432109",
    cuiner: true,
    repartidor: true,
  });
  
  db.empleados.insert({
    nombre: "Repartidor1",
    apellidos: "Apellido4",
    NIF: "NIF4567890",
    telefono: "654321012",
    cuiner: false,
    repartidor: true,
  });

  db.comandas.update(
    { fechaHora: new Date("2023-10-25T14:30:00") }, 
    {
      $set: {
        repartidor: db.empleados.findOne({ nombre: "Repartidor1" })._id,
        fechaHoraEntrega: new Date("2023-10-25T15:15:00"),
      },
    }
  );
  

    db.clientes.find();
    db.comandas.find();
    db.productos.find();
    db.categorias.find();
    db.tiendas.find();
    db.empleados.find();
    