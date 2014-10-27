'use strict';

angular.module('gncweb.{%= module_name %}').controller('{%= controller_name %}', ['$scope', '$http', '$routeParams', '$location', 'PageMode', '{%= service_name %}',  
              function($scope, $http,$routeParams, $location, PageMode, {%= service_name %}){

	$scope.clean = function(){
		$scope.{%= model_name %} = {};
		$scope.{%= model_name %}s = [];
	};
	
	$scope.findAll = function(){
		{%= service_name %}.findAll(function(response){
			$scope.{%= model_name %}s = response.data;
		});
	};
	
	$scope.findByName = function(){
		{%= service_name %}.findByName($scope.{%= model_name %}, function(response){
			$scope.{%= model_name %}s = response.data;
		});
	};
	
	$scope.save = function(){
		if(!$routeParams.id){
			{%= service_name %}.save($scope.{%= model_name %}, function(response){
				$scope.$emit('addSuccessMessage', $scope.CREATE_SUCCESS_MESSAGE);
			});
		}else{
			{%= service_name %}.update($scope.{%= model_name %}, function(response){
				$scope.$emit('addSuccessMessage', $scope.UPDATE_SUCCESS_MESSAGE);
			});
		}
	};
	
	$scope.edit = function(id){
		$location.path('editar/{%= model_name %}/'+ id);
	};
	
	$scope.loadPage = function(){
		$scope.{%= model_name %} = PageMode.createMode ? null : {%= model_name %}.data;
		$scope.pageMode = PageMode;
	};
	
	$scope.remove = function({%= model_name %}, index){
		{%= service_name %}.remove({%= model_name %}, function(response){
			$scope.$emit('addSuccessMessage', $scope.REMOVE_SUCCESS_MESSAGE);
			$scope.{%= model_name %}s.splice(index, 1);
		});
	};
	
}]);