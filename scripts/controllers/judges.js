'use strict';

/**
 * @ngdoc function
 * @name laicffApp.controller:MainCtrl
 * @description
 * # JudgesCtrl
 * Controller of the laicffApp
 */
angular.module('laicffApp')
  .controller('JudgesCtrl', ['$scope', '$location', '$anchorScroll', function ($scope, $location, $anchorScroll) {

  	$scope.showJudges = true;
  	$scope.showJudge0Info = false;
  	$scope.showJudge1Info = false;
  	$scope.showJudge2Info = false;
  	$scope.showJudge3Info = false;
    $scope.showJudge4Info = false;
    $scope.showJudge5Info = false;
    $scope.showJudge6Info = false;
    $scope.showJudge7Info = false;
    $scope.showJudge8Info = false;
  	// $location.hash('top');


  	$scope.goToTop = function() {
  		$anchorScroll();
  	};

  	$scope.showJudgeInfo = function(judge_index) {
  		console.log(judge_index);
  		switch (judge_index)
  		{
  			case 0:
  				$scope.showJudges = false;
  				$scope.showJudge0Info = true;
  				$scope.goToTop();
  				break;

  			case 1:
  				$scope.showJudges = false;
  				$scope.showJudge1Info = true;
  				$scope.goToTop();
  				break;
  			case 2:
  				$scope.showJudges = false;
  				$scope.showJudge2Info = true;
  				$scope.goToTop();
  				break;
  			case 3:
  				$scope.showJudges = false;
  				$scope.showJudge3Info = true;
  				$scope.goToTop();
  				break;
        case 4:
          $scope.showJudges = false;
          $scope.showJudge4Info = true;
          $scope.goToTop();
          break;
        case 5:
          $scope.showJudges = false;
          $scope.showJudge5Info = true;
          $scope.goToTop();
          break;
        case 6:
          $scope.showJudges = false;
          $scope.showJudge6Info = true;
          $scope.goToTop();
          break;
        case 7:
          $scope.showJudges = false;
          $scope.showJudge7Info = true;
          $scope.goToTop();
          break;
        case 8:
          $scope.showJudges = false;
          $scope.showJudge8Info = true;
          $scope.goToTop();
          break;


  			default: break;

  		}
  	};

  	$scope.goBackToList = function() {
	  	$scope.showJudges = true;
	  	$scope.showJudge0Info = false;
	  	$scope.showJudge1Info = false;
	  	$scope.showJudge2Info = false;
	  	$scope.showJudge3Info = false;
      $scope.showJudge4Info = false;
      $scope.showJudge5Info = false;
      $scope.showJudge6Info = false;
      $scope.showJudge7Info = false;
      $scope.showJudge8Info = false;
  	};

  }]);
