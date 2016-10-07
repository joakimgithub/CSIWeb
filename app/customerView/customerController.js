angular.module('CustomerModule').controller('CustomerController', function ($scope, CustomerService) {

    getAllCSIForCustomer();

    function getAllCSIForCustomer() {
        var servCall = CustomerService.getAllCSIForCustomer();
        servCall.then(function (d) {
            $scope.CSIs = d;
        }, function (error) {
            $log.error('Oops! Something went wrong while fetching the customers all CSI.')
        })
    }


})
