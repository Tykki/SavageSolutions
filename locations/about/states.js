app.config(['$stateProvider',
    function ($stateProvider) {
		
        $stateProvider
                .state('about', {
                    url: '/About-Us',
                    controller: 'AboutCtrl',
                    templateUrl: '/locations/about/about.html'
                });
    }]);
