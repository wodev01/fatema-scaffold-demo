/**
 * Created by WebOsmotic on 3/1/2017.
 */
angular
  .module("scaffoldDemo")
  .controller("MainController", function ($scope,$http,$state,MainService,$log) {
    $scope.isLoad = true;
     MainService.fnGetAllEntries()
         .then(function (response) {
             $scope.allData = response;
             $scope.isLoad = false;
         },function(error){
             $log.error("error: ", error);
             $scope.isLoad = false;
         });
    $scope.fnDeleteEntry = function (id) {
        MainService.fnRemoveEntry(id);
    };
});
