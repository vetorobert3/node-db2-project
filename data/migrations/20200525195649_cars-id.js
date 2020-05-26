
exports.up = function(knex) {
  return knex.schema.table('cars', tbl => {
    tbl.increments('id').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.table('cars', tbl => {
    tbl.dropColumn('id');
  })
};
