// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    // TODO: Currently, this is all handleSubmit does.
    // Make this function actually send a message to the Parse API.

    console.log('click!');
    var $message = $('#message');
    var message = $message.val();
    var room = $('#newRoom').val();



    var objInput = {username: App.username, roomname: room, text: message};
    Parse.create(objInput, ()=>{
      console.log('This worked. We submitted our text!');
    });
    MessagesView.$chats.html('');
    App.startSpinner();
    App.fetch(App.stopSpinner());

  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};