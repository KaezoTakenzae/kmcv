var InfoTwoColumnView = Backbone.View.extend({
  tagName: "div",
  className: "info-two-column",

  initialize: function(options){
    if(!(options && options.model)){
      throw new Error("model is not specified");
    };

    this.template = Handlebars.compile($('#infoTwoColumnTemplate').html());
  },

  render: function(){
    //this.$el.html(this.model.get('description'));

    this.$el.html(this.template(this.model.toJSON()));

    return this;
  }
});
