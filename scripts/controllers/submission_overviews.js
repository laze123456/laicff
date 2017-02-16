'use strict';

/**
 * @ngdoc function
 * @name laicffApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the laicffApp
 */

google.load("visualization", "1", {packages:["geochart"]});




angular.module('laicffApp')
  .controller('SubmitOverviewsCtrl', function ($scope) {
  	// google.setOnLoadCallback(drawRegionsMap);

      	console.log('drawRegionsMap called');
        var data = google.visualization.arrayToDataTable([
          ['Country'],
          ['China'],
          ['Phillippines'],
          ['USA'],
          ['Portugal'],
          ['Germany'],
          ['Puerto Rico'],
          ['United Kingdom'],
          ['Canada'],
          ['Taiwan'],
          ['Turkey'],
          ['South Korea'],
          ['Australia'],
          ['Denmark'],
          ['Finland'],
          ['Spain'],
          ['Poland'],
          ['Iran'],
          ['United Arab'],
          ['Emirates'],
          ['Russia'],
          ['India'],
          ['France'],
          ['Greece'],
          ['Cyprus'],
          ['Kurdistan'],
          ['Italy'],
          ['Switzerland'],
          ['Netherlands'],
          ['Hong Kong'],
          ['Belgium'],
          ['Brazil'],
          ['Macao'],
          ['Sweden']

        ]);

        var options = {
			 defaultColor: '#720000'
        };

        var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
        chart.draw(data, options);


 });
