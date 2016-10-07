app.service('userService', function() {
  this.userData = {yearSetCount: 0};

  this.user = function() {
        return this.userData;
  };

  this.setEmail = function(email) {
        this.userData.email = email;
  };

  this.getEmail = function() {
        return this.userData.email;
  };

  this.setSetCount = function(setCount) {
        this.userData.yearSetCount = setCount;
  };

  this.getSetCount = function() {
        return this.userData.yearSetCount;
  };
});