var FeatureHighlightsView = Backbone.View.extend({
  tagName: "div",
  id: "featureHighlights",
  className: "feature-highlights-container",

  initialize: function(options){
    if(!(options && options.model)){
      throw new Error("model is not specified");
    };
  },

  render: function(){
    var self = this;

    this.model.each(function(featureHighlight){
      var view = new FeatureHighlightView({model: featureHighlight});
      self.$el.append(view.render().$el);
    });
    return this;
  }
});
