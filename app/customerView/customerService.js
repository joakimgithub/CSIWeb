angular.module('CustomerModule').service('CustomerService', function ($http) {

    this.getAllCSIForCustomer = function () {
        var url = 'http://a01c01263c/CSIService/api/CSIs/Customer/1';
        return $http.get(url).then(function (response) {
            return response.data;
        });
    }
    
});