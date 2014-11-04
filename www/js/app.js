angular.module('starter', ['ionic', 'ngCordova'])

.config(function($compileProvider) {
  $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.controller('MainCtrl', function($scope, $cordovaCamera, $cordovaSocialSharing) {
  var photo = $scope.lastPhoto;

  $scope.getPhoto = function() {

    $cordovaCamera.getPicture().then(function(imageURI) {

      console.log(imageURI);

      photo = imageURI;

      $cordovaSocialSharing
        .shareViaTwitter("", photo)
        .then(function(result) { /* Success! */},
        function(err) { alert("Ruh-roh");});


    }, function(err) {
      console.err(err);
    }, {
      quality: 75,
      targetWidth: 320,
      targetHeight: 320,
      saveToPhotoAlbum: false
    });
  };
})
