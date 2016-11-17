var app = angular.module('Traduccion', ['pascalprecht.translate']);

app.controller('TraduccionCtrl', function($scope, $translate) {
 
  
  $scope.ChangeLanguage = function(lang){
		$translate.use(lang);
	  }

  $scope.DetectarIdioma = function(){
    $scope.idiomaNavegador = window.navigator.language;
    
    
  }
});

