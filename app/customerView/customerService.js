myApp.service('CustomerService', function ($http) {

    this.getAllCSIForCustomer = function () {
        var url = 'http://a01c01101c/CSIService/api/csi_Customer';
        return $http.get(url).then(function (response) {
            return response.data;
        });
    }
    
});