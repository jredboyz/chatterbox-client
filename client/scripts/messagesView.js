// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),
  $text: $('#text'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    // MessagesView.$chats.
  },

  render: function() {
    // TODO: Render _all_ the messages.
    //use renderMessage
    for (var key in Messages._data) {
      renderMessage(Messages._data[key]);
    }
  },

  renderMessage: function(message) {
    // let $message = $('message');
    // console.log($message, message)
    // TODO: Render a single message.
    var html = MessageView.render(message);
    // console.log(message);
    console.log (typeof html);
    MessagesView.$chats.append(JSON.stringify(html));
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};
