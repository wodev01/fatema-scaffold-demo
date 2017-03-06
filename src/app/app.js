/**
 * Created by WebOsmotic on 3/1/2017.
 */
angular
  .module("scaffoldDemo",['ui.router']);

angular
  .module("scaffoldDemo")
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/allData');
    $stateProvider
        .state('main', {
            url: '/',
            abstract: true,
            templateUrl: 'app/main/main.html'
        })
        .state('main.allData', {
            url: 'allData',
            templateUrl: 'app/list/alldata.list.html',
            controller: 'ListController',
            controllerAs: 'listC'
        })
        .state('main.formData',{
            url: 'data/:dataID?flag',
            templateUrl: 'app/form/data.form.html',
            controller: 'FormController',
            controllerAs: 'FormC'
        });
});
