app
	.controller('AboutCtrl', function($scope){
		$scope.title = 'About Us';
		$scope.project = true;
		
		$scope.toggle = function() {
			$scope.project = !$scope.project
		}

});
