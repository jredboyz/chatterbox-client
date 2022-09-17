// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),
  $chat: $('.chat'),
  $username: $('.username'),
  $text: $('.text'),
  $this: $(this),

  clickUsername: function () {
    MessagesView.$chats.on('click', '.username', function () {
      MessagesView.handleClick($(this).text());
    });
  },

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    MessagesView.render();
    // MessagesView.$chats.on('click', '.chat', MessagesView.handleClick, function () {
    //   console.log($(this).text());
    // });

  },

  render: function() {
    // TODO: Render _all_ the messages.
    for (var key in Messages._data) {
      MessagesView.renderMessage(Messages._data[key]);
    }
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    var html = MessageView.render(message);
    // MessageView.$username.on('click', MessagesView.handleClick);
    MessagesView.$chats.append(html);
  },

  handleClick: function(event) {
    Friends.add(event);
    console.log('clicked');
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }
};

MessagesView.clickUsername();
