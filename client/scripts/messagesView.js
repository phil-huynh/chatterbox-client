// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    MessagesView.handleClick($('.username'));

  },

  render: function() {
    // TODO: Render _all_ the messages.

    for (var i = 0; i < Messages.data.length; i++) {
      MessagesView.renderMessage(Messages.data[i]);
    }

  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    var $message = MessageView.render(message);

    MessagesView.$chats.append($message);

  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).

    event.on('click', () =>{
      var friend = $('.username');
      Friends.add(friend.val());
      console.log('clicked on a name!');
    });
  }

};