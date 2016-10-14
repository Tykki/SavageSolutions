app.config(['$stateProvider',
    function ($stateProvider) {
		
        $stateProvider
                .state('start', {
                    url: '/Start',
                    controller: 'StartCtrl',
                    templateUrl: '/locations/start/start.html'
                });
    }]);
