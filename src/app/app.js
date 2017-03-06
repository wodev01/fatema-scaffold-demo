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
            templateUrl: 'app/components/navbar/navigation.html'
        })
        .state('main.allData', {
            url: 'allData',
            templateUrl: 'app/main/alldata.list.html',
            controller: 'MainController',
            controllerAs: 'mainc'
        })
        .state('main.formData',{
            url: 'data/:dataID?flag',
            templateUrl: 'app/data/data.form.html',
            controller: 'CrudController',
            controllerAs: 'crudc'
        });
});
