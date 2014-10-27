angular.module('gncweb.{%= module_name %}', ['ngRoute', 'ngResource'])

.config(function($routeProvider){
	$routeProvider.when('/pesquisar/{%= lower_model_name %}', {
		controller: '{%= controller_name %}',
		templateUrl: 'partials/pages/{%= lower_model_name %}/{%= search_page_name %}.html',
		resolve: {
			PageMode: function(SearchMode){return SearchMode;}
		}});
	
	$routeProvider.when('/cadastrar/{%= lower_model_name %}', {
		controller: '{%= controller_name %}',
		templateUrl: 'partials/pages/{%= lower_model_name %}/{%= create_page_name %}.html',
		resolve: {
			PageMode: function(CreateMode){return CreateMode;}
	}});
	
	$routeProvider.when('/editar/{%= lower_model_name %}/:id', {
		templateUrl: 'partials/pages/{%= lower_model_name %}/{%= create_page_name %}.html',
		controller: '{%= controller_name %}',
		resolve: {
			PageMode: function(EditMode){return EditMode;}
	}});
	
	$routeProvider.when('/visualizar/{%= lower_model_name %}/:id', {
		templateUrl: 'partials/pages/{%= lower_model_name %}/{%= create_page_name %}.html',
		controller: '{%= controller_name %}',
		resolve: {
			PageMode: function(ViewMode){return ViewMode;}
	}});
}

