// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngCordova', 'ngCordovaOauth'])

.run(function($ionicPlatform) {
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
})
.controller('TwitterCtrl', ['$scope','$cordovaOauth','$cordovaOauthUtility','$http', function ($scope,$cordovaOauth,$cordovaOauthUtility,$http) {
  $scope.twitterLogin = function(){
    console.log("twitterLogin function got called");
    $cordovaOauth.twitter("YOUR TWITTER APPID", "YOUR TWITTER APP SECRET").then(function(result) {
      console.log(JSON.stringify(result));
      var oauth_token = result.oauth_token;
      var oauth_token_secret = result.oauth_token_secret;
      var user_id = result.user_id;
      var screen_name = result.screen_name;

      //Accessing profile info from twitter
      var oauthObject = {
            oauth_consumer_key: "7UTsfTklX5IG54Y6X5JkeMLv4",
            oauth_nonce: $cordovaOauthUtility.createNonce(10),
            oauth_signature_method: "HMAC-SHA1",
            oauth_token: result.oauth_token,
            oauth_timestamp: Math.round((new Date()).getTime() / 1000.0),
            oauth_version: "1.0"
        };
        var signatureObj = $cordovaOauthUtility.createSignature("GET", "https://api.twitter.com/1.1/statuses/home_timeline.json", oauthObject, {screen_name:result.screen_name}, "npphqlhzltNOLcD7VZpFThm1f7JTGsqbz5FcFBdePKyywRjSkQ", result.oauth_token_secret);
        console.log("Generating signature");
        console.log(signatureObj);
        console.log(signatureObj.signature);
        $http.defaults.headers.common.Authorization = signatureObj.authorization_header;
        $http.get("https://api.twitter.com/1.1/statuses/home_timeline.json",
               {params: { screen_name: result.screen_name}})
      .success(function(response) {
                console.log(response);
                $scope.tweets = response;
      })
     .error(function(error) {
              alert(error);
      });
      //$location.url('/scan');
    }, function(error) {
      console.log(error);
    });

  }
  
}])



  // $scope.twitterLogin = function() {
  //   console.log("twitterLogin function got called");
  //   $ionicLoading.show({templateUrl: 'templates/spinner.html'});
  //   Twitter.login().then(
  //      function(user){
  //       Session.updateUserDetail(user).then(function(){
  //         console.log("RESPONSE FROM SERVER DB");
  //         console.log(user);
  //         $ionicLoading.hide();
  //         $location.url('/tab/dash');
  //       }, function(err){
  //         $ionicLoading.hide();
  //         console.log("Failed to update user info..")
  //         errorPopup.showPopup(err)
  //       })
  //     },
  //     function(err){
  //       $ionicLoading.hide();
  //       console.log("Twitter LOGIN ERROR..");
  //       errorPopup.showPopup(err);
  //     }

  //     )
  // }





// angular.module('sadhana.Services').factory('Twitter', ['$cordovaOauth', '$auth', '$http', 'errorPopup', 'serverUrl','$cordovaOauthUtility', function($cordovaOauth, $auth, $http, errorPopup, serverUrl,$cordovaOauthUtility){
//   var self = this;
//   self.login = function( ){
//     var q = $auth.initDfd();
//     console.log("q..");
//     console.log(q);
    
//   return q.promise;
//   }
//   return self;

// }]);

