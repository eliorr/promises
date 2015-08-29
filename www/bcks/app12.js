// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

(function () {
var app = angular.module('app', ['ionic']); 

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
}); 


app.controller ('promisesCtrl' , function ($q, $scope, $timeout ){

$scope.results1 = '...'; 
$scope.ElapsedTime1 = ''; 


$scope.results = '...'; 
$scope.ElapsedTime = ''; 

$scope.results2 = '...'; 
$scope.ElapsedTime2 = ''; 

$scope.FinaTime  = ''; 


///////// Simple Add with CB 
function add(x, y, callback) {
    $timeout ( function () 
               { callback ( x+y ) }, 
                100 
             );  
} 

///////// Add with promise  
function addp(x, y) {
  // return a promise 
    return $timeout ( function () {  
          return  x+y  
        }, 
                100 
      );  
} 
///////// Add with q service 
function addq(x, y) {
var   q = $q.defer;

setTimeout (function (){
       var result = x + y; 
       if (result >= 0 ) { 
            q.resolve (x  +  y);
        } else {
          q.reject ('Negative result not allowed! : Result : ' + result);
        }; 
       }, 100 ); 

} 


   $scope.startTime = Date.now(); 
  // Simple 
   add ( 17, 19 , function (result){
       add ( result, 3 , function (result){
         add ( result, 19 , function (result){
        $scope.results1 = result; 
        $scope.ElapsedTime1 = Date.now()  - $scope.startTime; 
      });// // add inner3 
    }) // add inner 2 
  }); // add 1   


  // Add with promise 
   $scope.startTime = Date.now(); 

     // Add with promise 
  addp (11,9).then ( function (result){
        return  addp (result, 81 );
  }).then ( function (result){
        return  addp (result,18 );

   }).then ( function (result){
       //return result; 
       return Array(result).join('*'); 
  }).
  then(function (result){
         $scope.results = result; 
         $scope.ElapsedTime = Date.now()  - $scope.startTime; 
    }
  ).finally(function(){

       $scope.FinaTime = Date.now()  - $scope.startTime; 
  });   


// Add with q
   $scope.startTime = Date.now(); 

 /*    // Add with promise 
  addq (11,9).then ( function (result){
        return  addq (result, 81 );
  }).then ( function (result){
        return  addq (result,18 );

   }).then ( function (result){
       //return result; 
       return Array(result).join('*'); 
  }).
  then(function (result){
         $scope.results2 = result; 
         $scope.ElapsedTime2 = Date.now()  - $scope.startTime; 
    }
  );   

*/ 




/* 
var   q = $q.defer; 

setTimeout (function (){
       q.resolve (x  +  y);
       }, 100 ); 
 return q.promise;  */ 
  //alert ( $scope.results); 

  /* add ( 17, 19 ).then (function(result){
      $scope.results = result;
     */
// add 
  

 /*   addp (11,9).then ( function (result) {
              return addp (result, 8 );
            }).then ( function (result) {
              return  addp (result, 81 );
            }).then(function (result) {
              return Array(result).join('*') 
            }).
            then ( function (result){
              $scope.results = result; 
              $scope.ElapsedTime = Date.now()  - $scope.startTime; 
            });   
*/ 


  }); // Ctrl 




})(); 

