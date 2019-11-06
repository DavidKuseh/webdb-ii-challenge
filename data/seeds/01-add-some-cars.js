
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { VIN: '2CNDL23F856093901',
        make: "Chevrolet", 
        model: "Equinox", 
        mileage: 10000, 
        transmission_type: "Automatic", 
        title: "salvage"
      },
        { VIN: 'JNKCV54E46M706213',
        make: "Infiniti", 
        model: "G35", 
        mileage: 24000, 
        transmission_type: "Automatic", 
        title: "clean"
      },
        { 
          VIN : '5NPET46C07H192362', 
          make: "Hyundai", 
          model: "Sonata", 
          mileage: 4000, 
          transmission_type: "Automatic", 
          title: "clean"
        }
      ]);
    });
};
 