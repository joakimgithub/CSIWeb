//When a Controller is attached to the DOM via the ng-controller directive, 
//Angular will instantiate a new Controller object, using the specified 
//Controller's constructor function. 
//A new child scope will be created and made available as an injectable 
//parameter to the Controller's constructor function as $scope.

myApp.controller('CSIController', function ($scope, CSIService) {

    getAllCustomers();



    function getAllCustomers() {
        var servCall = CSIService.getAllCustomers();
        servCall.then(function (d) {
            $scope.customers = d;
        }, function (error) {
            $log.error('Oops! Something went wrong while fetching the customer data.')
        })
    }

    function getAllCSIForCustomer() {
        var servCall = CSIService.getAllCSIForCustomer();
        servCall.then(function (d) {
            $scope.customers = d;
        }, function (error) {
            $log.error('Oops! Something went wrong while fetching the customer data.')
        })
    }

})

