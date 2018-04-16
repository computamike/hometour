'use strict'

/*
|--------------------------------------------------------------------------
| Seeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Factory = use('Factory')
const HouseData = [
  {
    "title": "HALL",
    "blurb": "Welcome to Monteagle Drive - ",
    "linksto": "WC,LivingRoom,Kitchen"
  },
  {
    "title": "LIVINGROOM",
    "blurb": "Living Room information",
    "linksto": "Hall"
  },
  {
    "title": "WC",
    "blurb": "Downstairs WC",
    "linksto": "Hall"
  },
  {
    "title": "KITCHE",
    "blurb": "Kitchen blurb",
    "linksto": "Hall, Conservatory"
  },
  {
    "title": "CONSERVATORY",
    "blurb": "Conservatory blurb",
    "linksto": "Kitchen, Garden"
  },
  {
    "title": "GARDEN",
    "blurb": "Garden blurb",
    "linksto": "Kitchen, Garage"
  },
  {
    "title": "GARAGE",
    "blurb": "Garage blurb",
    "linksto": "Garden"
  }
]
const Room = use('App/Models/Room')
class Seeder {
  async run () {
    HouseData.map(async roomdata=>{
      const room = new Room() 
      room.title = roomdata.title
      room.blurb = roomdata.blurb
      room.linksto = roomdata.linksto
      await room.save()
    })
  }
}

module.exports = Seeder
