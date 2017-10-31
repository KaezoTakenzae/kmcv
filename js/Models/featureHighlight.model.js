var FeatureHighlight = Backbone.Model.extend({
  validate: function(attrs){
    if(!attrs.title){
      return "Title is required";
    };

    if(!attrs.description){
        return "Description is required";
    };
  }
});
