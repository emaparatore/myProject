angular.module('moduleProducts',[])
.factory('products', [function () {
    var o = {
        products: []
    };

    return o;
}])
.controller('ProductsController', [
'$scope',
'products',
function ($scope, products) {
    $scope.products = products.products;

    var indexUpdate = "";
    this.lastAction = '';

    //Funzioni per settare il focus in modalità di creazione e modifica
    $('#insertProduct').on('shown.bs.modal', function () {
        $('#productInput1').focus();

    });
    $('#updateProduct')
      .on('shown.bs.modal', function () {
          $('#updateProductInput1').focus()
      })

    //Funzioni per settare il focus al momento dell'inserimento e della modifica
    $scope.focusInsertProduct = function () {
        $('#productInput1').focus();
    }

    //Funzione per azzerare il contenuto del modal in inserimento
    $scope.beginInsertProduct = function () {
        if (lastAction == 'modifica') {
            $scope.productName = '';
            $scope.timeDeposit = '';
            $scope.maxDailyProduction = '';
        }
        lastAction = 'inserimento';
    };

    $('#successInsert').hide();

    $scope.addProduct = function () {
        $scope.products.push({
            name: $scope.productName,
            timeDeposit: $scope.timeDeposit,
            maxDailyProduction: $scope.maxDailyProduction
        });
        $scope.productName = '';
        $scope.timeDeposit = '';
        $scope.maxDailyProduction = '';
        $('#successInsert').show('slide', 'slow');
    };

    $scope.deleteProduct = function (product) {
        var index = $scope.products.indexOf(product);
        $scope.products.splice(index, 1);
    };

    $scope.startUpdateProduct = function (product) {

        $scope.productName = product.name;
        $scope.timeDeposit = product.timeDeposit;
        $scope.maxDailyProduction = product.maxDailyProduction;

        indexUpdate = $scope.products.indexOf(product);
        lastAction = 'modifica';
    };

    $scope.updateProduct = function () {
        if (!$scope.maxDailyProduction || $scope.maxDailyProduction === ''
            || !$scope.productName || $scope.productName === ''
            || !$scope.timeDeposit || $scope.timeDeposit === '')
        { return; }
        $scope.products[indexUpdate].name = $scope.productName;
        $scope.products[indexUpdate].timeDeposit = $scope.timeDeposit;
        $scope.products[indexUpdate].maxDailyProduction = $scope.maxDailyProduction;
        $('#updateProductInput1').focus();
    };


}]);