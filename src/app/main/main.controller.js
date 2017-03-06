/**
 * Created by WebOsmotic on 3/1/2017.
 */
angular
  .module("scaffoldDemo")
  .controller("MainController", function ($scope,$http,$state,MainService,$log) {
    var vm = this;
    vm.isLoad = true;
    vm.dummyScope ='Testing';
     MainService.fnGetAllEntries()
         .then(function (response) {
             vm.allData = response;
             vm.isLoad = false;
         },function(error){
             $log.error("error: ", error);
             vm.isLoad = false;
         });
    vm.fnDeleteEntry = function (id) {
        MainService.fnRemoveEntry(id);
    };
});
