angular.module('starter')
    .controller('CalculatorController', function($scope, calculator){
        
        $scope.display = "";
        
        $scope.Clear = function(){
            $scope.display = "";
        };

        $scope.Clicked = function(label){
            $scope.display += label;
        };

        $scope.Equals = function(){
            var equation = $scope.display;            
            var result = calculator.calculate(equation);
            $scope.display = result;
            navigator.vibrate(500); 
        };
    })
    .factory('calculator', function(){
        var calculate = function(equation){
            var parser = new Epsilon.ExpressionParser(equation);
            return parser.evaluate();
        };

        return{
            calculate: calculate
        };
    })