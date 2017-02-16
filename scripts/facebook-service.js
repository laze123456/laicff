
angular.module('laicffApp')
.factory('FacebookService', function($q, $log, $http){

    var access_token ='?access_token=CAAJglUsaxKQBAKwaI7wSoQwggZBVovZAWynQwNYynC9GcWoUSOuZBxo7Ha6NrYQVskXMIW2YpkJXIYgqLVCQcVTcs7LZCYUOyqZAZBYbksxCXROVBMnGaAoZCQjeyy5s3XYHSAwFIBxEWx4VUma6ZAcMMx6WwmK0DZATnHLnUkOXjqxXNWYFTdanOnKLbtzz7ZC9YZD';
    authorizationResult = false;
    var facebook = "https:/graph.facebook.com/";
    var service = {};
    service.albums = [];


        /*
            Returns a promise which resolves to all albums of a user.
        */
        service.getFacebookData = function () {
    		return getUserAlbums().
                        then(function (allAlbums) {
                            return getAlbumPhotos(allAlbums);
                        });
        }

        /*
            Returns a promise which resolves to pictures inside a particular album 
        */
        service.getDetails = function(albumId) {
            return getAlbumPictures(albumId).
                        then(function (allAlbumPictures) {
                        	service.allAlbumPictures = allAlbumPictures;
                            return allAlbumPictures;
                        });
        }

        /*
	Returns an array of user's albums.
        */

	function getUserAlbums () {
            //create a deferred object using Angular's $q service
            var deferred = $q.defer();
            var promise = $http.get(facebook+ '389027294623512/albums' + access_token)
                            .success(function (albumResponse)
                             {
                                console.log("user albums fetch succss");
                                deferred.resolve(albumResponse);
                            })
                            .error(function (err) { 
                                $log.error(err);
                                //handle error with err
                            });
            /* return the promise of the deferred object */
            return deferred.promise;
        }

        /*
            Returns an array containing images for each of the albums. 
        */

        function getAlbumPhotos (albumResponse) 
        {
             return $q.all(albumResponse.data.map(function(album) {return $http.get(facebook + album.id + '/photos' + access_token).then(function(response) {
                return({
                        id: album.id,
                        name: album.name,
                        galleryImagesData: response.data
                });
             }, function(err) {
                 return(err);
             })}));

        }

        /* 
            Returns an array of images inside a particular album 
        */

        function getAlbumPictures (albumId) {
            var deferred = $q.defer();
            var promise = $http.get(facebook + albumId + '/photos' + access_token)
                            .success(function (allAlbumPictures)
                             {
                                deferred.resolve(allAlbumPictures);
                            })
                            .error(function (err) { 
                                $log.error(err);
                                //handle error with err
                            });
            /* return the promise of the deferred object */
            return deferred.promise;
        }

    return service;
});
