  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCpzV386T1p5B8B0vi-IF3fozOzTpSEuKc",
    authDomain: "komentars-felt.firebaseapp.com",
    databaseURL: "https://komentars-felt.firebaseio.com",
    projectId: "komentars-felt",
    storageBucket: "",
    messagingSenderId: "553360339489"
  };
  firebase.initializeApp(config);

var app = angular.module("app", ["firebase"]);

app.factory("kommentarer", function($firebaseArray) {
    var ref = firebase.database().ref().child("kommentarer");
    return $firebaseArray(ref);
  }
);

app.controller("KommentarCtrl", function($scope, kommentarer) {
    $scope.kommentarer = kommentarer;

    $scope.kommentar = {
    text: "",
    skribent: ""
    };
  $scope.addComment = function() {
    // Här lägger vi till vår kommentar ($scope.kommentar) till listan med kommentarer.
    // Det sparas automatiskt i Firebase-databasen.
    $scope.kommentarer.$add($scope.kommentar);

    // Tömmer texten i kommentarfältet
    $scope.kommentar = {
        text: "",
        skribent: ""
    };
};
  }
);