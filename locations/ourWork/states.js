app.config(['$stateProvider',
    function ($stateProvider) {
		
        $stateProvider
                .state('work', {
                    url: '/Our-Work',
                    controller: 'WorkCtrl',
                    templateUrl: '/locations/ourWork/ourWork.html'
                });
    }]);
