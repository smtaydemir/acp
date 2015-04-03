var arguman = angular.module("arguman",[
	'angular-md5',
	'controllers'
]);

angular.module('controllers', [])
	   .controller('argumanCtrl', ['$scope', '$http' ,'md5', function($scope, $http, md5) {
		    $http.get("http://arguman.org/api/v1/arguments/")
		    .success(function(response) {
		    	$scope.feed = response.results;
		    });


		    // Argument link new tab
		    $scope.argumentGo = function(argumentSlug){
			    chrome.tabs.create({url: 'http://arguman.org/'+argumentSlug});
     			return false;
			}

			// User link new tab
			$scope.argumentUser = function(userName){
				chrome.tabs.create({url: 'http://arguman.org/users/'+userName});
     			return false;
			}
		}]);