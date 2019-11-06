
exports.up = function(knex) {
  return knex.schema.createTable('cars', table => {
      table.increments('id');
      table.text('VIN', 17).unique().notNullable();
      table.text('make', 255);
      table.text('model', 255);
      table.decimal('mileage');
      table.text('transmission_type');
      table.text('title');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
 