'use strict'
const Room = use('App/Models/Room')
class RoomController {
    async index ({ request, view, params, response }){
        const room = params.room || 'hall'
        const Rooms = use('App/Models/Room')
        const TargetRoom = await Rooms.findBy('title',room.toUpperCase())
        return view.render('posts.index',TargetRoom.toJSON())      
    }
}

module.exports = RoomController
