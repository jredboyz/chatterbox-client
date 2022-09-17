// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {
  // TODO: Define how you want to store your messages.
  // store messages from fetch
  _data: {},



  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.
  retrieve: function (data) {
    for (let i = 0; i < data.length; i++) {
      Messages._data[data[i]['message_id']] = data[i];
    }
    MessagesView.initialize();
    // console.log(Messages._data);
  },
  add: function (inputMessage) {
    var message = {
      username: App.username,
      text: inputMessage,
      roomname: 'lobby'
    };
    Parse.create(message, MessagesView.initialize);
  },


};
