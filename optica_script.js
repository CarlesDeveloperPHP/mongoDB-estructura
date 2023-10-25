db.proveedores.insert({
    name: "Gafas Luisito",
    address: {
      street: "Calle Luisito",
      number: "123",
      floor: "1",
      door: "A",
      city: "Ciudad Luisito",
      postalCode: "54321",
      country: "País Luisito",
    },
    phone: "987654321",
    fax: "123456789",
    NIF: "12345678u",
  });
  
  db.proveedores.insert({
    name: "Gafas Marta",
    address: {
      street: "Calle Marta",
      number: "456",
      floor: "2",
      door: "B",
      city: "Ciudad Marta",
      postalCode: "67890",
      country: "País Marta",
    },
    phone: "987654322",
    fax: "123456780",
    NIF: "12345678r",
  });
  
  db.proveedores.insert({
    name: "Gafas Pablo",
    address: {
      street: "Calle Pablo",
      number: "789",
      floor: "3",
      door: "C",
      city: "Ciudad Pablo",
      postalCode: "34567",
      country: "País Pablo",
    },
    phone: "987654323",
    fax: "123456781",
    NIF: "44025589f",
  });
  
  db.proveedores.insert({
    name: "Gafas Carmen",
    address: {
      street: "Calle Carmen",
      number: "234",
      floor: "4",
      door: "D",
      city: "Ciudad Carmen",
      postalCode: "45678",
      country: "País Carmen",
    },
    phone: "987654324",
    fax: "123456782",
    NIF: "1234567t",
  });
  

db.gafas.insert({
    brand: "Ray-Ban",
    leftGlassDioptrias: -2.25,
    rightGlassDioptrias: -1.75,
    frameType: "Metálica",
    frameColor: "Plateado",
    glassColor: "Gris",
    price: 150,
    provider: db.proveedores.findOne({ name: "Gafas Luisito" })._id,
  });
  
  db.gafas.insert({
    brand: "Oakley",
    leftGlassDioptrias: -3.00,
    rightGlassDioptrias: -2.75,
    frameType: "Pasta",
    frameColor: "Negro",
    glassColor: "Verde",
    price: 130,
    provider: db.proveedores.findOne({ name: "Gafas Luisito" })._id,
  });

  db.gafas.insert({
    brand: "Prada",
    leftGlassDioptrias: -1.50,
    rightGlassDioptrias: -1.25,
    frameType: "Metálica",
    frameColor: "Dorado",
    glassColor: "Marrón",
    price: 180,
    provider: db.proveedores.findOne({ name: "Gafas Carmen" })._id,
  });
  
  db.gafas.insert({
    brand: "Versace",
    leftGlassDioptrias: -4.00,
    rightGlassDioptrias: -3.75,
    frameType: "Pasta",
    frameColor: "Blanco",
    glassColor: "Azul",
    price: 200,
    provider: db.proveedores.findOne({ name: "Gafas Marta" })._id,
  });
  
  

  db.clientes.insert({
    name: "Cliente1",
    address: "Dirección1",
    phone: "123456789",
    email: "cliente1@example.com",
    registrationDate: new Date("2023-10-25"),
  });
  
  db.clientes.insert({
    name: "Cliente2",
    address: "Dirección2",
    phone: "987654321",
    email: "cliente2@example.com",
    registrationDate: new Date("2023-10-25"),
    referredBy: db.clientes.findOne({ name: "Cliente1" })._id,
  });
  
  db.clientes.insert({
    name: "Cliente3",
    address: "Dirección3",
    phone: "456789123",
    email: "cliente3@example.com",
    registrationDate: new Date("2023-10-26"),
  });
  
  db.clientes.insert({
    name: "Cliente4",
    address: "Dirección4",
    phone: "321987654",
    email: "cliente4@example.com",
    registrationDate: new Date("2023-10-26"),
    referredBy: db.clientes.findOne({ name: "Cliente2" })._id,
  });
  

  db.ventas.insert({
    glasses: db.gafas.findOne({ brand: "Ray-Ban" })._id,
    employee: "Empleado1",
    saleDate: new Date("2023-10-25"),
  });
  
  db.ventas.insert({
    glasses: db.gafas.findOne({ brand: "Oakley" })._id,
    employee: "Empleado2",
    saleDate: new Date("2023-10-26"),
  });
  
  db.ventas.insert({
    glasses: db.gafas.findOne({ brand: "Ray-Ban" })._id,
    employee: "Empleado1",
    saleDate: new Date("2023-10-27"),
  });
  
  db.ventas.insert({
    glasses: db.gafas.findOne({ brand: "Oakley" })._id,
    employee: "Empleado3",
    saleDate: new Date("2023-10-27"),
  });
  

  