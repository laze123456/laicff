'use strict';

/**
 * @ngdoc function
 * @name laicffApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the laicffApp
 */
angular.module('laicffApp')
  .controller('AlbumCtrl', function ($scope, FacebookService) {

	$scope.loaded = false;
        FacebookService.getFacebookData()
          .then(function(data) {
          	/* To remove undefined entries */
          	console.log(data);
          	$scope.loaded = true;
            data = _.compact(data);
            $scope.albums = data;
            console.log($scope.albums);
        });
  })


.controller('AlbumDetailCtrl', function ($scope, FacebookService, $log, $route, $modal) {

	$scope.openPopup = function (clickedImage) {
		var image = clickedImage.images[0].source;
		if(clickedImage.likes != undefined)
			var likeCount = clickedImage.likes.data.length;
		else
			var likeCount = 0;
		if(clickedImage.comments != undefined)
		{
			var commentCount = clickedImage.comments.data.length;
			var commentArray =  clickedImage.comments.data;
		}
		else {
			var commentArray = [];
			commentArray[0] = {};
			commentArray[0].message = 'No Comments';
			var commentCount = 0;	
		}
		var profileLink = clickedImage.link;

	    var modalInstance = $modal.open (
		    {
		      template: ' \
		      <div class="modal-body"><div class="row">\
		      	<div class="img-popup-width">\
		      		<img class="" ng-src="' + image + '" width="100%"/>\
		      	</div>\
		      		<div class="container"><div class="popup-text">\
		      		<a href="' + profileLink + '" target="_blank"> Likes: ' + likeCount + '</a>\
		      		</div>\
		      		<div class="popup-text">\
		      		<a href="' + profileLink + '"> \
		      			 Comments: ' + commentCount + '</a>\
		      		</div> \
		      			<div class="comments-text"> \
		      				<a href="' + profileLink + '" target="_blank">' + commentArray[0].message + '</a><br>\
		      				<a href="' + profileLink + '" target="_blank"> ..See more comments</a>\
					      </div>\
				      </div>\
			      </div>\
		      </div>',
		      controller: ModalInstanceCtrl,
		      size: 'lg'
		    });
	    };

	var ModalInstanceCtrl = function ($scope, $modalInstance, FacebookService, $log) {

	};

	/* Fetches pictures from the selected album */
        FacebookService.getDetails($route.current.params.id)
          .then(function(allAlbumPictures) {
            $scope.pictureObjects = allAlbumPictures.data;
        });

})
