'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

const Factory = use('Factory')

Factory.blueprint('App/Models/Room', (faker) => {
  return {
    title: faker.sentence().substring(0, 40),
    blurb: faker.sentence(),
    linksto: faker.sentence().substring(0, 150)
  }
})
