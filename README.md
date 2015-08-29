Welcome to my promises snippets:

Here you can find operating code for promises chaining in 2 ways in AngularJS :

1 - chaning without use of the AngularJS $q service 

2 - chaining with the AngularJS $q service.

The main code is at www/js/app.js

///////// Usage of the AngularJS $q service 
$scope.addq = function (x, y) {
var   q = $q.defer();

setTimeout (function (){

       var result = x + y; 
       if (result >= 0 ) { 
            q.resolve (x  +  y);
        } else {
            q.reject ('Negative result not allowed! : Result : ' + result);
        };

        //alert ('back promise'); 
        return q.promise; 

       }, 100 ); 

};  


// promises chain of calls so that every element in the chan is 
called with the previous async process is finished  :


// Add with q
   $scope.step =0; 
   $scope.startTime = Date.now(); 
   
   $scope.addOne(1)
   .then(
      function (v){ return $scope.addOne (v) })
   .then(
      function (v){ return $scope.addOne (v) })
   .then(
      function (v){ return $scope.addOne (v) })
   .then(
      function (v){ return $scope.addOne (v) })
   .then(
      function(v){
        $scope.results2 = v; //res; 
        $scope.ElapsedTime2 = Date.now()  - $scope.startTime; 
      }, 
      function(err){ 
        $scope.ErrorOc = err; 
      }
    );
	

 




