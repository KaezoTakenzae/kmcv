var InfoTwoColumn = Backbone.Model.extend({
  validate: function(attrs){
    if(!attrs.welcomeHeader){
      return "Welcome header is required";
    };

    if(!attrs.infoHeader){
        return "Info header is required";
    };

    if(!attrs.descriptiveText){
        return "Descriptive text is required";
    };
  }
});
