// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!

  tagName: 'tr',

  template: _.template('<td class="artist"><b><%= artist %></b></td><td><%= title %></td>'),

  events: {
    'click': function() {
      this.model.removeSong();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
});
