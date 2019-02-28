
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cohorts')
  .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cohorts').insert([
        {name: 'Web16'},
        { name: 'Web16_Flex'},
        { name: 'Web17'}
      ]);
    });
};
