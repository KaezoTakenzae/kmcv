
/*$(document).ready(function(){
	var todoItems = new TodoItems();
	todoItems.fetch();

	var todoItemsView = new TodoItemsView({ model: todoItems });
	$("body").append(todoItemsView.render().$el);
});*/
$(document).ready(function(){

	var infoTwoColumn = new InfoTwoColumn({
		welcomeHeader: "Hello",
		infoHeader: "a bit about me",
		descriptiveText:
		"What can I say about me? I'm 25 years old and I want to learn as much as I can. \
		Seriously, I'm a sponge and knowledge is water. I like to design websites such as this one. \
		It is a website I designed to showcase my ability as both a designer and a developer. \
		It was also a fun and exciting challenge for me and was an opportunity to develop my skills beyond University. \
		Whilst you're here please look around, you'll find that I've created a website as opposed to a webpage. \
		Within these hallowed halls contains all the work I've done and projects I'm just starting."
	})

	var featureHighlights = new FeatureHighlights([
		new FeatureHighlight({
			title: "Resume",
			linkText: "View the CV",
			linkURL: "resume.html",
			description:
			"Want to know more about my work and education? \
			For a brief overview of my employment and education history please see my online CV below."}),
		new FeatureHighlight({
			title: "Study",
			linkText: "Learn More",
			linkURL: "study.html",
			description:
			"I'm always looking to better myself.  \
			If you'd like to know more about what I learnt at University and since leaving there's a lot I'd like to share."}),
		new FeatureHighlight({
			title: "Portfolio",
			linkText: "See and Believe",
			linkURL: "portfolio/index.html",
			description:
			"It's great to read about what I've learnt but how about some evidence? \
			If seeing is believing then please follow the link below."})
	]);

	var headerView = new HeaderView();
	$("body").append(headerView.render().$el);

	var infoTwoColumnView = new InfoTwoColumnView({model: infoTwoColumn});
	$("body").append(infoTwoColumnView.render().$el);

	var featureHighlightsView = new FeatureHighlightsView({model: featureHighlights});
	$("body").append(featureHighlightsView.render().$el);

	var footerView = new FooterView();
	$("body").append(footerView.render().$el);
});
