var FooterView = Backbone.View.extend({
  tagName: "footer",
  id: "footer",

  initialize: function(){
    this.template = Handlebars.compile($('#defaultFooter').html());
  },

  render: function(){
    this.$el.html(this.template);

    return this;
  }
})
