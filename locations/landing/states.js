app.config(['$stateProvider',
    function ($stateProvider) {
		
        $stateProvider
                .state('landing', {
                    url: '/',
                    controller: 'LanCtrl',
                    templateUrl: '/locations/landing/landing.html'
                });
    }]);
