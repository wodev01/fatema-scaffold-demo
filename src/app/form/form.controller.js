/**
 * Created by WebOsmotic on 3/1/2017.
 */
angular
  .module("scaffoldDemo")
  .controller("FormController", FormController);

function FormController($http, $location, $stateParams, MainService, $log) {
  var vm = this;
  vm.fnSubmitForm = function (isValid) {
    if (isValid) {
      MainService.fnSaveEntry(vm.newEntry);
    }
  };

  vm.fnInitEntry = function () {
    if ($stateParams.flag === "true") {
      vm.isView = true;
      vm.isTitleDisabled = true;
      vm.isBodyDisabled = true;
      vm.isPanelHidden = true;
    }
    if ($stateParams.dataID != null && $stateParams.dataID != 'add') {
      MainService.fnGetEntryById($stateParams.dataID)
        .then(function (response) {
          vm.newEntry = response;
        }, function (error) {
          $log.error("error: ", error);
        });
    }
  };

  vm.fnReset = function () {
    vm.newEntry = {};
    vm.dataForm.$setPristine();
    vm.dataForm.$setUntouched();
  }
}
