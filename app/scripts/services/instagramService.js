'use strict';

angular.module('oigramApp')
  .factory('$instagramService', function ($http) {
    // Service logic
    var url = 'https://api.instagram.com/v1/tags/{0}/media/recent?client_id=2dc32c3cce4943b0bc020a3648f0a20f&callback=JSON_CALLBACK';

    // Public API here
    return {
      listImagesByTag: function ( tag, success ) {

        var replacedUrl = url.replace( '{0}', tag );

        $http({method: 'jsonp', url: replacedUrl}).
          success(function( data ) {
            // console.log( data );
            success( data );
          }).
          error(function() {
            console.log( 'error get' );
          });
      }
    };
  });
