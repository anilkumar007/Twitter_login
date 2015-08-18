# Twitter_login
1) create a project from terminal as ionic start TwitterLogin blank <br/>
2)cd TwitterLogin project <br/>
3)Add the required platform in terminal as ionic add platform  and**** <br/>
4)Add the ng-cordova.min.js file above the cordova.ja file in our project <br/>
5)Insert that 'ngCordova' dependency in app.js file <br/>
6)Add the required plugin to display the twitter homeline tweet's <br/>
7)In terminal please type the cmd as cordova plugin add org.apache.cordova.inappbrowser <br/>
8)In terminal please include the Oauth library by typing the cmd as bower install ng-cordova-oauth -S <br/>
9)Include the Ouath js file in project as <script src="../ng-cordova-oauth/dist/ng-cordova-oauth.min.js"></script> <br/>
10) Include the required dependency in project as angular.module('starter', ['ionic', 'ngCordovaOauth'] <br/> 
11)In app.js I wrote an Controller to display the homeline Tweet's and it's functionality please have a look <br/>
12)Please update your cordova platform if the above procedure doesn't work

