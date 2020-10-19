exports.up = async function (knex) {
  // create the initial database schema and create the table
  await knex.schema.createTable("cars", (table) => {
    table.increments("id");
    table.text("vin").notNull().unique();
    table.text("make").notNull();
    table.text("model").notNull();
    table.integer("mileage").notNull();
    table.text("transmission_type");
    table.text("title_status");
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("cars");
};
