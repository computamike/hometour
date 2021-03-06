'use strict'

const Schema = use('Schema')
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
class RoomSchema extends Schema {
  up () {
    this.create('rooms', (table) => {
      table.string('title', 40).notNullable().unique()
      table.text('blurb').notNullable()
      table.string('linksto', 150).notNullable()
      table.timestamps()
    })

    HouseData.map(async roomdata=>{
      const room = new Room() 
      room.title = roomdata.title
      room.blurb = roomdata.blurb
      room.linksto = roomdata.linksto
      await room.save()
    })
  }

  down () {
    this.drop('rooms')
  }
}

module.exports = RoomSchema
