/**
 * Created by WebOsmotic on 3/1/2017.
 */
angular
  .module("scaffoldDemo")
  .service("MainService", function ($http, $state, $location,$q,$log) {

    this.fnRemoveEntry = function (id) {
        var isConfirm = confirm("Are You Sure You Want to Delete this Entry?");

        if (isConfirm) {
            $http({
                method: 'DELETE',
                url: 'https://jsonplaceholder.typicode.com/posts/' + id
            })
                .then(function (response) {
                  $log.log("Deleted", response.status, response.data);
                    $state.reload();
                },function(error){
                  $log.error("error: ", error);
                })
        }
    };

    this.fnSaveEntry = function (newEntry) {
        if (newEntry.id == null) {
            $http({
                method: 'POST',
                url: 'https://jsonplaceholder.typicode.com/posts/',
                data: {
                    title: newEntry.title,
                    body: newEntry.body,
                    userId: 2
                }
            })
                .then(function (response) {
                  $log.log("Entry Added", response.status, response.data);
                    $location.path("/");
                    $location.replace();
                },function(error){
                  $log.error("error: ", error);
                })
        }
        else {
            $http({
                method: 'PUT',
                url: 'https://jsonplaceholder.typicode.com/posts/' + newEntry.id,
                data: {
                    id: newEntry.id,
                    title: newEntry.title,
                    body: newEntry.body,
                    userId: newEntry.userId
                }
            })
                .then(function (response) {
                  $log.log("Entry Updated", response.status, response.data);
                    $location.path("/");
                    $location.replace();
                },function(error){
                  $log.error("error: ", error);
                })
        }
    };

    this.fnGetAllEntries = function () {
        var defer = $q.defer();
        $http({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/posts'
        })
            .then(function (response) {
                defer.resolve(response.data);
            },function(error){
              $log.error("error: ", error);
                defer.reject(error);
            });
        return defer.promise;
    };

    this.fnGetEntryById = function (id) {
        var  defer = $q.defer();
            $http({
                method: 'GET',
                url: 'https://jsonplaceholder.typicode.com/posts/' + id
            })
                .then(function (response) {
                      defer.resolve(angular.copy(response.data));
                },function(error){
                  $log.error("error: ", error);
                    defer.reject(error);
                });
        return defer.promise;
    };
});
