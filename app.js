angular.module('produciFacile', ['ui.router', 'controllers', 'services'])
.config([
'$stateProvider',
'$urlRouterProvider',
function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('products', {
          url: '/products',
          templateUrl: 'Pages/Products.html',
          controller: 'ProductsController'
      })
      .state('desk', {
          url: '/desk',
          templateUrl: 'Pages/Desk.html'
      })
      .state('notFound', {
          url: '/notFound',
          templateUrl: 'Pages/NotFound.html'
      })
      .state('clients', {
          url: '/clients',
          templateUrl: 'Pages/Clients.html'
      });

    $urlRouterProvider.otherwise('notFound');
}])

