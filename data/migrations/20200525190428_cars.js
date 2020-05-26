
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
    tbl.string('VIN', 17).unique().notNullable();
    tbl.string('make', 128).notNullable();
    tbl.string('model', 128).notNullable();
    tbl.integer('mileage', 6).notNullable();
    tbl.string('transmission');
    tbl.string('status of title');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
