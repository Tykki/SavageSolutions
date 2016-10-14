var app = angular.module('em', ['ui.bootstrap', 'ui.router', 'ngAnimate']);

app.config(['$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
  }
]).run(
  function ($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
  }
);

app.controller('NavCtrl', function ($scope, $uibModal, $log) {

  $scope.nav = 0;

  $scope.setNav = function(data) {
    $scope.nav = data;
  }

  $scope.isSet = function(data) {
    return $scope.nav === data;
  }
  

  $scope.signIn = function () {

    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'signIn',
      controller: 'SICtrl',
    });

    modalInstance.result.then(function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

});

app.controller('SICtrl', function ($scope, $modalInstance) {
  
  $scope.cover = true;
  $scope.hermes = 0;

  $scope.login = function (form) {

    if (form.$invalid) {
      console.error("invaild login attempt");
      $scope.cover = false;
      $scope.hermes++;
      if ($scope.hermes === 5) {
        console.log("Hermes Warns:\n 'Seek Divine\'s intervention'")
      }
      if ($scope.hermes === 10) {
        $scope.user = document.getElementsByTagName('INPUT')[0];
        $scope.user.setAttribute("disabled", "disabled");
        $scope.pass = document.getElementsByTagName('INPUT')[1];
        $scope.pass.setAttribute("disabled", "disabled");
        console.log("Hermes Denies you Entry!\n 'Seek Divine\'s Grace!'")
      };
    }

    if (form.$valid) {
      console.log("Welcome My Savage!!")
      $scope.root = document.location.hash = '/root';
      $modalInstance.close($scope.root);
    }
    
  }

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  }
});