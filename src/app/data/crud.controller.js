/**
 * Created by WebOsmotic on 3/1/2017.
 */
angular
  .module("scaffoldDemo")
  .controller("CrudController", function ($http, $scope, $location, $stateParams,MainService,$log) {
    $scope.fnSubmitForm = function (isValid) {
        if (isValid) {
            MainService.fnSaveEntry($scope.newEntry);
        }
    };

    $scope.fnInitEntry = function () {
        if($stateParams.flag === "true"){
            $scope.isView = true;
            $scope.isTitleDisabled = true;
            $scope.isBodyDisabled = true;
            $scope.isPanelHidden = true;
        }
        if ($stateParams.dataID != null && $stateParams.dataID != 'add') {
            MainService.fnGetEntryById($stateParams.dataID)
                .then(function (response) {
                    $scope.newEntry = response;
                },function(error){
                  $log.error("error: ", error);
                });
        }
    };

    $scope.fnReset = function () {
        $scope.newEntry = {};
        $scope.dataForm.$setPristine();
        $scope.dataForm.$setUntouched();
    }
});
