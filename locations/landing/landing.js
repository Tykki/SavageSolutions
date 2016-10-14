app.controller('LanCtrl', function($scope){
	$scope.title = 'E & M Web Solutions';
	$scope.small = '--Savage';
	$scope.myInterval = 3000;
	$scope.noWrapSlides = false;
  $scope.nav = 0;

  $scope.setNav = function(data) {
    $scope.nav = data;
  }

  $scope.isSet = function(data) {
    return $scope.nav === data;
  }
  

  	var slides = $scope.slides = [];

  	$scope.addSlide = function() {
    	var newWidth = 1600 + slides.length + 1;
    	slides.push({
      		image: 'http://lorempixel.com/' + newWidth + '/500/abstract',
      		text: ['Slide','Slide','Slide','Slide'][slides.length % 4] + ' ' +
        		['1', '2', '3', '4'][slides.length % 4]
    		});
  	};

  for (var i=0; i<4; i++) {
    $scope.addSlide();
  }


});
