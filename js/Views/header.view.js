var HeaderView = Backbone.View.extend({
  tagName: "header",
  id: "header",

  initialize: function(){
    this.template = Handlebars.compile($('#defaultHeader').html());
  },

  render: function(){
    this.$el.html(this.template);

    return this;
  }
})
