FoorumApp.controller('TopicsListController', function($scope, $location, Api){
  $scope.newTopic;
  Api.getTopics().success(function(topics) {
      $scope.topics = topics;
  });
  
  $scope.addTopic = function() {
      Api.addTopic($scope.newTopic).success(function(data) {
            console.log(data)
            $location.path('/topics/'+data.id)
      }).error(function(error) {
          console.log(error)
      })
  }
});
