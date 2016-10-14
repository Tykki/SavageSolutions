app.config(['$stateProvider',
    function ($stateProvider) {
		
        $stateProvider
                .state('root', {
                    url: '/root',
                    controller: 'RootCtrl',
                    templateUrl: '/locations/root/root.html'
                });
    }]);
