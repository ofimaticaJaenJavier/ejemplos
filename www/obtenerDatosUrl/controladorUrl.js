var app = angular.module('PrincipalMod', ['ServicioPrincipal']);

app.controller('PrincipalCtrl', ["$scope", "$ionicPlatform",
    "ServicioPrincipal", "$state",
    function ($scope, $ionicPlatform, ServicioPrincipal, $state) {
        $scope.resultado={};

        ServicioPrincipal.recuperarurllarga()
            .success(function (urllong) {
                $scope.resultado = urllong.Idiomas;
                console.log(urllong.Idiomas);
               
                


            })
            .error(function (error) {
                console.log(error)
            })
    }])
