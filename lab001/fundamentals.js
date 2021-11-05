const aCar = {
    owner : "Joe Bloggs",
    address : '3 Walkers Lane',
    previous_owners: [
      { name : "Pat Smith", address : "1 Main Street" },
      { name : "Sheila Dwyer", address : "2 High Street"}
    ],
    type : { 
      make : "Toyota", 
      model : 'Corolla', 
      cc : 1.8 
    },
    features : ['Parking assist', 'Alarm', 'Tow-bar'],
    registration :{ year : 201, county : "WD", number : 1058 } 
  };
  
  console.log(aCar.owner);
  
  // ===== Nested objects =====
  console.log(aCar.owner + ' drives a ' + aCar.type.make)
  console.log(' Reg. = ' + aCar.registration.year + '-' + aCar.registration.county + '-' + aCar.registration.number)
  
  // ===== Dynamic Properties =====
  aCar.milage = 10000;
  aCar.colour = {
    exterior : "red",
    interior : {
      texture : "leather",
      shade : "cream"
    }
  }
  console.log(
    "It is a " +
      aCar.colour.exterior +
      " car, " +
      aCar.milage +
      " milage, with " +
      aCar.colour.interior.texture +
      " interior."
  );

  // ===== Arrays =====
  console.log('First owner : ' + aCar.previous_owners[0].name + " - " + aCar.previous_owners[0].address );
  
  // ===== Looping/Iterations constructs =====
  // Loop through each car feature
  for (let i = 0; i < aCar.features.length; i += 1) {
    console.log(aCar.features[i]);
  }

  // Loop construct for iterating over an object's property (uses []; subscript notation)
  for (let p in aCar.type)  {
    console.log(p.toUpperCase() + ' = ' + aCar.type[p] ) ;
  }

  // Loop through each previous owner and display
  for (let i = 0 ; i < aCar.previous_owners.length ; i += 1) {
    console.log(aCar.previous_owners[i].name);
  }

  