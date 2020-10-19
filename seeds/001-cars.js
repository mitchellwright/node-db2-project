exports.seed = async function (knex) {
  await knex("cars").truncate();

  await knex("cars").insert([
    {
      vin: "A679BB32OP",
      make: "Nissan",
      model: "Sentra",
      mileage: 100230,
      transmission_type: "Automatic",
      title_status: "Owned",
    },
    {
      vin: "MJKPO89756B",
      make: "Tesla",
      model: "Model S",
      mileage: 23018,
      transmission_type: "Automatic",
      title_status: "Lease",
    },
    {
      vin: "QPIU7685T32HJK",
      make: "BMW",
      model: "X3",
      mileage: 300,
    },
  ]);
};
