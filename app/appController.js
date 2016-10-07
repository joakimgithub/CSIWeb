//When a Controller is attached to the DOM via the ng-controller directive, 
//Angular will instantiate a new Controller object, using the specified 
//Controller's constructor function. 
//A new child scope will be created and made available as an injectable 
//parameter to the Controller's constructor function as $scope.

angular.module('myApp').controller('CSIController', function ($scope, CSIService) {

    getAllCustomers();

    function getAllCustomers() {
        var servCall = CSIService.getAllCustomers();
        servCall.then(function (d) {
            $scope.customers = d;
        }, function (error) {
            $log.error('Oops! Something went wrong while fetching the customer data.')
        })
    }
});

angular.module('myApp').controller('LoginController', function ($scope, $http, $window, userService) {
$scope.login = function() {
    $http({
        method : 'POST',
        url : '/login',
        data : $scope.user
    }).success(function (data) {
        userService.setEmail("foobar");
        $window.location.href = '/app'
    }).error(function(data) {
        $scope.login.error = true;
        $scope.error = data;
    });
}
});
