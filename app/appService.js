//Services. They are objects that can be used by your application 
//to communicate with a server, an API, or another data source

myApp.service('CSIService', function ($http) {

    this.getAllCustomers = function () {
        // var url = 'http://a01c01101c/CSIService/api/csi_Customer';
        var url = 'http://a01c01263c/CSIService/api/csi_Customer';
        return $http.get(url).then(function (response) {
            return response.data;
        });
    }

});

