'use strict';

angular.module('gncweb.{%= module_name %}').factory('{%= service_name %}', function($http, $rootScope){
	
	var service = {};
	
	service.findAll = function(callback){
		$http.get($rootScope.API_URL).success(function(response){
			if(response.status.code === 200){
				callback(response);
			}
		});
	};
	
	service.save = function(model, callback){
		$http.post($rootScope.API_URL, model).success(function(response){
			if(response.status.code === 200){
				callback(response);
			}
		});
	};
	
	service.update = function (model, callback){
		$http.put($rootScope.API_URL, model).success(function(response){
			if(response.status.code === 200){
				callback(response);
			}
		});
	};
	
	service.remove = function(model, callback){
		$http.delete($rootScope.API_URL + '/' + model.id).success(function(response){
			if(response.status.code === 200) {
				callback(response);
			}
		});
	}
	
	
	return service;
	
});

