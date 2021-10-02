// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    RoomsView.handleClick(RoomsView.$button);
    RoomsView.handleChange(RoomsView.$select);


  },

  render: function() {
    // TODO: Render out the list of rooms.
    var rooms = Rooms.makeSet();
    for (var i = 0; i < rooms.length; i++) {
      if (rooms[i] != null) {
        RoomsView.renderRoom(rooms[i]);


      }
    }
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.


    var $room = $(`<option value="${roomname}">${roomname}</option>`);
    RoomsView.$select.append($room);
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.\
    event.change(()=>{
      // change to room
      //empty chats and then rerender new room
      MessagesView.$chats.empty();
      var selectedRoom = $('#rooms select option:selected').text();
      if (selectedRoom === 'Lobby') {
        MessagesView.render();
      } else {
        for (var i = 0; i < Messages.data.length; i++) {
          if (Messages.data[i]['roomname'] === selectedRoom) {
            MessagesView.renderMessage(Messages.data[i]);
          }
        }

      }

      console.log(Rooms.makeSet());

    });
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    event.on('click', ()=>{
      var $newRoom = $('#newRoom');
      var room = $newRoom.val();
      console.log(room);
      Rooms.add(room);
      RoomsView.renderRoom(room);


    });
  }

};
